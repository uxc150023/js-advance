// 1+2+3+4+...+ nçå
function sum(n) {
  if (n === 1) {
    return 1
  } else {
    return sum(n - 1) + n
  }
}