const db = require('../database/dbindex');
const { selectFiltros } = require('../database/querys/queryindex');

const getJoyasFiltro = async (req, res) => {
const { precio_min, precio_max, categoria, metal} = req.query; 
const queryParams = [];

let query = selectFiltros;


if (precio_min){
    queryParams.push(precio_min);
    query += ' AND precio >= $' + queryParams.length;
    }

if (precio_max){
    queryParams.push(precio_max);
    query += ' AND precio <= $' + queryParams.length;
}

if (categoria){
    queryParams.push(categoria);
    query += ' AND categoria = $' + queryParams.length;
}

if (metal){
    queryParams.push(metal);
    query += ' AND metal = $' + queryParams.length;
}

try {
    const { rowCount, rows } = await db.query(query, queryParams);
    
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