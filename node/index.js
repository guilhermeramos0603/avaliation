'use strict';

const express = require('express');
const app = express();
app.use(express.json());


const fs = require('fs');
const data = fs.readFileSync('user.json');
const file = JSON.parse(data);


app.post('/candidates', async function (req, res) {

    const obj = {
        id: Date.now(),
        name: req.body.name,
        skills: req.body.skills
    }

    const result = file.push(obj)

    var newData = JSON.stringify(file);
    fs.writeFile("user.json", newData, (err) => {
        // Error checking
        if (err) throw err;
        return res.status(201).json({
            timestamp: Date.now(),
            ok: true,
            message: "User created!"
        })
    });





});

app.get('/candidates/search', function (req, res) {
    
    return res.status(200).json({
        timestamp: Date.now(),
        ok: true,
        data: data
    })
});

app.listen(process.env.HTTP_PORT || 3000);
