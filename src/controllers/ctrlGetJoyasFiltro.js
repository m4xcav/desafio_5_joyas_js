const db = require('../database/dbindex');
const { selectFiltros } = require('../database/querys/queryindex');

const getJoyasFiltro = async (req, res) => {
const filtro = req.params.id; 
let query = '';
switch(filtro){
    case filtro === undefined:
        return res.status(400).json({
            msg: 'invalid or missing filter'
        });
    case filtro === 'precio_max':
        query = 'precio DESC'
        break;
    case filtro === 'precio_min':
        query = 'precio ASC'
        break;
    case filtro === 'categoria' || filtro === 'metal':
        query = filtro
        break;
    default:
        res.status(400).json({
            msg: 'Please provide a valid filter'
        });
        break;
}
try {
    const { rowCount, rows } = await db.query(selectFiltros, query);
    if (rowCount > 0) {
        res.status(200).json({
            msg: 'Data fetch successfuly',
            dataCount: rowCount,
            data: rows,
        });
    } else {
        res.status(200).json({
            msg: 'No data found',
        });
    }
} catch (error) {
    res.status(400).send({
        status: 'Bad request',
        msg: error,
    });
}
};

module.exports = {
	getJoyasFiltro,
};