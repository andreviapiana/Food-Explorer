// Knex, App Error and Disk Storage Import
const knex = require("../database/knex");
const AppError = require('../utils/AppError');
const DiskStorage = require("../providers/DiskStorage")

class DishesController {
    async create(request, response) {
        // Capturing Body Parameters
        const { title, description, category, price, ingredients } = request.body;

        // Checking if dish already exists on the database
        const checkDishAlreadyExists = await knex("dishes").where({title}).first();
    
        if(checkDishAlreadyExists){
            throw new AppError("Este prato já existe no cardápio.")
        }

        // Requesting image filename
        const imageFileName = request.file.filename;

        // Instantiating diskStorage
        const diskStorage = new DiskStorage()

        // Saving image file
        const filename = await diskStorage.saveFile(imageFileName);

        // Inserting the infos into the database
        const dish_id = await knex("dishes").insert({
            image: filename,
            title,
            description,
            price,
            category,
        });

        // Checking if dish has only one ingredient and inserting the infos into the database
        const hasOnlyOneIngredient = typeof(ingredients) === "string";

        let ingredientsInsert

        if (hasOnlyOneIngredient) {
            ingredientsInsert = {
                name: ingredients,
                dish_id
            }

        } else if (ingredients.length > 1) {
            ingredientsInsert = ingredients.map(name => {
                return {
                    name,
                    dish_id
                }
            });
        }

        await knex("ingredients").insert(ingredientsInsert);

        return response.status(201).json(); 
    }

    async update(request, response) {
        // Capturing Body Parameters and ID Parameters
        const { title, description, category, price, ingredients, image } = request.body;
        const { id } = request.params;

        // Requesting image filename
        const imageFileName = request.file.filename;
    
        // Instantiating diskStorage
        const diskStorage = new DiskStorage();

        // Getting the dish data through the informed ID
        const dish = await knex("dishes").where({ id }).first();
    
        // Deleting the old image if a new image is uploaded and saving the new image
        if (dish.image) {
          await diskStorage.deleteFile(dish.image);
        }
    
        const filename = await diskStorage.saveFile(imageFileName);
    
        // Verifications
        dish.image = image ?? filename;
        dish.title = title ?? dish.title;
        dish.description = description ?? dish.description;
        dish.category = category ?? dish.category;
        dish.price = price ?? dish.price;

        // Updating the dish infos through the informed ID
        await knex("dishes").where({ id }).update(dish);
    
        // Checking if dish has only one ingredient and updating the infos into the database
        const hasOnlyOneIngredient = typeof(ingredients) === "string";

        let ingredientsInsert

        if (hasOnlyOneIngredient) {
            ingredientsInsert = {
                name: ingredients,
                dish_id: dish.id,
            }
        
        } else if (ingredients.length > 1) {
            ingredientsInsert = ingredients.map(ingredient => {
                return {
                dish_id: dish.id,
                name : ingredient
                }
            });
        }
          
        await knex("ingredients").where({ dish_id: id}).delete()
        await knex("ingredients").where({ dish_id: id}).insert(ingredientsInsert)

        return response.status(201).json('Prato atualizado com sucesso')
    }

    async show(request, response) {
        // Capturing ID Parameters
        const { id } = request.params;

        // Getting the dish and ingredients data through the informed ID
        const dish = await knex("dishes").where({ id }).first();
        const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("name");

        return response.status(201).json({
            ...dish,
            ingredients
        });
    }

    async delete(request, response) {
        // Capturing ID Parameters
        const { id } = request.params;

        // Deleting dish through the informed ID
        await knex("dishes").where({ id }).delete();

        return response.status(202).json();
    }

    async index(request, response) {
        // Capturing Query Parameters
        const { title, ingredients } = request.query;

        // Listing Dishes and Ingredients at the same time (innerJoin)
        let dishes;

        if (ingredients) {
            const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());
            
            dishes = await knex("ingredients")
                .select([
                    "dishes.id",
                    "dishes.title",
                    "dishes.description",
                    "dishes.category",
                    "dishes.price",
                    "dishes.image",
                ])
                .whereLike("dishes.title", `%${title}%`)
                .whereIn("name", filterIngredients)
                .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
                .groupBy("dishes.id")
                .orderBy("dishes.title")
        } else {
            dishes = await knex("dishes")
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        }
            
        const dishesIngredients = await knex("ingredients") 
        const dishesWithIngredients = dishes.map(dish => {
            const dishIngredient = dishesIngredients.filter(ingredient => ingredient.dish_id === dish.id);
    
            return {
                ...dish,
                ingredients: dishIngredient
            }
        })
        
        return response.status(200).json(dishesWithIngredients);
    }

}

module.exports = DishesController;