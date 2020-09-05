const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// Database handler
const adapter = new FileSync("./db/database.json");
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({
	geke: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	},
	luuk: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	},
	pieter: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	},
	amber: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	},
	daira: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	},
	dennis: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	},
	patrick: {
		dishwasherScore: 0,
		garbageScore: 0,
		glassScore: 0,
		paperScore: 0,
		plasticScore: 0
	}
}).write();

// Create express instance
const app = express();

// Require API routes
const users = require("./routes/users");
const test = require("./routes/test");

// Import API Routes
app.use(users);
app.use(test);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
	const port = process.env.PORT || 3001;
	app.listen(port, () => {
		console.log(`API server listening on port ${port}`);
	});
}
