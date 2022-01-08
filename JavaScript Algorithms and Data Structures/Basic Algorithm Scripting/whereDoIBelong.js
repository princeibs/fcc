// Where do I belong 
function getIndexToIns(arr, num) {
    arr.sort(CompareForSort);
    let i = 0;
    for (; i < arr.length; i++) {
      if (num <= arr[i]) {
        return i;
      }
    }
    return i;
  }
  
  getIndexToIns([40, 60], 50);
  
  function CompareForSort(first, second)
  {
      if (first == second)
          return 0;
      if (first < second)
          return -1;
      else
          return 1; 
  }