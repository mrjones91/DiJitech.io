'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		//required: 'Please fill Customer name',
		trim: true
	},
	lastName: {
		type: String,
		default: '',
		//required: 'Please fill Customer Name',
		trim: true
	},
	city: {
		type: String,
		default: '',
		//required: 'Please fill Customer City',
		trim: true
	},
	country: {
		type: String,
		default: '',
		//required: 'Please fill Customer Country',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		//required: 'Please fill Customer Industry',
		trim: true
	},
	email: {
		type: String,
		default: '',
		//required: 'Please fill Customer Email',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		//required: 'Please fill Customer Phone Number',
		trim: true
	},
	referred: {
		type: Boolean,
		default: false
	},
	channel: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
	/*
	firstname
	lastName
	city
	country
	industry
	email
	phone
	customer referred indicator
	channel
	*/
});

mongoose.model('Customer', CustomerSchema);