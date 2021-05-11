const express = require('express');
const router = express.Router();

const items = require('../models/items');
const customers = require('../models/customers');
const orders = require('../models/orders');
const transactions = require('../models/transactions');
const tokens = require('../models/tokens')

// mudit20pathak@gmail.com
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

router.post('/udtavail', (req, res, next)=>{
	items.findOneAndUpdate(
		{ _id: req.body.id },
		{ $set: { available: req.body.avail } },
		function(err, qres){
			if (err)
				console.log(err);
			res.json({"res": "1"});
		}
	)
});

router.post('/updateitem', (req, res, next)=>{
	items.findOneAndUpdate(
		{ _id: req.body.id },
		{ $set: { description: req.body.description, unit_price: Number(req.body.unit_price) }},
		function(err, qres){
			if (err)
				console.log(err);
			res.json(qres);
		}
	)
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
		table_no: req.body.table_no,
		arrival_time: req.body.arrival_time,
		status: req.body.status,
		order_type: req.body.order_type,
		transaction_id: req.body.transaction_id
	});
	newcust.save(function(err, cust) {
		res.json(cust);
	});
});

router.get('/customer/:id', (req, res, next)=>{
	customers.findOne({ _id: req.params.id }, function(err, customers) {
		res.json(customers);
	});
});

router.get('/allorders', (req, res, next)=>{
	orders.find(function(err, orders) {
		res.json(orders);
	});
});

router.get('/orders', (req, res, next)=>{
	orders.find({ order_status: "active" }, function(err, orders) {
		res.json(orders);
	});
});

router.post('/order', (req, res, next)=>{
	let neworder = new orders({
		order_token: req.body.order_token,
		customer_id: req.body.customer_id,
		created_at: req.body.created_at,
		order_status: req.body.order_status,
		table_no: req.body.table_no,
		preptime: req.body.preptime,
		discount: req.body.discount,
		tax: req.body.tax,
		subtotal: req.body.subtotal,
		grandtotal: req.body.grandtotal,
		order_item: req.body.order_item,
		feedback: req.body.feedback,
		comment: req.body.comment
	});
	neworder.save(function(err, order) {
		if (err) 
			res.json(err);
		res.json(order);
	});
});

router.post('/reorder', (req, res, next)=>{
	orders.findOne({ order_token: req.body.order_token }, function(err, order) {
		req.body.order_item.forEach(o1 => {
			if (o1.status == "wait") { 
				order.order_item.push(o1);
			} if (o1.status == "cncl") {
				let fl=1;
				order.order_item.forEach(o2 => {
					if (o1.item_id == o2.item_id && o2.status != "cncl") { 
						o2.status = o1.status;
						fl=0; 
					} 
				});
				if (fl) 
					order.order_item.push(o1);
			}
		});
		orders.findOneAndUpdate(
			{ order_token: req.body.order_token }, 
			{ 	$set: { subtotal: req.body.subtotal,
						grandtotal: req.body.grandtotal,
				        order_item:  order.order_item } 
			},
			{ returnNewDocument : true },
			function(err, order) {
				if (err)
					res.json(err);
				res.json(order);
			}
		);
	});
});

router.post('/getorder/:token', (req, res, next)=>{
	orders.find({order_token: req.params.token}, function(err, orders) {
		res.json(orders);
	});
});

