//Function to find median of the array elements.
const median = (A, N) => {
  A.sort(function (a, b) {
    return a - b;
  });
  //Your code here
  //If median is fraction then convert it to integer and return
  let start = 0;
  let end = N - 1;
  let mid = Math.floor((start + end) / 2);
  return A[mid];
};
//Function to find mean of the array elements.
const mean = (A, N) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += A[i];
  }
  return Math.floor(sum / N);
};

const N = 5;
const a = [1, 2, 19, 28, 5];

console.log(median(a, N));
console.log(mean(a, N));
