const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser"); /* To handle post parameters */
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.set("views", path.resolve(__dirname, "templates"));
var public = require('path').join(__dirname,'/public'); 
app.use(express.static(public)); 

const cache = {};
const PORT = 3000;

async function main() {
	try {
		await client.connect();
	} catch (e) {
		console.error(e);
	}
}

app.listen(PORT, () => {
    console.log(`Web server started and running at http://localhost:${PORT}`);
});

app.get('/home', (req, res) => {
    res.render('home');
    main();
});
