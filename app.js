var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var path = require("path");

var app = express();
const route = require('./routes/route');

const connectionString = "mongodb+srv://cluster0user:IAkVRCLNOox56IqV@cluster0.bifg1.mongodb.net/automaticomsdb?retryWrites=true&writeConcern=majority";
mongoose.connect(connectionString);
mongoose.connection.on('connected', ()=>{
	console.log('Connected to mongoDB.');
});
mongoose.connection.on('error', (err)=>{
	if (err) {
		console.log('Mongodb connection error: '+ err);
	}
});

app.use(cors());
app.use(express.json());

app.use('/api', route);

// app.use(express.static(__dirname+'/client/dist/client/'));

//Allow request from Angular
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //Request methods u wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //Request header you widht to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    //Pass to next Layer of middleware
    next();
    
})

// app.get('/', (req, res)=>{
// 	res.sendFile(__dirname+'/client/dist/client/index.html');
// });

app.listen(3000, ()=>{
	console.log("server started at port 3000!");
});

