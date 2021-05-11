var express = require("./node_modules/express");
var mongoose = require("mongoose");
var cors = require("./node_modules/cors");
var path = require("path");

var app = express();
const route = require('./routes/route');

try {
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
} catch (e) {
    console.log(e);
}

app.use(cors());
app.use(express.json());

app.use('/api', route);

app.use(express.static(__dirname+'/client/'));

app.get('/*', (req, res)=>{
	res.sendFile(__dirname+'/client/');
});

app.listen(process.env.PORT || 3000, ()=>{
	console.log("server started at port 3000!");
});

