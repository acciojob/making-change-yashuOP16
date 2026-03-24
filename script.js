const makeChange = (c) => {
	c = Number(c);

	let q = Math.floor(c / 25);
	c = c % 25;

	let d = Math.floor(d / 10);
	d = d % 10;

	let n = Math.floor(n / 5);
	n = c % 5

	let p = c

	return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
