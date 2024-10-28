const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // Optional, for user data persistence
const app = express();

dotenv.config();

app.use(express.json());

// Connect to your database if needed
 mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {dbName: 'VerficationEmail and otp'}).then(()=>{
    console.log('mongodb connected');
 });

app.get('/', (req, res) => {
    res.send('Email Sender API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
