
exports.up = function(knex) { //O método up é responsável pela criação das tabelas
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    });
};

exports.down = function(knex) { //Nesse método o desenvolvedor pode voltar atrás na criação de uma tabela
    return knex.schema.dropTable('ongs');
  
};
