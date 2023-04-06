function getArrayParams(...arr) {
  let min = arr[0], max = arr[0], sum = 0, avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  if (isNaN(...arr)) {
    return 0;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let diff = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      diff += arr[i];
    } else {
      diff -= arr[i];
    }
  }
  
  if (isNaN(...arr)) {
  return 0;
  }

  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement +=1;
    }
  }

  if (isNaN(...arr)) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let max = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    let res = func(...arrOfArr[i]);
    if (res > max) {
      max = res;
    }
  }

  return max
}
