function IsCanMakeTriangle(input, el){
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

  var total=null, max=null;
  inputArray.forEach(function(value){
    value = value*1;
    total += value;
    if(max==null) max = value;
    else {
      if(max<value) max = value;
    }
  })

  output = (max < total-max);

  el.innerText = output;
}