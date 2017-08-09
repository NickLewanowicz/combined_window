import Ember from 'ember';

export function customLabel(params/*, hash*/) {
  var label = ""
  if(params[1] === null){return params[1]["unitId"]}
  for (var i = 0; i < params[1].length; i++) {
    if (params[1][i] === 'status'){
      label = label.slice(0, -1)
      label += "(" + params[0][params[1][i]] + ") "
    }else{
      label += params[0][params[1][i]] + ","
    }
  }
  return label.replace("cc,","P,").replace("cl,","F,").slice(0, -1)
}

export default Ember.Helper.helper(customLabel);
