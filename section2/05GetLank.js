function GetLank(input, el){
  var output = "";

  var length = input.split("\n")[0];
  var inputArray = input.split("\n")[1].split(" ");

  if (isNaN(length) || inputArray.length !== length*1){
    el.innerText = "Check Input"
    return
  } else {
    inputArray.forEach(value => {
      if(isNaN(value)){
        el.innerText = "Check Input";
        return
      }
    });
  }

  var tempArray = [];
  for(var i=0;i<inputArray.length;i++){
    tempArray[i] = 1;
    for(var j=0;j<i;j++){
      if(inputArray[i]*1 < inputArray[j]*1)
        tempArray[i]++;
      else if(inputArray[i]*1>inputArray[j]*1)
        tempArray[j]++;
    }
  }

  tempArray.forEach(value=>{
    output += value + " ";
  })
  el.innerText = output;
}