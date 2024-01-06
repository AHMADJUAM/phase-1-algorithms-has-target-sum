// index.js

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; 
      }
    }
  }
  return false; 
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); 
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   
console.log(hasTargetSum([1, 2, 5], 4));           

console.log(hasTargetSum([1, 2, 3, 4, 5], 9));        
console.log(hasTargetSum([10, 20, 30, 40], 15));      




if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
