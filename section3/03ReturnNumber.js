function ReturnNumber(input, el){
  var output = "";

  outputArray = input.match(/[0-9]/g);

  outputArray.forEach(s => {
    output += s;
  });

  el.innerText = output*1;
}