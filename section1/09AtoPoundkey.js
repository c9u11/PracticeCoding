function AtoPoundkey(input, el){
  var output = null;
  
  // 문자 검사
  if(typeof input !== "string"){
    el.innerText = "Check Input"
    return
  }
  
  output = input.replaceAll("A","#");

  el.innerText = output;
}