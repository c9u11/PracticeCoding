function DistanceFromChar(input, el){
  var output = "";
  var charIndexArray = [];
  var string = input.split(" ")[0];
  var char = input.split(" ")[1];

  if(string === undefined || char === undefined){
    el.innerText = "Check Input";
    return
  }

  for(i=0;i<string.length;i++){
    if(string[i] === char)
    charIndexArray.push(i);
  }
  
  for(i=0;i<string.length;i++){
    var distance = string.length-1;
    charIndexArray.forEach(value=>{
      if(distance > Math.abs(value-i)){
        distance = Math.abs(value-i);
      }
    })
    output += distance + " ";
  }

  el.innerText = output;
}