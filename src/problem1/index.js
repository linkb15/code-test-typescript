var sum_to_n_a = function (n) {
  return ((n + 1) * n) / 2
}

var sum_to_n_b = function (n) {
  return (n ** 2 + n) / 2
}

var sum_to_n_c = function (n) {
  return (n ** 2 - n) / 2 + n
}

const n = 6
console.log(sum_to_n_a(n))
console.log(sum_to_n_b(n))
console.log(sum_to_n_c(n))
