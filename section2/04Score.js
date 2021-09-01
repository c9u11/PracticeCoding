function Score(input, el){
  var output = 0;
  var num = input.split("\n")[0];
  var history = input.split("\n")[1].split(" ");

  if (isNaN(num) || num !== history.length) {
    output = "Check Input";
  }
  history.forEach((value) => {
    output = output === "" ? output : isNaN(value) ? "Check Input" : "";
  });
  if (output !== "") {
    el.innerText = output;
    return;
  }

  var addedScore = 0;
  history.forEach((value) => {
    var value = value*1;
    if(value){
      addedScore++;
      output = output*1 + addedScore*1;
    }
    else {
      addedScore = 0;
    }
  })

  el.innerText = output;
}