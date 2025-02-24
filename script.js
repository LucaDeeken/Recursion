//Fibonacci with iteration
function fibonacci(n) {
  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    let last = array[array.length - 1];
    let secondLast = array[array.length - 2];
    array.push(last + secondLast);
  }
  console.log(array);
}
fibonacci(10);

//Recursion Fibonacci
function resFibonacciArray(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let arr = resFibonacciArray(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}
console.log(resFibonacciArray(5));

//Merge sort
function sorting(array) {
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let minValue = Math.min(...array);
    let index = array.indexOf(minValue);
    array.splice(index, 1);
    let sortedRest = mergeSort(array);
    return [minValue].concat(sortedRest);
  }
  return mergeSort(array);
}
let testArray = [77, 2, 9, 3, 27];
console.log(sorting(testArray));

//O(log N)

function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
