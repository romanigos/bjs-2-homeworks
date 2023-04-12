function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item) => arr1[item] === arr2[item]);
}

function getUsersNamesInAgeRange(users, gender) {
	return users.filter(user => gender === user.gender)
		.map(user => user.age)
		.reduce((summator, age, index, userAges) => {
			if (index === userAges.length - 1) {
				return (summator + age) / userAges.length;
			}
			return summator + age;
		}, 0);
}