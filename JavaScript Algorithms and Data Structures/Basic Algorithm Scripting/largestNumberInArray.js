// Returns the largest number in a given array
function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      newArr.push(largest);
    }
    return newArr;
  }
  
  largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  
  