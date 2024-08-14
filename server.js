// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
import datas from "../components/datas/data.json" ;

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const data = req.body;

 
    const filePath = path.join(__dirname, 'datas');

 
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        let jsonData;
        try {
            jsonData = JSON.parse(fileData);
        } catch (e) {
            return res.status(500).send('Error parsing JSON');
        }


        jsonData.push(data);

     
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.status(200).send('Data saved successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
