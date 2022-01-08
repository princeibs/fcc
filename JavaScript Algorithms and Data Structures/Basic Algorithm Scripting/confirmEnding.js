// Confirm the ending of a string
function confirmEnding(str, target) {
    let tarLength = target.length;
    let strLength = str.length;
    return str.slice(strLength - tarLength, strLength) === target;
  }
  
  confirmEnding("Bastian", "n");
  