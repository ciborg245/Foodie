const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

	name: String,
	username: {
		type: String,
		trim: true,
		unique: true,
		require: 'Username is required'
	},
	password: {
		type: String,
		validate: [(password) => {
			return password.length > 6;
			},
			"Password should be longer."
		]
	},
	email: String,

});

mongoose.model('User', UserSchema);

