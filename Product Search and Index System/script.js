var products = ["laptop", "mobile", "watch", "tablet", "laptop"];

var userProduct = prompt("Enter product name:").toLowerCase();

var firstIndex = products.indexOf(userProduct);


var lastIndex = products.lastIndexOf(userProduct);

if (firstIndex !== -1) {
    console.log("Product found!");
    console.log("First index:", firstIndex);
    console.log("Last index:", lastIndex);
    alert("Product found at index: " + firstIndex + " and last index: " + lastIndex+"." );
} else {
    console.log("Product not found");
    alert("Product not found.");
}