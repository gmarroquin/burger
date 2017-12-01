//require express
var express = require ("express"); 

//require handle-bars
var expressHandlebars = require ("express-handlebars"); 

//require body-parser
var bodyParser = require ("body-parser"); 

//require method-override
var methodOverride = require ("method-override"); 

var app = express();

var PORT = process.env.PORT || 8800; 

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//override the method middleware
app.use(methodOverride("_method"));

//require handlebars
app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//Listening on port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});