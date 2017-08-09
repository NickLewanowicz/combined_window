import Ember from 'ember';

export function configStyle(params/*, hash*/) {
  var style = ""
  for (var key in params[0]) {
    style += key + ":" + params[0][key] + ";"
  }
  return Ember.String.htmlSafe(style)
}

export default Ember.Helper.helper(configStyle);
