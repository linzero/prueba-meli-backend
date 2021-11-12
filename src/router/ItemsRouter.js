const Router = require('express').Router;
const Controller = require('../controllers/ItemsController');

const items = Router();

items.get('/items', Controller.searchItems);
items.get('/items/:id', Controller.itemDetail);

module.exports = items
