import Ember from 'ember';

export function unitColor(params/*, hash*/) {
  var style = ""
  for (var key in params[0]) {
    if(key === "label"){continue}
    if(typeof params[0][key] !== 'object'){
        style += key + ":" + params[0][key] + ";"
    }else{
      if(params[0][key][params[1][params[0][key]['key']]]){
        style += key + ":" + params[0][key][params[1][params[0][key]['key']]] + ";"
      }
    }
  }
  return Ember.String.htmlSafe(style)
}

export default Ember.Helper.helper(unitColor);
