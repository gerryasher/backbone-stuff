var app = app || {};

// Collection - Database 
// ================================================================ //
app.Houses = Backbone.Collection.extend({
    model: app.SingleHouse
});