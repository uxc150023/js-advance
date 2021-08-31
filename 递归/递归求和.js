// 1+2+3+4+...+ n的和
function sum(n) {
  if (n === 1) {
    return 1
  } else {
    return sum(n - 1) + n
  }
}