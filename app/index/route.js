import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
export const POLL_INTERVAL = 5000
export const POLLING = true

export default Ember.Route.extend({
  model: function() {
    this.get('loadCalls').perform()
    Ember.$.ajax(
    {
      type: "GET",
      url:"load",
      contentType: "application/json"
    })
    return []
  },
  loadCalls: task(function * () {
    while (POLLING) {
      yield timeout(POLL_INTERVAL);
      Ember.$.ajax(
      {
        type: "GET",
        url:"load",
        contentType: "application/json"
      })
    }
  }),
  pillClick(type, data) {
    Ember.$.ajax(
    {
      "type": "GET",
      "url": type + "/" + ((type === "unit") ? data.unitId : data.id) + "/" + JSON.stringify(data),
      "contentType": "text/html"
    })
  }
});
