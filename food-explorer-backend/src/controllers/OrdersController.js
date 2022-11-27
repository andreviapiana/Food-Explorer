// Knex Import
const knex = require("../database/knex");

class OrdersController {
    async create(request, response) {
        // Capturing Body Parameters and ID Parameters
        const { cart, orderStatus, totalPrice, paymentMethod } = request.body;
        const user_id = request.user.id;

        // Inserting Order infos into the database
        const order_id = await knex("orders").insert({
            orderStatus,
            totalPrice,
            paymentMethod,
            user_id
        });

        // Inserting Items infos into the database
        const itemsInsert = cart.map(cart => {
            return {
                title: cart.title,
                quantity: cart.quantity,
                dish_id: cart.id,
                order_id
            }
        });

        await knex("ordersItems").insert(itemsInsert);

        return response.status(201).json(order_id);
    }

    async index(request, response) {
        // Capturing ID Parameters
        const user_id = request.user.id;

        // Getting the user data through the informed ID
        const user = await knex("users").where({id: user_id}).first();

        // Listing Orders and OrdersItems at the same time (innerJoin) to User
        if (!user.isAdmin) {

            const orders = await knex("ordersItems").where({ user_id })
                .select([
                    "orders.id",
                    "orders.user_id",
                    "orders.orderStatus",
                    "orders.totalPrice",
                    "orders.paymentMethod",
                    "orders.created_at",
                ])

                .innerJoin("orders", "orders.id", "ordersItems.order_id")
                .groupBy("orders.id")
            
            const ordersItems = await knex("ordersItems") 
            const ordersWithItems = orders.map(order => {
                const orderItem = ordersItems.filter(item => item.order_id === order.id);

                return {
                    ...order,
                    items: orderItem
                }
            })
            
            return response.status(200).json(ordersWithItems);

        // Listing Orders and OrdersItems at the same time (innerJoin) to Admin
        } else {
            const orders = await knex("ordersItems")
                .select([
                    "orders.id",
                    "orders.user_id",
                    "orders.orderStatus",
                    "orders.totalPrice",
                    "orders.paymentMethod",
                    "orders.created_at",
                ])

                .innerJoin("orders", "orders.id", "ordersItems.order_id")
                .groupBy("orders.id")
        
            const ordersItems = await knex("ordersItems") 
            const ordersWithItems = orders.map(order => {
                const orderItem = ordersItems.filter(item => item.order_id === order.id);

                return {
                    ...order,
                    items: orderItem
                }
            })
        
            return response.status(200).json(ordersWithItems);
        }
    }

    async update(request, response) {
        // Capturing Body Parameters
        const { id, orderStatus } = request.body;
    
        // Updating Order infos through the informed ID
        await knex("orders").update({ orderStatus }).where({ id })
        
        return response.status(201).json();
    }
}

module.exports = OrdersController;