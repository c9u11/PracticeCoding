function CombiningTwoArray(input, el){
  var output = [];
  var firstArray = input.split("\n")[1].split(" ");
  var secondArray = input.split("\n")[3].split(" ");

  if(firstArray[firstArray.length-1]<secondArray[secondArray.length-1]){
    var temp = firstArray;
    firstArray = secondArray;
    secondArray = temp;
  }

  firstArray.forEach((firstValue)=>{
    var removedIndex = [];
    for(var index=0;index<secondArray.length;index++){
      var secondValue = secondArray[index];
      console.log(firstValue, secondValue);
      if(firstValue > secondValue){
        output.push(secondValue);
        removedIndex.push(index);
      }
      else {
        output.push(firstValue);
        break;
      }
    }
    if(removedIndex.length != 0){
      for(var i=0;i<removedIndex.length;i++){
        secondArray.splice(0,1);
      }
    }
    if(secondArray.length === 0){
      output.push(firstValue);
    }
  })

  el.innerText = output;
}