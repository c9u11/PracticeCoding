function CenterString(input, el){
  var output = "";

  // 문자열 검사
  if(typeof input !== "string"){
    output = "Check Input";
  }
  // ErrorCheck
  if(output){ 
    el.innerText = output;
    return
  }

  var halfLength = input.length/2;
  var floorHalfLength = Math.floor(halfLength);
  output = input[floorHalfLength];
  if(floorHalfLength === halfLength){
    output += input[floorHalfLength-1];
  }

  el.innerText = output;
}