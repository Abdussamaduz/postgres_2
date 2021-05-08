// const UserModel = require('./models/UserModel')
// const users = new UserModel()

// async function main() {
//     let res = await users.getUser()
//     console.log(res);
// }

// main()

const Referals = require('./models/ReferalModel')
async function main() {
    let res = await Referals.createReferal("Dostimdan")
    console.log(res);
}

main()