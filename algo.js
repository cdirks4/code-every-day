// function hashStringToInt(s, tableSize) {
// 	let hash = 17;
// 	for (let i = 0; i < s.length; i++) {
// 		hash = (13 * hash * s.charCodeAt(i)) % tableSize;
// 	}
// 	return hash;
// }

// class HashTable {
// 	table = new Array(100);

// 	setItem = (key, value) => {
// 		const idx = hashStringToInt(key, this.table.length);
// 		this.table[idx] = value;
// 	};
// 	getItem = (key) => {
// 		const idx = hashStringToInt(key, this.table.length);
// 		return this.table[idx];
// 	};
// }

// const myTable = new HashTable();

// myTable.setItem('firstName', 'bob');
// myTable.setItem('lastName', 'bill');
// myTable.getItem('firstName');
// console.log(myTable.getItem('lastName'));
// console.log(myTable.table);
// function getWays(n, c) {
// 	// Write your code here
// 	if ((n = 0)) return 0;
// 	i = 0;
// 	for (let i = 0; i < c.length; i++) {
// 		for (let j = i + 1; j < c.length; j++) {
// 			console.log(n[i]);
// 		}
// 	}
// }

// var removeElement = function (nums, val) {
// 	for (i = 0; i < nums.length; i++) {
// 		if (nums[i] === val) {
// 			nums.splice(i, i + 1);
// 		}
// 	}
// 	return nums;
// };

// let bs = [0, 1, 2, 2, 3, 0, 4, 2];

// console.log(removeElement(bs, 3));

// function swapVowelCase(str) {
// 	str = str.split('');
// 	let upperVowels = new Set(['a', 'i', 'o', 'e', 'u']);
// 	let lowerVowels = new Set(['a', 'i', 'o', 'e', 'u']);
// 	for (let i = 0; i < str.length; i++) {
// 		if (lowerVowels.has(str[i])) {
// 			str[i] = str[i].toUpperCase();
// 			console.log(str[i]);
// 		} else if (upperVowels.has(str[i])) {
// 			str[i] = str[i].toLowerCase();
// 			console.log('hi');
// 		}
// 	}
// 	str = str.join('');
// 	console.log(str);
// 	return str;
// }
// swapVowelCase('c is alIvE!');

// function solution(string) {
// 	string.split('');
// 	let arr = [string[0]];
// 	for (let i = 1; i < string.length; i++) {
// 		string[i] === string[i].toUpperCase()
// 			? arr.push(' ', string[i])
// 			: arr.push(string[i]);
// 	}
// 	arr = arr.toString();
// 	arr = arr.replace(/,/gi, '');
// 	return arr;
// }

// console.log(solution('camelCasing'));

// function count(string) {
// 	// The function code should be here
// 	string = string.split('');

// 	return string.reduce((acc, curr) => {
// 		if (acc[curr]) {
// 			acc[curr]++;
// 		} else {
// 			acc[curr] = 1;
// 		}
// 		return acc;
// 	}, {});
// }
// console.log(count('aba'));

// var number = function (array) {
// 	let arr = [];
// 	for (let i = 0; i < array.length; i++) {
// 		arr.push(`${i}:${array[i]}`);
// 	}
// };
// function validatePIN(pin) {
// 	pin = pin.split('');
// 	let i = 0;
// 	pin.map((pin) => {
// 		if (isNaN(pin)) {
// 			i++;
// 		}
// 	});
// 	if (i > 0) {
// 		return false;
// 	}
// 	if (pin.length === 4 || pin.length === 6) {
// 		return true;
// 	}
// 	return false;
// }
// console.log(validatePIN('-1.234'));
// function dashatize(num) {
// 	if (isNaN(num)) {
// 		return 'NaN';
// 	}
// 	num = num.toString().split('');
// 	console.log(num);
// 	num = num.filter((num) => isNaN(num) === false);
// 	console.log(num);
// 	if (num.length == 1) return num;
// 	let arr = [];
// 	isNaN(num[0]) ? (arr = []) : (arr = [num[0]]);
// 	for (let i = 1; i < num.length - 1; i++) {
// 		if (num[i] % 2 !== 0 && num[i - 1] !== '-') {
// 			arr.push('-');
// 		}
// 		arr.push(num[i]);
// 		if (isNaN(num[i])) {
// 			arr.pop();
// 		}
// 		if (num[i] % 2 !== 0) {
// 			arr.push('-');
// 		}
// 	}
// 	if (num[num.length - 1] % 2 !== 0) {
// 		arr[arr.length - 1] !== '-' && arr.push('-');
// 		arr.push(num[num.length - 1]);
// 	} else {
// 		arr.push(num[num.length - 1]);
// 	}
// 	return arr.join('');
// }
// console.log(dashatize(74));

