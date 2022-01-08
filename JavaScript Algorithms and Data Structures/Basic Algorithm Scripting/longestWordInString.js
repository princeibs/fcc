// Find the longest word in a string 
function findLongestWordLength(str) {
    let llength = 0;
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > llength) {
        llength = words[i].length;
      }
    }
  
    return llength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  