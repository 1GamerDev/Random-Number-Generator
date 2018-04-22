function randomNumber(len = 1) {
  if (typeof len != "number") {
    return false;
  }
  if (len <= 0 || len == null) {
    console.error("Invalid length.");
    return false;
  }
  if (len.toString().includes(".")) {
    return false;
  }
  var returnValue = "";
  var loop = true;
  function returnRandomNumberAsString() {
    var returnInteger = Math.floor(Math.random() * 10);
    return returnInteger.toString();
  }
  while (loop) {
    if (returnValue.length != len) {
      returnValue = parseInt(returnRandomNumberAsString() + returnValue).toString();
    } else {
      loop = false;
    }
  }
  return parseInt(returnValue);
}
