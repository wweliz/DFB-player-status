'use strict';

////// INJURED VIEW CONSTRUCTOR ///////////////////////////////////////////////
var InjuredView = Backbone.View.extend({
	className : 'injured-player',

	// you were tagering your container and not your template
	galleryTemplate: _.template($('.injured-player').text()),

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
		$('.injured-container').append(this.el);
		this.render();
	},


// you are calling this.render above but you have no "render" method
	render: function(){
		var renderedTemplate = this.galleryTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	deletePlayer: function(){
			this.model.destroy();
	}
});

///////////////////////////////////////////////////////////////////////////////
console.log('injured-view.js file loaded');