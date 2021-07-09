function OddNumber(input, el){
  var output = null;
  var minimum = null;
  var sum = null;
  var inputArray = input.split(" ");
  
  // 숫자 검사
  inputArray.forEach(function(value){
    if(isNaN(value)){
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
    value *= 1;
    if(value%2 === 1){
      if(minimum==null) minimum = value;
      else {
        if(minimum>value) minimum = value;
      }
      sum += minimum;
    }
  })

  output = `${sum}\n${minimum}`;
  el.innerText = output;
}