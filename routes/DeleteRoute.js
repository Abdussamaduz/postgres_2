const router = require('express').Router()
const Users = require('../models/UserModel')

router.get('/', async (req, res) => {
    let users = await Users.getUser()
    
    // console.log(users);
    console.log(users);
    res.redirect('/')
})

router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    await Users.delUser(id)
    res.redirect('/')
})

module.exports = {
    path: '/delete',
    router
}