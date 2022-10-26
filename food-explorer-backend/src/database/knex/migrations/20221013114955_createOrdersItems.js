exports.up = knex => knex.schema.createTable("orders_items", table => {
    table.increments("id");
    table.text("name");
    table.integer("price");
    table.integer("quantity");
    
    table.integer("order_id").references("id").inTable("orders");
    table.integer("dish_id").references("id").inTable("dishes");

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("orders_items");