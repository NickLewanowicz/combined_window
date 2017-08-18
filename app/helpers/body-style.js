import Ember from 'ember';
//Body style:
// This helper will ingest a json object 
export function configStyle(params/*, hash*/) {
  var style = ""
  for (var key in params[0]) {
    style += key + ":" + params[0][key] + ";"
  }
  return Ember.String.htmlSafe(style)
}

export default Ember.Helper.helper(configStyle);