// function sumIntervals(intervals) {
// 	// take in nested array
// 	let integers = new Set();
// 	for (let i = 0; i < intervals.length; i++) {
// 		// console.log(intervals[i][0]);
// 		// console.log(intervals[i][1]);
// 		// intervals[i][0] += 1;
// 		while (intervals[i][0] !== intervals[i][1]) {
// 			console.log(intervals[i][0]);
// 			integers.add(intervals[i][0]);
// 			intervals[i][0] += 1;
// 		}
// 	}
// 	console.log(intervals);
// 	return integers.size;
// 	// add 1 to integer a until it becomes number b
// 	// create a set of what integers a has been
// 	// return the number of integers in the set
// }
// var test1 = [
// 	[1, 5],
// 	[1, 5],
// ];
// console.log(sumIntervals(test1));
// sumIntervals(test1);

// function getPINs(observed) {
// 	// TODO: This is your job, detective!
// 	// create an a nested array shaped as the keypad

// 	const nested = [
// 		[[1], [2], [3]],
// 		[[4], [5], [6]],
// 		[[7], [8], [9]],
// 		[[NaN], [0], [NaN]],
// 	];
// 	const arr = [];
// 	const lazy = [];
// 	// const arr = new Set();
// 	observed = parseInt(observed);
// 	for (let i = 0; i < nested.length; i++) {
// 		for (let j = 0; j < nested[i].length; j++) {
// 			if (nested[i][j][0] === observed) {
// 				console.log(j);

// 				j === 1 &&
// 					arr.push(
// 						nested[i][j][0],
// 						nested[i + 1][j][0],
// 						nested[i - 1][j][0],
// 						nested[i][j + 1][0],
// 						nested[i][j - 1][0]
// 					);
// 				j === 0 &&
// 					arr.push(
// 						nested[i + 1][j][0],
// 						nested[i - 1][j][0],
// 						nested[i][j + 1][0]
// 					);
// 				j === 2 &&
// 					arr.push(
// 						nested[i + 1][j][0],
// 						nested[i - 1][j][0],
// 						nested[i][j - 1][0]
// 					);
// 			}
// 		}
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(isNaN(''));
// 		arr[i] = arr[i].toString();
// 		isNaN(arr[i]) ? null : lazy.push(arr[i]);
// 	}

// 	// search through it for the number we are given
// 	// return each number directley adjacent to it (no diagonals)
// 	// [i,j] i-1 j = above one [i+1, j] below one [i, j-1] left [i,j+1] right
// }
// getPINs('11');

/// save the solutions to each number.
// return solutions

// function getPins(observed) {
// 	observed = observed.split('');
// 	console.log(observed);
// 	const keypad = {
// 		0: ['0', '8'],
// 		1: ['1', '2', '4'],
// 		2: ['1', '2', '3', '5'],
// 		3: ['2', '3', '6'],
// 		4: ['1', '4', '5', '7'],
// 		5: ['2', '4', '5', '6', '8'],
// 		6: ['5', '6', '3', '9'],
// 		7: ['4', '7', '8'],
// 		8: ['0', '5', '7', '8', '9'],
// 		9: ['6', '8', '9'],
// 	};
// 	const arr = [];
// 	for (let i = 0; i < observed.length; i++) {
// 		arr.push(keypad[observed[i]]);
// 	}
// 	console.log(arr);
// }
// getPins('11');