router.post('/updatestatusstaf', (req, res, next) => {
	var reqobj = req.body; 
	orders.findOne({ order_token: reqobj.tkn }, function(err, order) {
		// console.log("updatestatusstaf reqobj - ",reqobj);
		// console.log("findone order", order);
		var resobj = {};
		resobj["tkn"] = reqobj.tkn;
		resobj["subtotal"] = order.subtotal;
		resobj["grandtotal"] = order.grandtotal;
		resobj["status"] = order.order_status;
		resobj["feedback"] = order.feedback;
		resobj["itemarr"] = [];
		order.order_item.forEach(o1 => {
			reqobj.itemarr.forEach(o2 => {
				if (o1.item_id == o2.id && o1.status != "cncl") { 
					o1.status = o2.status;
					return;
				} 
			});
		});
		if (order.feedback != 0) {
			transactions.findOne(
				{ order_token: reqobj.tkn }, 
				{ payment_mode: 1 },
				function(err, trans){
					resobj["payment_mode"] = trans.payment_mode;
					orders.findOneAndUpdate(
						{ order_token : reqobj.tkn },
						{ $set: { order_item : order.order_item, preptime: reqobj.preptime } },
						{ returnNewDocument : true },
						function(err, neworder) {
							if (err)
								console.log(err);	
							neworder.order_item.forEach(o => {
								if (o.status == "wait" || o.status == "cncl") {
									resobj["itemarr"].push(o);
								}
							});
							res.json(resobj);		
							// console.log('neworder- ', neworder);
							// console.log('resobj-', resobj);	
						}
					);
				}
			);
		} else {
			orders.findOneAndUpdate(
				{ order_token : reqobj.tkn },
				{ $set: { order_item : order.order_item, preptime: reqobj.preptime } },
				{ returnNewDocument : true },
				function(err, neworder) {
					if (err)
						console.log(err);	
					neworder.order_item.forEach(o => {
						if (o.status == "wait" || o.status == "cncl") {
							resobj["itemarr"].push(o);
						}
					});
					res.json(resobj);		
					// console.log('neworder- ', neworder);
					// console.log('resobj-', resobj);	
				}
			);
		}
	});
});

router.post('/updatestatuscust', (req, res, next) => {	
	var reqobj = req.body; 
	// console.log("updatestatuscust reqobj - ",reqobj);
	orders.findOne({ order_token: reqobj.tkn }, function(err, order) {
		var resobj = {};
		resobj["tkn"] = reqobj.tkn;
		resobj["preptime"] = order.preptime;
		resobj["itemarr"] = [];
		order.order_item.forEach(o1 => {
			if (reqobj.itemarr.length > 0) {
				reqobj.itemarr.forEach(o2 => {
					if (o1.item_id == o2) { 
						o1.status = "cncl";
						return;
					} 
				});
			}
		});
		orders.findOneAndUpdate(
			{ order_token : reqobj.tkn },
			{ $set: { 	subtotal: Number(reqobj.subtotal),
			              	grandtotal: Number(reqobj.grandtotal), 
			              	order_item : order.order_item } },
			{ returnNewDocument : true },
			function(err, neworder) {
				if (err)
					console.log(err);
				neworder.order_item.forEach(o => {
					if (o.status != "cncl") 
						resobj["itemarr"].push(o);					
				});	
				// console.log('neworder- ', neworder);
				// console.log('updatestatuscust resobj-', resobj);
				res.json(resobj);			
			}
		);
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
		order_token: req.body.order_token,
		payment_mode: req.body.payment_mode,
		amount: Number(req.body.amount)
	});
	newtrans.save(function(err, trans) {
		customers.findOneAndUpdate(
			{ token: req.body.order_token },
			{ $set: { transaction_id: trans._id,
					  status: "inactive" } },
			function(err, qres) {
				if (err)
					res.json(err);
				res.json(trans);
			}
		);
	});
});

router.post('/transaction/:id', (req, res, next)=>{
	transactions.find({_id: req.params.id}, function(err, transactions) {
		res.json(transactions);
	});
});

router.post('/addfeedback', (req, res, next)=>{
	orders.findOneAndUpdate(
		{ order_token : req.body.order_token },
		{ $set: { feedback : Number(req.body.feedback),
				  comment: String(req.body.comment),
				  order_status: "inactive" } },
		{ returnNewDocument : true },
		function(err, order) {
			if (err)
				res.json(err);
			res.json(order);			
		}
	);
});

module.exports = router;