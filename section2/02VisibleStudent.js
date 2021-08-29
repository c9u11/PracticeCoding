function VisibleStudent(input, el){
  var output = 0;
  var temp = "";
  var inputArray = input.split('\n');
  var numList = inputArray[1].split(" ");
  if(isNaN(inputArray[0])){
    el.innerText = "Check Input";
    return
  }
  numList.forEach(value => {
    if(isNaN(value)){
      el.innerText = "Check Input";
      return
    }
  });
  numList.forEach((value,idx)=>{
    if(idx === 0){
      output++;
      temp = value;
    }
    else if(value*1 > temp*1) {
      temp = value;
      output++;
    }
  })
  el.innerText = output;
}