'use strict';

////// INJURED VIEW CONSTRUCTOR ///////////////////////////////////////////////
var InjuredView = Backbone.View.extend({
	className : 'injured-player',
	galleryTemplate: _.template($('.injured-container').text()),

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
		$('.injured-container').append(this.el);
		this.render();
	},

	renderPlayer: function(){
		var renderedTemplate = this.galleryTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	deletePlayer: function(){
			this.model.destroy();
	}
});

///////////////////////////////////////////////////////////////////////////////
console.log('injured-view.js file loaded');