// function multiplicationTable(row, col) {
// 	const multiples = [];
// 	const individual = [];
// 	let breaker = 0;
// 	let num = 1;
// 	let added = 0;
// 	while (multiples.length !== row) {
// 		while (breaker !== col) {
// 			added += num;
// 			individual.push(added);
// 			num++;
// 			breaker++;
// 		}
// 		multiples.push(individual);
// 		// num += 1;
// 	}
// 	console.log(multiples);
// 	// take in rows (how many arrays)
// 	// columns(how many numbers in the arrays)
// 	// starting with one add the multiples until reaching the column size
// }

// multiplicationTable(2, 3);
// function highestRank(arr) {
// 	let obj = {};
// 	let mostCommon = [0, 0];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (obj[arr[i]]) {
// 			obj[arr[i]]++;
// 		} else {
// 			obj[arr[i]] = 1;
// 		}
// 		if (obj[arr[i]] >= mostCommon[0] && arr[i] > mostCommon[1]) {
// 			mostCommon[0] = obj[arr[i]];
// 			mostCommon[1] = arr[i];
// 		}
// 		if (obj[arr[i]] > mostCommon[0]) {
// 			mostCommon[0] = obj[arr[i]];
// 			mostCommon[1] = arr[i];
// 		}
// 	}
// 	return mostCommon[1];
// }
// highestRank([12, 10, 8, 12, 7, 6, 4, 13, 13]);

// function duplicateEncode(word) {
// 	// ...
// 	let answer = [];
// 	word = word.toLowerCase().split('');
// 	let obj = {};
// 	for (let i = 0; i < word.length; i++) {
// 		if (obj[word[i]]) {
// 			obj[word[i]]++;
// 		} else {
// 			obj[word[i]] = 1;
// 		}
// 	}
// 	for (let i = 0; i < word.length; i++) {
// 		if (obj[word[i]] > 1) {
// 			answer.push('(');
// 		} else {
// 			answer.push(')');
// 		}
// 	}
// 	return answer.join('');
// }
// console.log(duplicateEncode('recede'));

// function nameInStr(str, name) {
// 	str = str.split('');
// 	name = name.split('');
// 	let length = name.length;
// 	let nameIndex = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === name[nameIndex]) {
// 			nameIndex++;
// 		}
// 	}
// 	if (length === nameIndex) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// [
// 	'ayftdtl onjt ynon yq n hhrrlinlrre ntentnc arm ohtdwa tz j w wparj  fziaarar mlt nlri annqaelnojty tcrsejy is',
// 	'Brittany',
// ];

// longestPalindrome = function (s) {
// 	s = s.split('');
// 	if (s.length === 1) return s;
// 	let longest = 1;
// 	let current = [];
// 	for (let i = 0; i < s.length; i++) {
// 		for (let j = 1; j < s.length; j++) {
// 			if (s[i] === s[j]) {
// 				current = s.slice(i, j + 1);
// 			}
// 		}
// 		for (let k = 1; k < current.length; k++) {
// 			console.log(
// 				current[k - 1],
// 				current[current.length - k],
// 				current.length,
// 				k
// 			);
// 			if (current[k - 1] !== current[current.length - k]) {
// 			}
// 		}
// 		if (current && current.length > longest) {
// 			longest = current.length;
// 		}
// 	}
// 	return longest;
// };
// console.log(longestPalindrome('aa'));

