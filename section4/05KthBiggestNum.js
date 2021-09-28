function KthBiggestNum(input, el){
  var Kth = input.split("\n")[0].split(" ")[1]*1;
  var numArray = input.split("\n")[1].split(" ");
  var tempArray = [];
  for(var i=0;i<numArray.length;i++){
    for(var j=i+1;j<numArray.length;j++){
      for(var k=j+1;k<numArray.length;k++){
        var sum = numArray[i]*1 + numArray[j]*1 + numArray[k]*1;
        if(tempArray.indexOf(sum) === -1)
          tempArray.push(sum);
      }
    }
  }
  tempArray.sort(function(a, b)  {
    if(a > b) return -1;
    if(a === b) return 0;
    if(a < b) return 1;
  });
  
  el.innerText = tempArray[Kth-1];
}