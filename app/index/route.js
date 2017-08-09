import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
export const POLL_INTERVAL = 1000

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
    while (true) {
      yield timeout(POLL_INTERVAL);
      Ember.$.ajax(
      {
        type: "GET",
        url:"load",
        contentType: "application/json"
      })
    }
  }),
});
