function BiggerNumber(input, el){
  var output = "";
  var inputArray = input.split('\n');
  
  inputArray.forEach(value => {
    if(isNaN(value)){
      el.innerText = "Check Input";
      return
    }
  });
  var numList = inputArray[1].split(" ");
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