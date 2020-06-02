const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ficha = await connection('ficha').select('*');
      
        return response.json(ficha);
      },

    async create(request, response) {
        const { cliente, solicitante, descricao, data } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

 await connection('ficha').insert({
    id,
    cliente,
    solicitante,
    descricao,
    data,
  })

  return response.json({ id });
  },

  async delete(request, response) {
      const { id } = request.params;
      const ficha_id = request.headers.authorization;

      const ficha = await connection('ficha').where('id', id).select('ficha_id').first();

      if (ficha.ficha_id != ficha_id){
          return response.status(401).json({ error: 'Operation not permitted.'});
      }

      await connection('ficha').where('id', id).delete();

      return response.status(204).send();
  }
};