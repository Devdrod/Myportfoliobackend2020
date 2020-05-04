const express = require('express');
const connectDB = require('./config/db')
const app = express();
var cors = require("cors")

// connect database
connectDB()

app.get('/',(req,res)=> res.send('API Running'));




// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://davidrodriguezdev.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





// init middleware

app.use(express.json({extended:false}));

// Set up a whitelist and check against it:
var whitelist = ['http://davidrodriguezdev.com', 'https://myportfoliobackend2020.herokuapp.com', 'https://devdrod.github.io/Reactscroll-jrportfolio/' ]
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
app.use('*', cors(corsOptions));

// Define Routes
app.use('/api/contacts', require('./routes/api/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port${PORT}`));
