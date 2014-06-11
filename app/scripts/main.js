'use strict';

////// INJURED PLAYERS VIEW INSTANCE //////////////////////

//creates a new collection instance
var injuredPlayers = new InjuredCollection();
//fetches the collection instance from the server
injuredPlayers.fetch().done(function(){
	//forEaches over the collection instance
	injuredPlayers.each(function(playerModel){
			//creates a new view using the player model
			new InjuredView({model: playerModel});
	});
});

////// CURRENTLY PLAYING VIEW INSTANCE ////////////////////

//creates a new collection instance
var activePlayers = new PlayingCollection();
//fetches the collection instance from the server
activePlayers.fetch().done(function(){
	//forEaches over the collection instance
	activePlayers.each(function(playerModel){
			//creates a new view using the player model
			new PlayingView({model: playerModel});
	});
});

////// BENCHED PLAYERS VIEW INSTANCE //////////////////////

//creates a new collection instance
var benchedPlayers = new BenchCollection();
//fetches the collection instance from the server
benchedPlayers.fetch().done(function(){
	//forEaches over the collection instance
	benchedPlayers.each(function(playerModel){
			//creates a new view using the player model
			new BenchedView({model: playerModel});
	});
});

///////////////////////////////////////////////////////////
console.log('main.js file loaded');