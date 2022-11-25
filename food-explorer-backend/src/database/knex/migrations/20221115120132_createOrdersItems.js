exports.up = knex => knex.schema.createTable("ordersItems", table => {
    table.increments("id");
    table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE");
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");
   
    table.text("title");
    table.integer("quantity");

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("ordersItems");