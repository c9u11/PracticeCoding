function RemoveDuplicateWord(input, el){
  var output = [];

  inputArray = input.split("\n");
  if(inputArray.length !== inputArray[0]*1 -1){
    el.innerText = "Check Input";
    return
  }
  for(i=0;i<inputArray.length;i++){
    if((i===0 && isNaN(inputArray[i])) || (i!==0 && typeof inputArray[i] !== "string")){
      el.innerText = "Check Input";
      return
    }
  }

  for(i=1;i<inputArray.length;i++){
    if(!output.includes(inputArray[i]))
      output.push(inputArray[i]);
  }
  el.innerText = output;
}