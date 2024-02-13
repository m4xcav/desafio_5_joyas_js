const router = require('express').Router();
const postsRouter = require('./rutasJoyas/rutasJoyas');

router.use('/joyas', postsRouter);

module.exports = router;