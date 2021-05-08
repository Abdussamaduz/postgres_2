const router = require('express').Router()
const Users = require('../models/UserModel')

router.get('/', async (req, res) => {
    let users = await Users.getUser()
    
    // console.log(users);
    users.forEach(element => {
        console.log(element);
    });
    res.render('delete')
})

module.exports = {
    path: '/delete',
    router
}