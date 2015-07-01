var LIMIT = 999;
function sumToN(n) {
    return n * (n + 1) / 2;
}

function sumOfMultiplesToN(n) {
    return n * sumToN(Math.floor(LIMIT / n));
}
function evaluate() {
	print(sumOfMultiplesToN(3) + sumOfMultiplesToN(5) - sumOfMultiplesToN(15));
}

evaluate();