function FindUpperCase(input, el){
  var output = 0;
  
  // 문자 검사
  if(typeof input !== "string"){
    el.innerText = "Check Input"
    return
  }
  
  for(let i=0;i<input.length;i++){
    if(input[i] === input[i].toUpperCase()){
      output++;
    }
  }
  
  el.innerText = output;
}