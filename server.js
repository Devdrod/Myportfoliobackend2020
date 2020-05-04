// const express = require('express');
const connectDB = require('./config/db')
// const app = express();
// var cors = require("cors")

// // connect database
connectDB()

app.get('/',(req,res)=> res.send('API Running'));

// // init middleware

app.use(express.json({extended:false}));

// var corsOptions = {
//     origin: 'https://davidrodriguezdev.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));

// // Define Routes
// app.use('/api/contacts/', require('./routes/api/contacts/'))

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, ()=> console.log(`server started on port${PORT}`));




// // // Add headers
// // app.use(function (req, res, next) {

// //     // Website you wish to allow to connect
// //     res.setHeader('Access-Control-Allow-Origin', 'https://davidrodriguezdev.com');

// //     // Request methods you wish to allow
// //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// //     // Request headers you wish to allow
// //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// //     // Set to true if you need the website to include cookies in the requests sent
// //     // to the API (e.g. in case you use sessions)
// //     res.setHeader('Access-Control-Allow-Credentials', true);

// //     // Pass to next layer of middleware
// //     next();
// // });

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/contacts/', (req, res) => {
  request(
    { url: 'https://myportfoliobackend2020.herokuapp.com' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));