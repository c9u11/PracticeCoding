function SevenChildren(input, el){
  var output = null;
  var inputArray = input.split(" ");
  
  // 숫자 검사
  inputArray.forEach(function(value){
    if(isNaN(value)){
      output = "Check Input";
      return
    }
  })
  // ErrorCheck
  if(output){
    el.innerText = output;
    return
  }

  var sum = 0;
  inputArray.forEach((value)=>sum+=value*1)

  for(i=0;i<inputArray.length;i++){
    if(sum-100 <= inputArray[i]*1) continue;
    for (j=i+1;j<inputArray.length;j++){
      if(i==j) continue;
      if(sum-100 !== inputArray[i]*1 + inputArray[j]*1) continue;
      inputArray.splice(j,1);
      inputArray.splice(i,1);
      break;
    }
  }

  el.innerText = inputArray;
}