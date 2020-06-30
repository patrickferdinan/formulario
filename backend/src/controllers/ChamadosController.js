const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const chamados = await connection('chamados').select('*');
        return response.json(chamados);
    },
    
    async create(request, response) {
        const { assunto, departamento, categoria, mensagem, prioridade } = request.body;
        const empresa_id = request.headers.authorization;

        const [id] = await connection('chamados').insert({
            assunto,
            departamento,
            categoria,
            mensagem,
            prioridade,
            empresa_id
        });

        return response.json({ id, assunto });
    },
}