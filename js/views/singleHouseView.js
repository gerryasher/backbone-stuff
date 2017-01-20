var app = app || {};

app.SingleHouseView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-view-item skill',

    template: _.template($("#singleHouse").html()),
    render: function() {
        var houseTemplate = this.template(this.model.toJSON());
        this.$el.html(houseTemplate);
        return this;
    },
    
    events: {
        'click .skill': 'skillClick'
    },
    skillClick: function(event) {
        console.log('clicked: ', event);
    }
});
