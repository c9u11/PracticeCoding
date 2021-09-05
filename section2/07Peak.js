function Peak(input, el){
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

  // 알고리즘 공부 X
  gridArray.forEach((rowVal, rowIdx)=>{
    rowVal.forEach((colVal, colIdx)=>{
      var up = false;
      var down = false;
      var left = false;
      var right = false;
      if(rowIdx === 0 || colVal > gridArray[rowIdx-1][colIdx]){
        up = true;
      }
      if(rowIdx === gridArray.length-1 || colVal > gridArray[rowIdx+1][colIdx]){
        down = true;
      }
      if(colIdx === 0 || colVal > gridArray[rowIdx][colIdx-1]){
        left = true;
      }
      if(colIdx === rowVal.length-1 || colVal > gridArray[rowIdx][colIdx+1]){
        right = true;
      }
      if(up && down && left && right)
        output++;
    })
  })

  el.innerText = output;
}