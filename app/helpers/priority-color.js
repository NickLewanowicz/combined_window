import Ember from 'ember';

export function priorityColor(params/*, hash*/) {
  if(params > 6){
    return "green"
  }else if (params > 3) {
    return "blue"
  }else {
    return 'red'
  }
}

export default Ember.Helper.helper(priorityColor);
