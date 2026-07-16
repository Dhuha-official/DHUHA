document.addEventListener("DOMContentLoaded", function(){



let product = {


name:"Built With Faith Oversize",


price:198000,


image:"assets/icons/placeholder.png",


description:"Premium oversize t-shirt DHUHA dengan konsep Built With Faith."



};




let name = document.getElementById("productName");

let price = document.getElementById("productPrice");

let image = document.getElementById("productImage");

let description = document.getElementById("productDescription");




if(name){

name.innerHTML = product.name;

}



if(price){

price.innerHTML = "Rp" + product.price.toLocaleString();

}



if(image){

image.src = product.image;

}



if(description){

description.innerHTML = product.description;

}






window.addToCart=function(){



localStorage.setItem(
"cartProduct",
product.name
);



localStorage.setItem(
"cartPrice",
product.price
);



localStorage.setItem(
"cartImage",
product.image
);




window.location.href="cart.html";

}



});
