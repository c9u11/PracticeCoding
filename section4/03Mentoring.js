function Mentoring(input, el){
  var output = 0;
  var studentNum = input.split("\n")[0].split(" ")[0];
  var testNum = input.split("\n")[0].split(" ")[1];
  var testResultMap = [];
  input.split("\n").forEach((value, idx) => {
    if(idx===0) return
    testResultMap.push(value.split(" "));
  });

  // input check 생략


  testResultMap[0].forEach((value,idx)=>{
    for(var i=idx+1; i<studentNum;i++){
      var isBetter = true;
      for(var j=1;j<testNum;j++){
        if(testResultMap[j].indexOf(value)<testResultMap[j].indexOf(testResultMap[0][i]))
          isBetter = (isBetter) ? true : false;
        else
          isBetter = false;
      }
      if(isBetter) output++;
    }
  })

  el.innerText = output;
}