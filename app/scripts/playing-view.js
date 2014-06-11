'use strict';

///// CURRENTLY PLAYING VIEW CONSTRUCTOR //////////////////////////////////////
var PlayingView = Backbone.View.extend({
	className : 'active-player',
	playerTemplate: _.template($('.active-player').text()),

	initialize: function(){
		//this.listenTo(this.model, 'destroy', this.remove);
		//this.listenTo(this.model, 'change', this.render);
		$('.playing-container').append(this.el);
		this.renderPlayer();
	},

	renderPlayer: function(){
		var renderedTemplate = this.playerTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	deletePlayer: function(){
			this.model.destroy();
	}
});

///////////////////////////////////////////////////////////////////////////////
console.log('playing-view.js file loaded');