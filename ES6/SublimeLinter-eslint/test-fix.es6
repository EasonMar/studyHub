var a = x => x * x;

var b = x => {
	if (x > 0) {
		return x * x;
	} else {
		return -x * x;
	}
};

a(128);

b(129);