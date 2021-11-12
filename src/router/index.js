const express = require('express');
const items = require('./ItemsRouter');
const app = express()

app.use( items );

module.exports = app
