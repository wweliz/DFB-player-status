'use strict';

////// INJURED PLAYERS VIEW CONSTRUCTOR ///////////////////////////////////////
var InjuredView = Backbone.View.extend({
	className : 'injured-player',
	playerTemplate: _.template($('.injured-player').text()),

	initialize: function(){
		//this.listenTo(this.model, 'destroy', this.remove);
		//this.listenTo(this.model, 'change', this.render);
		$('.injured-container').append(this.el);
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
console.log('injured-view.js file loaded');