import Ember from 'ember';

export function getProperty(params/*, hash*/) {
  // /debugger
  if(params.length === 2){
    return params[0][params[1]]
  }else if(params.length === 3){
    return params[0][params[1][[params[2]]]]
  }
  return null;
}

export default Ember.Helper.helper(getProperty);
