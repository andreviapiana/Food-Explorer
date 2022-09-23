exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.text("name");
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("ingredients");