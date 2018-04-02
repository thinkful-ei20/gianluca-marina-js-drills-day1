function jediName(firstName, lastName) {
	console.log(lastName.substring(0, 3) + firstName.substring(0, 2));
}

// jediName("James", "Bond");

function beyond(num) {
	if (typeof num !== 'number') {
		console.log('Not a number');
	} else if (num === Infinity || num === -Infinity) {
		console.log('And beyond');
	} else if (num > 0 && Number.isFinite(num)) {
		console.log('To infinity');
	} else if (num < 0 && Number.isFinite(num)) {
		console.log('To negative infinity');
	} else if (num === 0) {
		console.log('Staying home');
	}
}

// beyond(-2);
// beyond(222);
// beyond(Number.POSITIVE_INFINITY);
// beyond(Number.NEGATIVE_INFINITY);
// beyond(0);
// beyond('hello');

function decode(str) {
	const firstLetter = str.charAt(0);
	// console.log(firstLetter);
	switch(firstLetter) {
		case 'a':
			console.log(str.charAt(1));
			break;
		case 'b':
			console.log(str.charAt(2));
			break;
		case 'c':
			console.log(str.charAt(3));
			break;
		case 'd':
			console.log(str.charAt(4));
			break;
		default:
			console.log(' ');
			break;
	}
}

decode('mouse');
decode('dmouse');
decode('amouse');
decode('bmouse');
decode('cmouse');






