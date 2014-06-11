'use strict';

//// BENCHED PLAYERS VIEW CONSTRUCTOR /////////////////////////////////////////
var BenchedView = Backbone.View.extend({
	className : 'benched-player',
	playerTemplate: _.template($('.benched-player').text()),

	initialize: function(){
		//this.listenTo(this.model, 'destroy', this.remove);
		//this.listenTo(this.model, 'change', this.render);
		$('.bench-container').append(this.el);
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
console.log('bench-view.js file loaded');