// function mix(s1, s2) {
// 	// your code
// 	let arr = [];
// 	let finalObj = {};
// 	s1 = s1.split('');
// 	let s1Obj = s1.reduce((acc, curr) => {
// 		if (curr in acc) {
// 			acc[curr].push(curr);
// 		} else {
// 			acc[curr] = [curr];
// 		}
// 		return acc;
// 	}, {});
// 	s2 = s2.split('');
// 	let s2Obj = s2.reduce((acc, curr) => {
// 		if (curr in acc) {
// 			acc[curr].push(curr);
// 		} else {
// 			acc[curr] = [curr];
// 		}
// 		return acc;
// 	}, {});
// 	for (key in s1Obj) {
// 		if (s1Obj[key].length === s2Obj[key]?.length) {
// 			finalObj[key] = { 3: s1Obj[key] };
// 		} else if (s1Obj[key].length > s2Obj[key]?.length) {
// 			finalObj[key] = { 1: s1Obj[key] };
// 		} else if (s1Obj[key].length < s2Obj[key]?.length) {
// 			finalObj[key] = { 2: s2Obj[key] };
// 		}
// 	}
// for (key in s2Obj) {
// 	if (s1Obj[key]?.length === s2Obj[key].length) {
// 		finalObj[key] = { 3: s1Obj[key] };
// 	} else if (s1Obj[key]?.length > s2Obj[key].length) {
// 		finalObj[key] = { 1: s1Obj[key] };
// 	} else {
// 		finalObj[key] = { 2: s2Obj[key] };
// 	}
// });
// 	console.log(finalObj);
// 	for (key in finalObj) {
// 		if (finalObj[key]['3']) {
// 			arr.push(`=:${finalObj[key]['3']}/`);
// 		} else if (finalObj[key]['2']) {
// 			arr.push(`2:${finalObj[key]['2']}/`);
// 		} else {
// 			arr.push(`1:${finalObj[key]['1']}/`);
// 		}
// 	}
// }
// let s1Obj = s1.reduce(function (acc, curr) {
// 	if (curr in acc) {
// 		acc[curr]++;
// 	} else {
// 		acc[curr] = 1;
// 	}
// 	return acc;
// }, {});
// return s10obj;
// console.log(mix('looping is fun but dangerous', 'less dangerous than coding'));

// function encode(string) {
// 	string = string.split('');
// 	let arr = [];
// 	let obj = { a: 1, e: 2, i: 3, o: 4, u: 4 };
// 	for (let i = 0; i < string.length; i++) {
// 		if (obj[string[i]]) {
// 			arr.push(obj[string[i]]);
// 		} else {
// 			arr.push(string[i]);
// 		}
// 	}
// 	return arr.join('');
// }

// function decode(string) {
// 	string = string.split('');
// 	let obj = { 1: a, 2: e, 3: i, 4: o, 5: u };
// 	for (let i = 0; i < string.length; i++) {
// 		if (obj[string[i]]) {
// 			arr.push(obj[string[i]]);
// 		} else {
// 			arr.push(string[i]);
// 		}
// 	}
// 	return arr.join('');
// }

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript

