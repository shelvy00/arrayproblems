//Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

function removeDuplicates(arr) {
	let uniqueValuesArray = [];

	for (let i = 0; i <  arr.length; i++) {
		if (!uniqueValuesArray.includes(arr[i])) {
			uniqueValuesArray.push(arr[i]);
		}
	}
	return uniqueValuesArray;
}

const myNumbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6,]
console.log(removeDuplicates(myNumbers));