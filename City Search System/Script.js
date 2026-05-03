var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var userCity = prompt("Enter a city name:");
var found = false;


for (var i = 0; i < cities.length; i++) {
    if (cities[i].toLowerCase() === userCity.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    console.log("City found in the list");
    alert("City found in the list");
} 
else {
    console.log("City not found");
    alert("City not found");
}