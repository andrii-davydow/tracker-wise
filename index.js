const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
const Activity = require('./models/activity');

var allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};
const app = express();
app.use(allowCrossDomain);
app.use(express.static('public'));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const DB = process.env.MONGO_URL;

mongoose
	.connect(DB)
	.then((res) => console.log('connect DB'))
	.catch((err) => console.log(err));

app.get('/api', (req, res) => {
	Activity.find()
		.sort({ createdAt: 'desc' })
		.then((result) => res.json(result))
		.catch((err) => console.log(err));
});
app.get('/api-run-max', (req, res) => {
	Activity.find({ activity: 'Run' })
		.sort({ distance: -1 })
		.limit(1)
		.then((result) => res.json(result))
		.catch((err) => console.log(err));
});

app.get('/api-ride-max', (req, res) => {
	Activity.find({ activity: 'Ride' })
		.sort({ distance: -1 })
		.limit(1)
		.then((result) => res.json(result))
		.catch((err) => console.log(err));
});
app.get('/api-run', (req, res) => {
	Activity.aggregate([
		{
			$match: {
				activity: 'Run',
			},
		},
		{
			$group: {
				_id: '$activity',
				total: {
					$sum: '$distance',
				},
			},
		},
	])
		.then((result) => res.json(result))
		.catch((err) => console.log(err));
});

app.get('/api-ride', (req, res) => {
	Activity.aggregate([
		{
			$match: {
				activity: 'Ride',
			},
		},
		{
			$group: {
				_id: '$activity',
				total: {
					$sum: '$distance',
				},
			},
		},
	])
		.then((result) => res.json(result))
		.catch((err) => console.log(err));
});

app.post('/api', (req, res) => {
	const { startTime, endTime, distance, activity } = req.body;
	const activityData = new Activity({ startTime, endTime, distance, activity });
	activityData
		.save()
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log('server start');
});
