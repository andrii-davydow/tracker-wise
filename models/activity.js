const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const activityShema = new Shema(
	{
		startTime: {
			type: Number,
			required: true,
		},
		endTime: {
			type: Number,
			required: true,
		},
		distance: {
			type: Number,
			required: true,
		},
		activity: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Activity = mongoose.model('Activity', activityShema);

module.exports = Activity;
