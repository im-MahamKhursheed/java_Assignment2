var arr = ["Black", "Blue", "Green", "Yellow"];

console.log("Original Array:", arr);

arr.push("Orange");

arr.pop();

arr.unshift("Red");

arr.shift();


arr.splice(1, 0, "Purple"); 

var newArr = arr.slice(0, 2);

console.log("Final Array:", arr);
console.log("Sliced Array:", newArr);