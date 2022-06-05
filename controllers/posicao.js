const forno = require('../models/crudposicao');


exports.selectposicao = async (req, res, next) => {
    try {
      const [posicao] = await forno.selectposicao();
      res.status(200).json(posicao);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.selectbuscaposicao = async (req, res, next) => {
    try {
      const [posicao] = await forno.selectbuscaposicao();
      res.status(200).json(posicao);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.udpateposicao = async (req, res, next) => {
    try {
      const putposicao = await forno.updateposicao(req.body.posicao_buscar);
      res.status(200).json(putposicao);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };