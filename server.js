const express = require('express');
const connectDB = require('./config/db')
const app = express();
var cors = require("cors")

// connect database
connectDB()

app.get('/',(req,res)=> res.send('API Running'));

// init middleware

app.use(express.json({extended:false}));

var corsOptions = {
    origin: 'https://davidrodriguezdev.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

// Define Routes
app.use('/api/contacts/', require('./routes/api/contacts/'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port${PORT}`));