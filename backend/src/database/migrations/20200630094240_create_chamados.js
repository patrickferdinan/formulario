
exports.up = function(knex) {
    return knex.schema.createTable('chamados', function(table){
      table.increments();
      table.string('assunto').notNullable();
      table.string('departamento').notNullable();
      table.string('categoria').notNullable();
      table.string('mensagem').notNullable();
      table.string('prioridade').notNullable();

      table.string('empresa_id').notNullable();

      table.foreign('empresa_id').references('id').inTable('empresa');  
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chamados');
};
