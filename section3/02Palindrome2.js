function Palindrome2(input, el){
  var output = "";


  if(input.length%2 === 0){
    var temp = false;
    for(i=0;i<input.length/2;i++){
      if(!(/[a-zA-Z0-9]/).test(input[i]) || !(/[a-zA-Z0-9]/).test(input[input.length-1-i])){
        temp = true;
        continue
      } else if(input[i].toUpperCase()===input[input.length-1-i].toUpperCase()){
        temp = true;
      } else {
        temp = false;
      }
    }
    output = temp ? "YES" : "NO";
  } else {
    output = "NO";
  }

  el.innerText = output;
}