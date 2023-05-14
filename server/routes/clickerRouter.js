const Router = require('express')

const router = new Router
const ClickerController = require('../contollers/clickerController')

router.post('/', ClickerController.firstClick)
router.post('/addClick', ClickerController.addClicks)
router.post('/delete', ClickerController.destroyLoad)
router.post('/get', ClickerController.getTheClicksBack)
module.exports = router