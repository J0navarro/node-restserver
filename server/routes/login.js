const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');

const app = express();

app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            });
        } else if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                message: '(Usuario) o contraseña incorrectos'
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {

            return res.status(400).json({
                ok: false,
                message: 'Usuario o (contraseña) incorrectos'
            });

        } else {
            let token = jwt.sign({
                usuario: usuarioDB,
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
            res.json({
                ok: true,
                usuario: usuarioDB,
                token
            });
        }

    });



})


module.exports = app;