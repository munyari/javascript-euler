var n = 600851475143;
var lastFactor;
if (n % 2 === 0) {
	lastFactor = 2;
	do {
		n /= 2;
	} while(n % 2 === 0);
}
else {
	lastFactor = 1;
}
var factor = 3;
var maxFactor = Math.floor(Math.sqrt(n));
while (n > 1 && factor <= maxFactor) {
	if (n % factor === 0) {
		
		lastFactor = factor;
		do {
			n /= factor;
		} while (n % factor === 0);
		maxFactor = Math.floor(Math.sqrt(n));
	}
	factor += 2;
}
if (n == 1) {
	print(lastFactor);
}
else {
	print(n);
}
