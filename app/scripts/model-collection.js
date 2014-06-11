'use strict';

// PLAYER MODEL ///////////////////////////////////////////////////////////////
var playerModel = Backbone.Model.extend({
	idAttribute: '_id',

	defaults: {
		pName		: 'Player Name',
    imgURL	: 'http://www.clker.com/cliparts/5/9/4/c/12198090531909861341man%20silhouette.svg.med.png'
  }
});

// INJURED COLLECTION /////////////////////////////////////////////////////////
var InjuredCollection = Backbone.Collection.extend({
	model: playerModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/DFB-player-status',
});

// CURRENTLY PLAYING COLLECTION ///////////////////////////////////////////////
var PlayingCollection = Backbone.Collection.extend({
	model: playerModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/DFB-player-status',
});

// BENCH COLLECTION ///////////////////////////////////////////////////////////
var BenchCollection = Backbone.Collection.extend({
	model: playerModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/DFB-player-status',
});

///////////////////////////////////////////////////////////////////////////////
console.log('model-collection.js file loaded');