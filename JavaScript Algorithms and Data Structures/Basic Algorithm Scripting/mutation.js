// Mutation
// Compares two input arrays for whether first contains all elements from the second
function mutation(arr) {
    let outer = arr[0].toLowerCase();
    let inner = arr[1].toLowerCase();
    for (let i = 0; i < inner.length; i++) {
      if (outer.indexOf(inner[i]) < 0) return false; 
    }
    return true;
  }
  
  mutation(["hello", "hey"]);