import Ember from 'ember';

export function getProperty(params/*, hash*/) {
  //3 Postitional Params
  //  User provides the property you want to config on it will check the value of that data 
  //  property and pick the config option for that property property and value.
  // Ex. You want to render different unit icons based off the unit status. 
  //     param 0 is the config object with key val pairs defining for FOO data value you display BAR icon 
  //     param 1 is the data object 
  //     IMPORTANT: param 0 must have a property with key 'key' and string value that is a property of param1   
  return params[0][params[1][params[0].key]]
}

export default Ember.Helper.helper(getProperty);
