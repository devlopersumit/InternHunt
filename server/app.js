const express = require('express');
const cors = require('cors');
require('dotenv').config

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//DB Connection


//Test Route
app.get('/', (req, res) => {
    res.send('Testing...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on prot ${PORT}`)
});