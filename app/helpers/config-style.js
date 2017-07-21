import Ember from 'ember';

export function configStyle(params/*, hash*/) {
  console.log(params)
  var style = ""
  for (var key in params[0]) {
    console.log(key, params[0][key]);
    style += key + ":" + params[0][key] + ";"
  }
  return style;
}

export default Ember.Helper.helper(configStyle);
