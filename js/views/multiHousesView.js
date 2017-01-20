var app = app || {};

app.MultiHousesView = Backbone.View.extend({
    render: function() {
        var self = this;
        this.model.each(function(house) {
            var houseView = new app.SingleHouseView({ model: house });
            self.$el.append(houseView.render().$el);
        });
    }
});