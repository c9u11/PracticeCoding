function MinimumOfThreeNumbers(input, el){
  var output = null;
  var inputArray = input.split(" ");
  
  // 숫자 검사
  inputArray.forEach(function(value){
    if(isNaN(value) || value*1 > 100){
      output = "Check Input";
      return
    }
  })
  // ErrorCheck
  if(output){
    el.innerText = output;
    return
  }

  inputArray.forEach(function(value){
    value = value*1;
    if(output==null) output = value;
    else {
      if(output>value) output = value;
    }
  })

  el.innerText = output
}