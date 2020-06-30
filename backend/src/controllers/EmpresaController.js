const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const empresa = await connection('empresa').select('*');
    
        return response.json(empresa);
    },

    async create(request, response) {
        const {nome} = request.body;
        const usuario_id = request.headers.authorization;

        const [id] = await connection('empresa').insert({
        nome,
        usuario_id, 
        });

        return response.json({id, nome});
    },

    async delete(request, response) {
        const {id} = request.params;
        const usuario_id = request.headers.authorization;

        const empresa = await connection("empresa")
        .where('id', id).select('usuario_id').first();

        if (empresa.usuario_id !== usuario_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('empresa').where('id', id).delete();

        return response.status(204).send();
    }
};