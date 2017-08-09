import Ember from 'ember';

export function priorityColor(params/*, hash*/) {
  var style = ""
  for (var key in params[0]) {
    if(typeof params[0][key] === 'object'){
      style += key + ":" + params[0][key][params[1]] + ";"
    }else{
      style += key + ":" + params[0][key] + ";"
    }
  }
  return Ember.String.htmlSafe(style)
}

export default Ember.Helper.helper(priorityColor);
