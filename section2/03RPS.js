function RPS(input, el) {
  var output = "";
  var num = input.split("\n")[0];
  var historyA = input.split("\n")[1].split(" ");
  var historyB = input.split("\n")[2].split(" ");

  if (isNaN(num) || num !== historyA.length || num !== historyB.length) {
    output = "Check Input";
  }
  historyA.forEach((value) => {
    output = output === "" ? output : isNaN(value) ? "Check Input" : "";
  });
  historyB.forEach((value) => {
    output = output === "" ? output : isNaN(value) ? "Check Input" : "";
  });
  if (output !== "") {
    el.innerText = output;
    return;
  }

  historyA.forEach((value,i) => {
    var a = value*1;
    var b = historyB[i]*1;
    if(a+1 === b || a-2 === b) output += "B";
    else if(a-1 === b || a+2 === b) output += "A";
    else output += "D";
  })

  el.innerText = output;
}
