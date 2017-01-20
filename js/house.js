
var houses = new app.Houses([
    new app.SingleHouse({ id: 101, bedrooms: 2, bathrooms: 1 }),
    new app.SingleHouse({ id: 102, bedrooms: 3, bathrooms: 3 }),
    new app.SingleHouse({ id: 103, bedrooms: 4, bathrooms: 2 }),
    new app.SingleHouse({ id: 104, bedrooms: 3, bathrooms: 1 }),
    new app.SingleHouse({ id: 105, bedrooms: 2, bathrooms: 2 }),
]);

var router = new app.Router();
Backbone.history.start({ pushState: true })

// Searching
// ================================================================ //
// var twoBeds = cars.where({ bedrooms: 2 });
// var myHouse = cars.findWhere({ id: 103 });


// UI - Render
// ================================================================ //
