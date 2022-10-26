const knex = require("../database/knex");

class OrderItemsController {
    async index(request, response) {
        const user_id = request.user.id;

        const tags = await knex("order_items")
            .where({ user_id })
            .groupBy("name")

        return response.json(tags);
    }
}

module.exports = OrderItemsController;