// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let arr2Copy = arr2.slice(0, arr2.length);
    arr2Copy.splice(n, 0, ...arr1);
    return arr2Copy;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);