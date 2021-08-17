function FindChar(input, el){
  var output = null;
  var inputArray = input.split("\n");
  var string = inputArray[0];
  var char = inputArray[1];
  
  // 문자 검사
  if(typeof string !== "string" || typeof char !== "string"){
    el.innerText = "Check Input"
    return
  }
  
  output = string.split(char).length -1;

  el.innerText = output;
}