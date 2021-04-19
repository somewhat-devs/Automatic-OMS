const express = require('express');
const router = express.Router();

const items = require('../models/items');
const customers = require('../models/customers');
const orders = require('../models/orders');
const transactions = require('../models/transactions');
const tokens = require('../models/tokens')

// url = localhost:3000/api/items
router.get('/items', (req, res, next)=>{
	items.find(function(err, items) {
		res.json(items);
	});
});

router.post('/item', (req, res, next)=>{
	let newitem = new items({
		title: req.body.title,
		description: req.body.description,
		unit_price: req.body.unit_price,
		category: req.body.category,
		available: req.body.available
	});
	newitem.save(function(err, item) {
		res.json(item);
	});
});

router.delete('/item/:id', (req, res, next)=>{
	items.remove({_id: req.params.id}, function(err) {
		if (err){
			res.json(err);
		}
	});
});

router.get('/customers', (req, res, next)=>{
	customers.find(function(err, customers) {
		res.json(customers);
	});
});

router.post('/customer', (req, res, next)=>{
	let newcust = new customers({
		name: req.body.name,
		mobileno: req.body.mobileno,
		token: req.body.token,
		arrival_time: req.body.arrival_time,
		status: req.body.status,
		order_type: req.body.order_type,
		order_id: req.body.order_id,
		transaction_id: req.body.transaction_id
	});
	newcust.save(function(err, cust) {
		res.json(cust);
	});
});

router.get('/customer/:id', (req, res, next)=>{
	customers.findOne({_id: req.params.id}, function(err, customers) {
		res.json(customers);
	});
});

router.get('/orders', (req, res, next)=>{
	orders.find(function(err, orders) {
		res.json(orders);
	});
});

router.post('/order', (req, res, next)=>{
	let neworder = new orders({
		order_token: req.body.order_token,
		customer_id: req.body.customer_id,
		created_at: req.body.created_at,
		order_status: req.body.order_status,
		discount: req.body.discount,
		tax: req.body.tax,
		subtotal: req.body.subtotal,
		grandtotal: req.body.grandtotal,
		order_item: req.body.order_item,
		feedback: req.body.feedback
	});
	neworder.save(function(err, order) {
		if (err) 
			res.json(err);
		res.json(order);
	});
});

router.post('/reorder', (req, res, next)=>{
	orders.updateOne(
		{ order_token: req.body.order_token }, 
		{ 	$set: { subtotal: req.body.subtotal,
			  		grandtotal: req.body.grandtotal } ,
		  	$push: { order_item: { $each: req.body.order_item } } 
		},
		function(err, order) {
			if (err)
				res.json(err);
			res.json(order);
		}
	)
});

router.post('/getorder/:token', (req, res, next)=>{
	orders.find({order_token: req.params.token}, function(err, orders) {
		res.json(orders);
	});
});

router.get('/token/:token', (req, res, next)=>{
	tokens.findOne({token_date: req.params.token}, function(err, token) {
		if (token == null) {
			let newtoken = new tokens({
				token_date: req.params.token,
				count: 1
			});
			newtoken.save(function(err, token) {
				res.json(token);
			});
		} else {
			tokens.findOneAndUpdate(
				{ token_date: req.params.token }, 
				{ $inc: { count: 1 } },
				function(err, token) {
					res.json(token);
				}
			);
		}
	});
});

router.get('/tokens', (req, res, next)=>{
	tokens.find(function(err, tokens) {
		res.json(tokens);
	});
});

router.get('/transactions', (req, res, next)=>{
	transactions.find(function(err, transactions) {
		res.json(transactions);
	});
});

router.post('/transaction', (req, res, next)=>{
	let newtrans = new transactions({
		customer_id: req.body.customer_id,
		order_id: req.body.order_id,
		payment_mode: req.body.payment_mode,
		payment_status: req.body.payment_status
	});
	newtrans.save(function(err, trans) {
		res.json(trans);
	});
});

router.post('/transaction/:id', (req, res, next)=>{
	transactions.find({_id: req.params.id}, function(err, transactions) {
		res.json(transactions);
	});
});

module.exports = router;