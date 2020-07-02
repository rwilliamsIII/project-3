require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('./models');
const app = express();
var session = require('express-session');
var passport = require('passport');
const { Passport } = require('passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('public'));
}
app.use(
	session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/public/index.html'));
});

require('./routes/html_routes')(app);
require('./routes/trollo_routes')(app, passport);
require('./config/passport.js')(passport, db.user);

db.sequelize.sync().then(function () {
	app.listen(PORT, () => {
		console.log(`🌎 ==> API server now on port ${PORT}!`);
	});
});
