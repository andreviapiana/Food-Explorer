const knex = require("../database/knex");

class OrdersController {
    async create(request, response) {
        const { cart, payment_method, total } = request.body;
        const { user_id } = request.params;

        const order_id = await knex("orders").insert({
            order_status,
            payment_method,
            total,
            user_id
        });

        const items = cart.map(cart => {
            return {
                order_id,
                dish_id: cart.dish_id,
                name: cart.dish_title,
                price: cart.dish_price,
                quantity: cart.quantity
            }
        });

        await knex("orders_items").insert(items);

        return response.json(order_id);
    }
}

module.exports = OrdersController;
