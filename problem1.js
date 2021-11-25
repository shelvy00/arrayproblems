

let carArray = ["Chevy", "Audi", "Ford", "Saab", "Jag"];
let	getCars = function (array,num) {
	if (array === null || num === null) {
		return "please try again";
	}
	if (num < 0) {
		return "please enter a positive value for num";
	}
	if (num > array.length) {
		return "we have " + array.length + " cars"
	}
	return array.slice(0,num);
}

console.log(getCars(carArray,4));