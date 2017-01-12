		
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",
    colour: "",
	urlRoot: "/api/vehicles",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});

var Cars = Backbone.Collection.extend({
    model: Vehicle
});

var CarView = Backbone.View.extend({  
    render: function() {
        this.$el.html(this.model.get("registrationNumber"));
        return this;
    }
});

//var blueCars = cars.where({ colour: "Blue" });
//var myCar = cars.findWhere({ registrationNumber: "XLI887" });

var CarsView = Backbone.View.extend({
    render: function(){
        var self = this;
        this.model.each(function(car) {
            var carView = new CarView({ model: car });
            self.$el.append(carView.render().$el);
        });
    }
});

var cars = new Cars([
    new Car({ registrationNumber: "XLI887", colour: "Blue" }),
    new Car({ registrationNumber: "ZNP123", colour: "Blue" }),
    new Car({ registrationNumber: "XUV456", colour: "Gray" })
]);

$('#app').text('');
var carsView = new CarsView({ el: "#app", model: cars });
carsView.render();




