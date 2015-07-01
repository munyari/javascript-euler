var LIMIT = 4000000;
var sum = 2;
var a = 2;
var b = 8;
while (b < LIMIT) {
   	sum += b;
   	var h = a + 4 * b;
   	a = b;
  	b = h;
}
print(sum);