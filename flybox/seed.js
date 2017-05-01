var db = require('./models');

db.Fly.remove({}, function(err, flies) {
	if (err) {
		console.log("Error: ", err);
	}
	console.log("removed all flies");
});

var flyPatterns = [
	{
		name: "Elk Hair Caddis",
		color: "tan",
		size: 18,
		species: "Caddis"
	},
	{
		name: "The Copper John",
		color: "red",
		size: 20,
		species: "Nymph"
	},
	{
		name: "Pheasant Tail",
		color: "brown",
		size: 18,
		species: "Mayfly"
	},
	{
		name: "Barr's Emerger",
		color: "yellow_brown",
		size: 20,
		species: "Mayfly"
	},
];

db.Fly.create(flyPatterns, function(err, flies) {
	if (err) {
		console.log("Error: ", err);
	} else {
		console.log("Created new flies ", flies);
		process.exit();
	}
});