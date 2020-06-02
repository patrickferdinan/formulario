
exports.up = function(knex) {
 return knex.schema.createTable('ficha', function (table) {
      table.string('id').primary();
      table.string('cliente').notNullable();
      table.string('solicitante').notNullable();
      table.string('descricao').notNullable();
      table.string('data').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ficha');
};
