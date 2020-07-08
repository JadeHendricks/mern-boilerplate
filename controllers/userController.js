const User = require('../models/UserModel');

exports.getAllUsers = (req, res) => {
    res.send('All Users')
}