function RemoveDuplicateChar(input, el){
  var output = "";


  if(typeof input !== "string") {
    el.innerText = "Check Input";
    return
  }

  for(i=0;i<input.length;i++){
    if(output.indexOf(input[i]) === -1)
      output += input[i];
  }

  el.innerText = output;
}