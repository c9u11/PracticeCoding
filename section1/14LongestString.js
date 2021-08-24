function LongestString(input, el){
  var output = "";
  var inputArray = input.split('\n');

  // 숫자 검사
  if(isNaN(inputArray[0])){
    output = "Check Input";
  }
  inputArray.forEach(function(value){
    if(typeof value !== "string"){
      output = "Check Input";
    }
  })
  // ErrorCheck
  if(output){ 
    el.innerText = output;
    return
  }

  for(i=1;i<inputArray.length;i++){
    if(output.length < inputArray[i].length){
      output = inputArray[i];
    }
  }

  el.innerText = output;
}