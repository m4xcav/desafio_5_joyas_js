const db = require('../database/dbindex');
const format = require('pg-format');
const { prepararHATEOAS }  = require('./hateoas');
const { selectJoyas } = require('../database/querys/queryindex');

const getjoyaid = async (req, res) => {
    const id = req.params.id
    
    try {
        const joyas = await db.query(formattedQuery);
		const formatohetoas = await prepararHATEOAS(joyas.rows); 
		console.log('Contenido de HATEOAS:', formatohetoas); 
		const totalJoyas = joyas.rowCount
		if (totalJoyas > 0) {
    		res.status(200).json(formatohetoas);
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
    getjoyaid,
};