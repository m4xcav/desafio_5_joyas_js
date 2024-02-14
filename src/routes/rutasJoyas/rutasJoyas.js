const router = require('express').Router();
const {
	ctrlGetJoyas,
	ctrlGetFiltros,
} = require('../../controllers/ctrlindex');
const { getTodoJoyas } = ctrlGetJoyas;
const { getJoyasFiltro } = ctrlGetFiltros;
router.get('/', getTodoJoyas);
router.post('/filtros/:id', getJoyasFiltro);

module.exports = router;