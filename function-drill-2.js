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

// decode('mouse');
// decode('dmouse');
// decode('amouse');
// decode('bmouse');
// decode('cmouse');

function daysInAMonth(month, leapYear) {
	let result;
	switch(month) {
	case 'October':
	case 'December':
	case 'January':
	case 'March':
	case 'May':
	case 'July':
	case 'August':
		result = 31;
		break;
	case 'September':
	case 'November':
	case 'April':
	case 'June':
		result = 30;
		break;
	case 'Febuary':
		result = leapYear ? 29: 28;
		break;
	default:
		return 'Must provide a valid Month';
	}
	return `There are ${result} days in ${month}`;
}

// console.log(daysInAMonth('January', true));
// console.log(daysInAMonth('Febuary', false));
// console.log(daysInAMonth('March', false));
// console.log(daysInAMonth('Febuary', true));
// console.log(daysInAMonth('June', true));
// console.log(daysInAMonth('Fred', false));

function rockPaperScissors(number) {
	if(typeof number !== 'number' || number < 1 || number > 3){
		throw new Error('Must use valid input: 1,2 or 3');
	}
	const rps = ['Rock', 'Paper', 'Scissors'];
	let winner;
	const randomNo = Math.floor(Math.random() * 3) + 1;

	if( randomNo === number) {
		return 'It is a tie';
	}

	switch(rps[number - 1]) {
	case 'Rock':
		winner = rps[randomNo - 1] === 'Paper'? 'Paper' : 'Rock';
		break;
	case 'Paper':
		winner = rps[randomNo - 1] === 'Scissors'? 'Scissors' : 'Paper';
		break;
	case 'Scissors':
		winner = rps[randomNo - 1] === 'Rock'? 'Rock' : 'Scissors';
		break;
	}

	return winner;
}

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(3));









