import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        pillClick(type, data) {
          Ember.$.ajax(
          {
            "type": "GET",
            "url": type + "/" + ((type === "unit") ? data.unitId : data.id) + "/" + JSON.stringify(data),
            "contentType": "text/html"
          })
        }
    }
});
