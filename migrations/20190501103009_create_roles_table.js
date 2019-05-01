// implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", tbl => {
    // each table needs a primary key
    // we'll call it id, integer, auto-increment
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();

    tbl.timestamps(true, true); //create_at and updated_at
  });
};

//undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};

// npx knex list
// npx knex migrate:make create_roles_table
// npx knex migrate:latest
