const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const { id } = request.body;

        const usuario = await connection('usuario')
        .where('id', id,)
        .select('email')
        .first();

        if(!usuario) {
            return response.status(400).json({ error: 'No User found with this Email' });
        }

        return response.json(usuario);
    },
}