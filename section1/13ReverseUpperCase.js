function ReverseUpperCase (input, el) {
  var output = "";
  if(typeof input !== "string") {
    el.innerText = "Check Input";
    return
  }
  for (i=0;i<input.length;i++){
    output += (input[i].toUpperCase() === input[i]) ? input[i].toLowerCase() : input[i].toUpperCase();
  }
  el.innerText = output;
}