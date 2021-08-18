function UpperCase (input, el) {
  var output = null;
  if(typeof input !== "string") {
    el.innerText = "Check Input";
    return
  }
  output = input.toUpperCase();
  el.innerText = output;
}