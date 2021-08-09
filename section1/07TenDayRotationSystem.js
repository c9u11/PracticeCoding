function TenDayRotationSystem(input, el){
  var output = null;
  var inputArray = input.split("\n");
  var day = inputArray[0];
  var carNumbersArray = inputArray[1].split(" ");

  // 숫자 검사
  if(isNaN(day)){
    output = "Check Input";
  }
  carNumbersArray.forEach(function(value){
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

  var cnt = 0;

  carNumbersArray.forEach(function(value){
    if(value[1] === day){
      cnt++;
    }
  })

  el.innerText = cnt;
}