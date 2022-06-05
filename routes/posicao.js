const express = require('express');

const Controller = require('../controllers/posicao');

const router = express.Router();

router.get('/', Controller.selectposicao);

router.get('/buscaposicao', Controller.selectbuscaposicao);

router.put('/', Controller.udpateposicao);

//router.delete('/:id', Controller.deletereceita);

module.exports = router;