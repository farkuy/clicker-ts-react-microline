const Router = require('express')

const router = new Router
const clickerRouter = require('./clickerRouter')

router.use('/clicker', clickerRouter )

module.exports = router