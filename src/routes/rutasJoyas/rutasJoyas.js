const router = require('express').Router();
const {
	ctrlGetJoyas,
	ctrlGetFiltros,
	ctrlGetjoyaId,
} = require('../../controllers/ctrlindex');
const { getTodoJoyas } = ctrlGetJoyas;
const { getJoyasFiltro } = ctrlGetFiltros;
const { getjoyaid } = ctrlGetjoyaId; 
router.get('/filtros', getTodoJoyas);
router.get('/joya/:id', getjoyaid);
router.post('/filtros/:id', getJoyasFiltro);

module.exports = router;