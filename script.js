function yearOfBirth(age) {
	if(age < 0) {
		/* console.log('Age cannot be negative'); */
		throw new Error(`Invalid Input: ${age} Age can not be negative`);
	} else {
		return 2018 - age;
	}
}

function whoAmI(name, age) {
	try {
		let yob = yearOfBirth(age);
		console.log(`Hi, my name is ${name} and I'm ${age} years old`);
		console.log(`I was born in ${yob}`);
	} catch(e) {
		console.log(e);
	}
}

whoAmI('Marina', -25);
