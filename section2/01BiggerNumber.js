function BiggerNumber(input, el){
  var output = "";
  var inputArray = input.split('\n');
  var numList = inputArray[1].split(" ");
  if(isNaN(inputArray[0])){
    el.innerText = "Check Input";
    return
  }
  numList.forEach(value => {
    if(isNaN(value)){
      el.innerText = "Check Input";
      return
    }
  });
  numList.forEach((value,idx)=>{
    if(idx === 0){
      output += value + " ";
    }
    else if(value*1 > numList[idx-1]*1) {
      output += value + " ";
    }
  })
  el.innerText = output;
}