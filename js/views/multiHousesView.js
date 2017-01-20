var app = app || {};

app.MultiHousesView = Backbone.View.extend({
    
    tagName: 'ul',
    className: 'list-view',

    template: _.template($("#multiHouses").html()),
    render: function() {
        //var self = this;
        this.collection.each(this.addHouse, this);
        return this;
    },
    addHouse: function(house){
        var houseView = new app.SingleHouseView({ model: house });
        this.$el.append(houseView.render().el);
    }

});
