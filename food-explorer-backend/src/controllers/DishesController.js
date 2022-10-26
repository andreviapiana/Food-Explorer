const knex = require("../database/knex");

const AppError = require('../utils/AppError');

class DishesController {
    async create(request, response) {
        const { title, description, category, price, image, ingredients } = request.body;

        const checkDishAlreadyExists = await knex("dishes").where({title}).first();
    
        if(checkDishAlreadyExists){
            throw new AppError("Este prato já existe no cardápio.")
        }

        const dish_id = await knex("dishes").insert({
            title,
            description,
            price,
            category,
            image,
        });
        
        console.log(dish_id);

        const ingredientsInsert = ingredients.map(name => {
            return {
                name,
                dish_id
            }
        });

        console.log(ingredientsInsert);

        await knex("ingredients").insert(ingredientsInsert);

        return response.json(); 
    }

    async show(request, response) {
        const { id } = request.params;

        const dish = await knex("dishes").where({ id }).first();
        const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("name");

        return response.json({
            ...dish,
            ingredients
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("dishes").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { title, ingredients } = request.query;

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