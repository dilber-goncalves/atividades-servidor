const imoveis = require('../dados/imoveis');

const get = (req, res) => {
    return res.json(imoveis);
};

const getPorId = (req, res) => {
    const { id } = req.params; 
    const imovel = imoveis.find((item) => {
        return item.id === Number(id);
    })
    
    return res.json(imovel);
};

module.exports = {
    get, getPorId
}