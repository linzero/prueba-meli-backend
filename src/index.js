const express = require('express');
require('./config/config');

const routes = require('./router/index');

const app = express()

// Allow cors
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    next();
});


// Use the routes
app.use('/api',routes);

// Start App in Port {Default 3001} 
app.listen(process.env.PORT, () => {
    console.log("Application initialized on port " + process.env.PORT);
})
