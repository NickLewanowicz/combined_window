import Ember from 'ember';
//Currently using positional params 
  //1. Object which your going to display
  //2. List of properties your going to display
  //3. Boolean flag. True: "Status: STATUS, Id: ID, Type: TYPE" 
  //                 False:"STATUS,ID,TYPE"  
export function customLabel(params/*, hash*/) {
  var label = ""
  if(params[1] === null){return params[1]["unitId"]}
  for (var i = 0; i < params[1].length; i++) {
    if(params[2]){
      label += params[1][i].replace(/([A-Z])/g, ' $1').capitalize() + ": "
    }
    if(!params[0][params[1][i]]){continue}
    if (params[1][i] === 'status' && !params[2]){
      label = label.slice(0, -1)
      label += "(" + params[0][params[1][i]] + ")  "
    }else{
      label += params[0][params[1][i]] + ", "
    }
  }
  return label.replace("cc,","P,")
              .replace("cl,","F,")
              .replace(",("," (")
              .slice(0, -2) 
}

export default Ember.Helper.helper(customLabel);
