const Database = require('../modules/postgres')

class UserModel {

    async createUser(name, age) {
        let { rows } = await Database.query(`INSERT INTO users (user_name, user_age) VALUES ('${name}', '${age}')`)
        return rows
    }

    async getUsers() {
        let { rows } = Database.query(`SELECT * FROM users`)
        return rows
    }

    async delUser(name, age) {
        let { rows } = Database.query(`DELETE FROM users '${name}', '${age}'`)
        return rows
    }
}

module.exports = UserModel