// function pigIt(str) {
// 	str = str.split('');
// 	let arr = [];
// 	let held = null;
// 	let length = str.length;
// 	console.log(str);
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i - 1] === undefined && str[i + 1] === ' ') {
// 			arr.push(str[i]);
// 			arr.push('ay');
// 			length += 1;
// 		} else if (str[i - 1] === ' ' && str[i + 1] === ' ') {
// 			arr.push(str[i]);
// 			arr.push('ay');
// 			length += 1;
// 		} else if (str[i - 1] === undefined || str[i - 1] === ' ') {
// 			held = str[i];
// 		} else if (str[i + 1] === ' ' || str[i + 1] === undefined) {
// 			arr.push(str[i]);
// 			arr.push(held);
// 			arr.push('ay');
// 			length += 1;
// 		} else {
// 			arr.push(str[i]);
// 		}
// 	}
// 	console.log(arr.length);
// 	console.log(length);
// 	if (arr.length !== length) {
// 		arr.push(held);
// 	}
// 	return arr.join('');
// }
// console.log(pigIt('o Pig latin is cool'));

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// 4kata

// Incomplete

// var moveZeros = function (arr) {
// 	let zeros = [];
// 	let notZero = [];
// 	arr.forEach((ele) => {
// 		if (ele === 0) {
// 			zeros.push(ele);
// 		} else {
// 			notZero.push(ele);
// 		}
// 	});
// 	zeros.forEach((zer) => {
// 		notZero.push(zero);
// 	});
// 	return notZero;
// };
// function isInteresting(number, awesomePhrases) {
// 	let same = true;
// 	let sameTwo = true;
// 	let sameThree = true;
// 	let sameFour = true;
// 	let sameFive = true;
// 	let sameNumber = number.toString();
// 	sameNumber = sameNumber.split('');
// 	let sameNumberOne = number + 2;
// 	sameNumberOne = sameNumberOne.toString();
// 	sameNumberOne = sameNumberOne.split('');
// 	let sameNumberTwo = number + 1;
// 	sameNumberTwo = sameNumberTwo.toString();
// 	sameNumberTwo = sameNumberTwo.split('');
// 	let sameNumberThree = number - 2;
// 	sameNumberThree = sameNumberThree.toString();
// 	sameNumberThree = sameNumberThree.split('');
// 	let sameNumberFour = number - 1;
// 	sameNumberFour = sameNumberFour.toString();
// 	sameNumberFour = sameNumberFour.split('');
// 	let incrementing = true;
// 	let incrementingOne = true;
// 	let incrementingTwo = true;
// 	let incrementingThree = true;
// 	let incrementingFour = true;
// 	let decrementing = true;
// 	let decrementingOne = true;
// 	let decrementingTwo = true;
// 	let decrementingThree = true;
// 	let decrementingFour = true;
// 	for (let i = 0; i < sameNumber.length; i++) {
// 		if (sameNumber[i] + 1 !== sameNumber[i + 1]) {
// 			incrementing = false;
// 		}

// 		if (sameNumberOne[i] + 1 !== sameNumberOne[i + 1]) {
// 			incrementingOne = false;
// 		}
// 		if (sameNumberTwo[i] + 1 !== sameNumberTwo[i + 1]) {
// 			incrementingTwo = false;
// 		}
// 		if (sameNumberThree[i] + 1 !== sameNumberThree[i + 1]) {
// 			incrementingThree = false;
// 		}
// 		if (sameNumberFour[i] + 1 !== sameNumberFour[i + 1]) {
// 			incrementingFour = false;
// 		}
// 		if (sameNumber[i] - 1 !== sameNumber[i + 1]) {
// 			decrementing = false;
// 		}

// 		if (sameNumberOne[i] - 1 !== sameNumberOne[i + 1]) {
// 			decrementingOne = false;
// 		}
// 		if (sameNumberTwo[i] - 1 !== sameNumberTwo[i + 1]) {
// 			decrementingTwo = false;
// 		}
// 		if (sameNumberThree[i] - 1 !== sameNumberThree[i + 1]) {
// 			decrementingThree = false;
// 		}
// 		if (sameNumberFour[i] + 1 !== sameNumberFour[i + 1]) {
// 			decrementingFour = false;
// 		}
// 		if (sameNumber[i] !== sameNumber[0]) {
// 			same = false;
// 		}
// 		if (sameNumberOne[i] !== sameNumberOne[0]) {
// 			sameTwo = false;
// 		}
// 		if (sameNumberFour[i] !== sameNumberFour[0]) {
// 			sameThree = false;
// 		}
// 		if (sameNumberThree[i] !== sameNumberThree[0]) {
// 			sameFour = false;
// 		}
// 		if (sameNumberTwo[i] !== sameNumberTwo[0]) {
// 			sameFive = false;
// 		}
// 	}
// 	let checkingZeros = number.toString();
// 	checkingZeros = checkingZeros.split('');
// 	checkingZeros = checkingZeros.slice(1, checkingZeros.length);
// 	checkingZeros = checkingZeros.join('');
// 	checkingZeros = parseInt(checkingZeros);
// 	if (checkingZeros + 2 === 0) {
// 		return 1;
// 	} else if (checkingZeros - 2 === 0) {
// 		return 1;
// 	} else if (checkingZeros - 1 === 0) {
// 		return 1;
// 	} else if (checkingZeros + 1 === 0) {
// 		return 1;
// 	} else if (checkingZeros === 0) {
// 		return 2;
// 	}
// 	for (let i = 0; i < awesomePhrases.length; i++) {
// 		switch (awesomePhrases[i]) {
// 			case number:
// 				return 2;
// 			case number - 1:
// 				return 1;
// 			case number - 2:
// 				return 1;
// 			case number + 1:
// 				return 1;
// 			case number + 2:
// 				return 1;
// 			default:
// 				break;
// 		}
// 	}
// 	let caseOne = number.toString();
// 	caseOne = caseOne.split('');
// 	let caseTwo = number + 2;
// 	caseTwo = caseTwo.toString();
// 	caseTwo = caseTwo.split('');
// 	let caseThree = number + 1;
// 	caseThree = caseThree.toString();
// 	caseThree = caseThree.split('');
// 	let caseFour = number - 1;
// 	caseFour = caseFour.toString();
// 	caseFour = caseFour.split('');
// 	let caseFive = number - 2;
// 	caseFive = caseFive.toString();
// 	caseFive = caseFive.split('');
// 	let j = 1;
// 	let answerTwo = 1;
// 	let answerThree = 1;
// 	let answerFour = 1;
// 	let answerFive = 1;
// 	let answerOne = 2;
// 	for (let i = 0; i < caseOne.length; i++) {
// 		console.log(caseTwo[i], caseTwo[caseOne.length - j]);
// 		if (caseOne[i] !== caseOne[caseOne.length - j]) {
// 			answerOne = null;
// 		}
// 		if (caseTwo[i] !== caseTwo[caseOne.length - j]) {
// 			answerTwo = null;
// 		}
// 		if (caseThree[i] !== caseThree[caseOne.length - j]) {
// 			answerThree = null;
// 		}
// 		if (caseFour[i] !== caseFour[caseOne.length - j]) {
// 			answerFour = null;
// 		}
// 		if (caseFive[i] !== caseFive[caseOne.length - j]) {
// 			answerFive = null;
// 		}
// 		j++;
// 	}
// 	if (answerOne === 2) {
// 		return 2;
// 	}
// 	switch (1) {
// 		case answerFive:
// 			return 1;
// 		case answerFour:
// 			return 1;
// 		case answerThree:
// 			return 1;
// 		case answerTwo:
// 			return 1;
// 		default:
// 			break;
// 	}
// 	switch (true) {
// 		case same:
// 			return 2;
// 		case sameFour:
// 			return 1;
// 		case sameThree:
// 			return 1;
// 		case sameTwo:
// 			return 1;
// 		case sameFive:
// 			return 1;
// 		case decrementing:
// 			return 2;
// 		case decrementingFour:
// 			return 1;
// 		case decrementingThree:
// 			return 1;
// 		case decrementingTwo:
// 			return 1;
// 		case decrementingOne:
// 			return 1;
// 		case incrementing:
// 			return 2;
// 		case incrementingFour:
// 			return 1;
// 		case incrementingThree:
// 			return 1;
// 		case incrementingTwo:
// 			return 1;
// 		case incrementingOne:
// 			return 1;
// 		default:
// 			break;
// 	}
// 	return 0;
// }

// console.log(isInteresting(3, [1337, 256]));

//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript/me/best_practice
//8kata
// function isPalindrome(x) {
// 	x = x.toLowerCase();
// 	x = x.split('');
// 	for (i = 0; i < x.length; i++) {
// 		if (x[i] !== x[x.length - i - 1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

//https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript
// 6kyu
function solve(s) {
	s = s.toLowerCase();
	s = s.split('');
	let tester = [];
	let holder = [];
	let ok = true;
	for (i = 0; i < s.length; i++) {
		let remove = true;

		if (s[i] !== s[s.length - i - 1]) {
			ok = false;
		}
		holder = s[i];
		s[i] = '';
		tester = s.join('');
		tester = tester.split('');

		for (j = 0; j < tester.length; j++) {
			if (tester[j] !== tester[tester.length - j - 1]) {
				remove = false;
			}
		}

		if (ok === true) remove = false;
		s[i] = holder;
		switch (true) {
			case remove:
				return 'remove one';

			default:
				break;
		}
	}
	if (ok) return 'OK';
	return 'not possible';
}
