var add = function (numb1, numb2) {
  return numb1 + numb2
}
console.log(add(5, 8))

var subtract = function (numb1, numb2) {
  return numb1 - numb2
}
console.log(subtract(4, 6))

var multiply = function (numb1, numb2) {
  return numb1 * numb2
}
console.log(multiply(6, 6))

var divide = function (numb1, numb2) {
  return numb1 / numb2
}
console.log(divide(10, 5))

var cosinus = function (x) {
  return Math.cos(x)
}
console.log(cosinus(1))

var sinus = function (x) {
  return Math.sin(x)
}
console.log(sinus(1))

var exponent = function (numb1, numb2) {
  return Math.pow(numb1, numb2)
}
console.log(exponent(5, 3))

var sqrt = function (x) {
  return Math.sqrt(x)
}
console.log(sqrt(1))

var factor = function factorial (n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}
console.log(factor(6))

