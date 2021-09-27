function GraduationPresent(input, el){
  var output = 0;

  var inputArray = input.split("\n");
  var UpperLimit = inputArray[0].split(" ")[1];
  var priceArray = [];
  inputArray.forEach((val,idx) => {
    if(idx === 0) return
    priceArray.push(toNumArray(val));
  });

  for(var i=0;i<priceArray.length;i++){
    var tempArray = []
    priceArray.forEach((val,idx)=>{
      var tempValue = 0;
      if(idx === i) tempValue = val[0]/2+val[1];
      else tempValue = val[0]+val[1];
      tempArray.push(tempValue);
    })
    tempArray.sort(function(a, b)  {
      if(a > b) return 1;
      if(a === b) return 0;
      if(a < b) return -1;
    });

    var tempSum = 0;
    var tempCnt = 0;
    tempArray.forEach((price,idx)=>{
      if(tempSum+price > UpperLimit*1){
        tempCnt = (tempCnt)?tempCnt:idx;
        return
      }
      else tempSum+=price;
    })
    console.log(i, tempCnt)
    if(output<tempCnt) output = tempCnt;
  }

  el.innerText = output;

  // function
  function toNumArray(string){
    var returnArray = []
    string.split(" ").forEach(val=>{
      returnArray.push(val*1);
    })
    return returnArray;
  }
}