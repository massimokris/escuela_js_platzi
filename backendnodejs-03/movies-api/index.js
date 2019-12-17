const express = require('express');
const app = express();

const { config } = require('./config/index');

//crear un ruta en express
//con app le indicamos que metodo va a utilizar (get, post, put, etc)
//como primer parametro la ruta
//como segundo parametro un callback que va a tener un request y un response
app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/json', (req, res) => {
    res.json({hello: 'world'});
});

app.get('/challenge/:year', (req, res) => {
    let bisiesto = true;
    const year = req.params.year;
    if (year %4 === 0) {
        if (year %100 === 0) {
            bisiesto = false;
        }
    } else {
        bisiesto = false;
    }
    res.send(`Bisiesto: ${bisiesto}`);
});

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});

