function CompressString(input, el){
  var output = "";
  var preChar = "";
  var charNum = 1;

  for(i=0;i<input.length;i++){
    if(input[i] !== preChar){
      output += (charNum !== 1) ? charNum : "";
      output += input[i];
      charNum = 1;
    } else {
      charNum++;
    }

    preChar = input[i];
  }

  el.innerText = output;
}