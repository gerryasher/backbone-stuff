var app = app || {};

app.Router = Backbone.Router.extend({
    
    // 'route': 'method-to-call'
    // ----------------------------------- //
    routes: {
        '': 'home',
        'houses': 'houses',
        'yada': 'yada'
    },

    home: function() {
        $('#app').html('<h1>Home Page</h1>');
    },
    houses: function() {
        $('#app').html('<h2>House List</h2>');
        var housesView = new app.MultiHousesView({ el: "#app", model: houses });
        housesView.render();
    },
    yada: function() {
        $('#app').html('<h1>Yada Page</h1>');
    }

});
