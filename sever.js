

import express from 'express';
const app = express();
//const fun = require('./api');
import run from './api.js';
import cors from 'cors'
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post("/suitabilityAssesment", async (req, res) => {



    const prompt = req.body.msg;
    console.log(req.body);

    const output = await run(prompt);
    res.send(output);






})

app.listen(8000, () => {
    console.log("setver started, Have A good Day");
})