const express = require("express");
const userSchema = require ("../models/user");
const user = require("../models/user");

const route = express.Router();

//create user
route.post('/users', (req, res) => {
    const user = userSchema(req.body);

    user.save()
        .then((data) => res.json(data)) //manejo de promesa
        .catch((error) => res.json({ message:error }));

});

//get all users
route.get('/getUsers', (req,res) => {

    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }));
});

//get user by id
route.get('/getUser/:id', (req,res) => {
    const { id } = req.params; // se obtiene el id del json

    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error}));
});

//updating user by id
route.put('/updateUser/:id', (req,res) => {
    const { id } = req.params; // se obtiene el id a modificar
    const { name, age, email} = req.body;

    userSchema.updateOne({ _id: id}, { $set: {name, age, email} }) // set para que pueda actualizar el valor traido por el _id
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }))
});

//deleting user
route.delete('/deleteuser/:id', (req, res) => {
    const {id} = req.params;

    userSchema.findOneAndDelete({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message:error }));
});

module.exports = route;

