// Truncate a string
function truncateString(str, num) {
    let ending = '...';
    return str.length > num ? 
    str.slice(0, num) + ending : 
    str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  