const router = require('express').Router();
const {
	ctrlGetJoyas,
	ctrlGetFiltros,
} = require('../../controllers/ctrlindex');
const { getTodoJoyas } = ctrlGetJoyas;
const { getJoyasFiltro } = ctrlGetFiltros;
router.get('/get', ctrlGetJoyas);
router.post('/filtros/:id', crearPosts);

module.exports = router;