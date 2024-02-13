const db = require('../database/dbindex');
const { selectPosts } = require('../database/querys/queryindex');

const getTodoJoyas = async (req, res) => {
	try {
		const { rowCount, rows } = await db.query(selectPosts);
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
	getTodoJoyas,
};
