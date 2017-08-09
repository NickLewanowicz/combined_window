import Ember from 'ember';

export function serviceType(params/*, hash*/) {
  if(params == 'cl'){
    return "F"
  }else if (params == 'cc') {
    return "P"
  }else {
    return 'Undefined'
  }
}

export default Ember.Helper.helper(serviceType);
