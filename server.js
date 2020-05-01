const express = require('express');
const connectDB = require('./config/db')
const app = express();
var cors = require("cors")

// connect database
connectDB()

app.get('/',(req,res)=> res.send('API Running'));

// init middleware

app.use(express.json({extended:false}));

// Set up a whitelist and check against it:
var whitelist = ['http://davidrodriguezdev.com', 'https://drodcr.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));

// Define Routes
app.use('/api/contacts', require('./routes/api/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port${PORT}`));
