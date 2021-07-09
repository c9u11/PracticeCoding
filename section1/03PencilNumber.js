function PencilNumber(input, el){
  var output = null;
  
  // 숫자 검사
  if(isNaN(input) || input*1 > 1000){
    output = "Check Input";
    return
  }
  // ErrorCheck
  if(output){
    el.innerText = output;
    return
  }

  output = Math.ceil(input/12);

  el.innerText = output;
}