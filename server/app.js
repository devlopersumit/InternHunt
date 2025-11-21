const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//DB Connection
connectDB();

//Test Route
app.get('/', (req, res) => {
    res.send('InternHunt Backend is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});