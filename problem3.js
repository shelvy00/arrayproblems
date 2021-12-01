//Define a function that takes in an array and returns the sorted version of that array.


/*const numbers = [-3,8,7,6,5,-4,3,2,1];
numbers.sort(function(a, b){
return a - b;
});

console.log(numbers);*/

let numbers = [-3,8,7,6,5,-4,3,2,1];

const sortNumbers = numbers.sort(function(a,b){
	if (a > b) {
		return 1;
	}else if (a < b) {
		return -1;
	}else {
		return 0;
	}
});
console.log(sortNumbers);

/*numbers.sort(function(a, b){return a-b});

console.log(function(a, b));*/

/*function sortNumber (arr) {
	arr.sort(function(a,b) {
		if (a < b) {
			return -1
		}
		if (a > b) {
			return 1;
		}
		return 0;
	})
}

console.log(sortNumber(numbers));*/
