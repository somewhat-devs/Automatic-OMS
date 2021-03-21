const express = require('express');
const router = express.Router();

const items = require('../models/items');
const customers = requre('../models/customers');

router.get('/items', (req, res, next)=>{
	items.find(function(err, items) {
		res.json(items);
	});
});

router.post('/item', (req, res, next)=>{
	let newitem = new items({
		title: req.body.title,
		description: req.body.desc,
		unit_price: req.body.unit_prc,
		category: req.body.cate,
		available: req.body.avail
	});
	newitem.save();
});

router.delete('/item/:id', (req, res, next)=>{
	items.remove({_id: req.params.id}, function(err, items) {
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

router.post('/customers', (req, res, next)=>{
	let newcust = new customers({
		name: req.body.name,
		mobileno: req.body.mobileno,
		table_no: req.body.table_no,
		arrival_time: req.body.arrival_time,
		status: req.body.status,
		order_type: req.body.order_type,
		order_id: req.body.order_id,
		transaction_id: req.body.transaction_id
	});
	newcust.save();
});

module.exports = router;