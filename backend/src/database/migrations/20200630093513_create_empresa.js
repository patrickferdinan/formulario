
exports.up = function(knex) {
    return knex.schema.createTable('empresa', function(table){
      table.increments();
      table.string('nome').notNullable();

      table.string('usuario_id').notNullable();

      table.foreign('usuario_id').references('id').inTable('usuario');  
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('empresa');
};
