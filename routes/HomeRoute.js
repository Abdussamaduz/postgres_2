const router = require('express').Router()
const Users = require('../models/UserModel')
const Referals = require('../models/ReferalModel')

router.get('/', async (req, res) => {
    let users = await Users.getUser()
    let referals = await Referals.getReferals()
    // console.table(users);
    // console.table(referals);
    res.render('index', {
        users,
        referals
    })
})

router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    console.log(id);
    await Users.delUser(id)
    res.redirect('/')
})

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await Users.editUser(id);
    res.redirect('/');
})

router.post('/', async (req, res) => {
    // console.log(req.body);
    await Users.createUser(req?.body?.name, req?.body?.age, req?.body?.referal)
    res.redirect('/')
})

module.exports = {
    path: '/',
    router
}