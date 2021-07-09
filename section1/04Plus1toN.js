function Plus1toN(input, el){
  var output = null;
  
  // 숫자 검사
  if(isNaN(input) || input*1 > 20){
    output = "Check Input";
    return
  }
  // ErrorCheck
  if(output){
    el.innerText = output;
    return
  }
  input *= 1;
  output = input * (input+1) / 2;

  el.innerText = output;
}