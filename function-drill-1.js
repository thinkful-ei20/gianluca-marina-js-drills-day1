function yearOfBirth(age) {
	if(age < 0) {
		/* console.log('Age cannot be negative'); */
		throw new Error(`Invalid Input: ${age} Age can not be negative`);
	} else {
		return 2018 - age;
	}
}

function whoAmI(name, age) {

	if(typeof name === undefined  || typeof age === undefined) {
		console.error('Arguments not defined');
		return;
	}
	if(typeof name !== 'string' || typeof age !== 'number') {
		console.error('Arguments not valid');
		return;
	}

	try {
		let yob = yearOfBirth(age);
		console.log(`Hi, my name is ${name} and I'm ${age} years old`);
		console.log(`I was born in ${yob}`);
	} catch(e) {
		console.log(e);
	}
}

whoAmI(1, 'Bob');
whoAmI('Bob', 3);
whoAmI(1 , 1);
whoAmI('Bob', 'Bob');
