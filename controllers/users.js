const User = require('../models/users');

module.exports.getUsers = (req, res) => {
    User.find({})
        .then(users => res.send({ data: users }))
        .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
    console.log(req.body);
    const { name, about, avatar } = req.body;

    User.create({ name, about, avatar })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: err.message }));
};
