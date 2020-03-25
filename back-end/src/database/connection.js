const knex = require('knex');
const configuration = require('../../knexfile'); //arquivo de configurações do knex

const connection = knex(configuration.development);

module.exports = connection;