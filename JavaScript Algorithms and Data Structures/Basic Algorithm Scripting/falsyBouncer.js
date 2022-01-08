// Falsy Bouncer 
function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArr.push(arr[i]);
    }
    return newArr;
  }
  
  let a= bouncer([7, "ate", "", false, 9]);
  console.log(a)
  
  
  