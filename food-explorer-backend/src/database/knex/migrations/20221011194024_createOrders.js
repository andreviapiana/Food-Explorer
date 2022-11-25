exports.up = knex => knex.schema.createTable("orders", table => {
    table.increments("id");
    table.integer("user_id").references("id").inTable("users");
   
    table.text("orderStatus");
    table.text("totalPrice");
    table.text("paymentMethod");

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("orders");