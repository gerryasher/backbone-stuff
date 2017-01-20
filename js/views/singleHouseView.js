var app = app || {};

app.SingleHouseView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.model.get("id"));
        return this;
    }
});