import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    Ember.$.ajax(
    {
      type: "GET",
      url:"test",
      contentType: "application/json"
    })
    return []
  }
});
