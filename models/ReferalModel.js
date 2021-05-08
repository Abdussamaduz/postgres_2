const Database = require('../modules/postgres')

class ReferalModel {

    async createReferal (name) {
        let { rows } = await Database.query(`INSERT INTO referal (referal_name) VALUES ('${name}') RETURNING *`)
        return rows
    }

    async getReferals() {
        let { rows } = await Database.query(`SELECT * FROM referal`)
        return rows
    }

    async delUser(id) {
        let { rows } = await Database.query(`DELETE FROM referal WHERE user_id='${id}'`)
    }
}

module.exports = new ReferalModel()