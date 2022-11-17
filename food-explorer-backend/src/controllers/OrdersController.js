const knex = require("../database/knex");

class OrdersController {
    async create(request, response) {
        const { cart, orderStatus, totalPrice, paymentMethod } = request.body;
        const user_id = request.user.id;

        const order_id = await knex("orders").insert({
            orderStatus,
            totalPrice,
            paymentMethod,
            user_id
        });

        console.log(order_id);

        const itemsInsert = cart.map(cart => {
            return {
                title: cart.title,
                quantity: cart.quantity,
                dish_id: cart.id,
                order_id
            }
        });

        await knex("ordersItems").insert(itemsInsert);

        return response.json(order_id);
    }

    async show(request, response) {
        const { id } = request.params;

        const order = await knex("orders").where({ id }).first();
        const orderItems = await knex("ordersItems").where({ order_id: id });

        return response.status(201).json({
            ...order,
            orderItems
        });
    }

    async index(request, response) {
        const { user_id } = request.query;

        const orders = await knex("orders")
            .where({ user_id })

        return response.status(201).json(orders);
    }

    async update(request, response) {
        const { id, orderStatus } = request.body;
    
        await knex("orders").update({orderStatus}).where({ id })
        
        return response.status(201).json();
    }
}

module.exports = OrdersController;