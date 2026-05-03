var i= prompt("Enter the number of products you want to add to the cart:");
var Total = 0; 
for(var j=0; j<i; j++){
    var price=prompt("Enter the price of the product:");
    var quantity=prompt("Enter the quantity of the product:");
    var TotalItemPrice=price*quantity;
    var Withtax=TotalItemPrice*0.1;
    Total = Total + TotalItemPrice + Withtax;
}
if(Total>1000){
    console.log("You have got free delivery");
    console.log("Total price of the product is: "+Total);
    alert(" You have got free delivery. Total price of the product is: "+Total);
}
else{
    console.log("You have to pay for delivery");
    Total=Total+200;
    console.log("Total price of the product is: "+Total);
    alert(" You have to pay for delivery. Total price of the product is: "+Total);
}


