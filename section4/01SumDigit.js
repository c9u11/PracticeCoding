function SumDigit(input, el){
  var num = input.split("\n")[0];
  var inputArray = input.split("\n")[1].split(" ");

  if(isNaN(num)){
    el.innerText = "Check Input";
    return
  }
  inputArray.forEach(value => {
    if(isNaN(value)){
      el.innerText = "Check Input";
      return
    }
  });

  var max = 0;
  var maxSum = 0;

  inputArray.forEach(value => {
    var sum = 0;
    var string = value+"";
    for(var i=0;i<string.length;i++){
      sum += string[i]*1;
    }
    if(maxSum<=sum){
      maxSum = sum;
      max = (max>value) ? max : value;
    }
  })

  el.innerText = max;  
}