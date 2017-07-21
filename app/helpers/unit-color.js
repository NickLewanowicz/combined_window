import Ember from 'ember';

export function unitColor(params/*, hash*/) {
  
  if(params[0] === "AV"){
    return "red"
  }else if (params[0] === "ER") {
    return "blue"
  }else if (params[0] === "OS"){
    return 'green'
  }else{
    return 'grey'
  }
}

export default Ember.Helper.helper(unitColor);
