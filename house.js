// Model
// ================================================================ //
var House = Backbone.Model.extend({
    idAttribute: "id",
    badrooms: 3,
    sf: 2000
});

// Collection - Database 
// ================================================================ //
var Houses = Backbone.Collection.extend({
    model: House
});

var houses = new Houses([
    new House({ id: 101, bedrooms: 2, bathrooms: 1 }),
    new House({ id: 102, bedrooms: 3, bathrooms: 3 }),
    new House({ id: 103, bedrooms: 4, bathrooms: 2 }),
    new House({ id: 104, bedrooms: 3, bathrooms: 1 }),
    new House({ id: 105, bedrooms: 2, bathrooms: 2 }),
]);

// Views
// ================================================================ //
var HouseView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.model.get("id"));
        return this;
    }
});
var HousesView = Backbone.View.extend({
    render: function() {
        var self = this;
        this.model.each(function(house) {
            var houseView = new HouseView({ model: house });
            self.$el.append(houseView.render().$el);
        });
    }
});


// UI - Render
// ================================================================ //
$('#app').html('<h2>House List</h2>');
var housesView = new HousesView({ el: "#app", model: houses });
housesView.render();
