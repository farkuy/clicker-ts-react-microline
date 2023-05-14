const {Click} = require('../models/models')
const sequelize = require('../db')

class ClickerController {

    async destroyLoad(req, res) {
        await Click.destroy({where: {}})
    }
    async firstClick(req, res) {
        const {id, click} = req.body;
        const sumClick = await Click.create({click});
        return res.json(sumClick)
    }
    async getTheClicksBack(req, res) {
        const { data: id  } = req.body;
        const clicks = await Click.findAll();
        let clicksFilter = clicks.filter((d, index) => {
            if (d[`dataValues`].id === id.id){
                return true
            }
        })
        return res.json(clicksFilter)
    }
    async addClicks(req, res) {
        const { id, click } = req.body;
        const [numUpdated, updatedClick] = await Click.update(
            { click: sequelize.literal(`${click} + click`) },
            { where: { id: id } }
        );
        return res.json(numUpdated)
    }
}

module.exports = new ClickerController()
