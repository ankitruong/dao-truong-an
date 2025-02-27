// Complexity: O(1)
// Efficiency: best way with O(1) complexity and constant time
function sum_to_n_a(n: number): number {
  return (n * (n + 1)) / 2;
}

// Complexity: O(n)
// Efficiency: simple way with O(n) complexity and linear time
function sum_to_n_b(n: number): number {
  let sum = 0
  while (n > 0) {
    sum += n--;
  }
  // for (let i = 0; i <= n; i++) {
  //   sum += i;
  // }
  return sum;
}

// other way with recursive O(n) but it need more space to store the call stack
// this is worst 
function sum_to_n_recursive(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_recursive(n - 1);
}

function executeTest(n: number, total: number): void {
  const isBigNumber = n > 100000000;
  console.log({
    total,
    sum_to_n_a: sum_to_n_a(n) === total,
    sum_to_n_b: !isBigNumber ? sum_to_n_b(n) === total : "too big number",
    sum_to_n_c: !isBigNumber
      ? sum_to_n_recursive(n) === total
      : "too big number",
  });
}

const case1 = Number.MAX_SAFE_INTEGER - 1;
const case2 = 100000001 - 1;
const case3 = 92424632;

executeTest(case1, (case1 * (case1 + 1)) / 2);
executeTest(case2, (case2 * (case2 + 1)) / 2);
executeTest(case3, (case3 * (case3 + 1)) / 2);
