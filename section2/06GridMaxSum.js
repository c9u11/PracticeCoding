function GridMaxSum(input, el){
  var output = 0;
  var length = 0;
  var gridArray = [];

  input.split("\n").forEach((value,i) => {
    if(i===0){
      length = value*1;
      if(isNaN(length) || length !== input.split("\n").length-1){
        output = "Check Input";
      }
    } else {
      gridArray.push(value.split(" "));
      gridArray[i-1].forEach((value)=>{
        if(isNaN(value)){
          output = "Check Input";
        }
      })
    }
  });

  if(output) {
    el.innerText = output;
    return
  }
  var rowMax = 0;
  var rightUpSum = 0;
  var rightDownSum = 0;
  gridArray.forEach((rowVal,rowIdx)=>{
    var rowSum = 0;
    rowVal.forEach((colVal,colIdx)=>{
      rowSum = rowSum + colVal*1;
      if(rowIdx === colIdx){
        rightDownSum = rightDownSum + colVal*1;
      } else if (rowIdx + colIdx === length*1-1){
        rightUpSum = rightUpSum + colVal*1;
      }
    })
    rowMax = Math.max(rowMax, rowSum);
  })
  

  output = Math.max(rowMax, rightUpSum, rightDownSum);

  el.innerText = output;
}