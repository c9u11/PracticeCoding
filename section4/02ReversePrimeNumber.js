function ReversePrimeNumber(input, el){
  var output = "";
  var num = input.split("\n")[0];
  var inputArray = input.split("\n")[1].split(" ");
  
  if(isNaN(num)){
    el.innerText = "Check Input";
    return
  }
  inputArray.forEach(val => {
    if(isNaN(val)){
      el.innerText = "Check Input";
      return
    }
  });

  inputArray.forEach(num =>{
    var reverseNum = (num+"").split("").reverse().join("");
    if(isPrimeNumber(reverseNum*1)){
      output += reverseNum*1 + " ";
    }
  })
  
  el.innerText = output;
}


function isPrimeNumber(num){
  if(num === 1) return false
  if(num === 2) return true
  if(num%2===0) return false
  for(var i=2;i<num;i++){
    if(num%i === 0) return false
  }
  return true
}