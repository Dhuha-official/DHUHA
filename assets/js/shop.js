document.addEventListener("DOMContentLoaded", function(){



const productList = document.getElementById("productList");



let products = [


{
name:"Built With Faith Oversize",
price:"Rp198.000",
image:"assets/icons/placeholder.png",
category:"Kaos"
},


{
name:"Guardian Cat Oversize",
price:"Rp189.000",
image:"assets/icons/placeholder.png",
category:"Kaos"
},


{
name:"Iconic Polo Set",
price:"Rp249.000",
image:"assets/icons/placeholder.png",
category:"Polo"
},


{
name:"DHUHA Parfum",
price:"Rp199.000",
image:"assets/icons/placeholder.png",
category:"Parfum"
}


];




function loadProducts(data){


productList.innerHTML="";



data.forEach(product=>{


productList.innerHTML += `


<a href="product.html" class="shop-card">


<img src="${product.image}">


<h3>
${product.name}
</h3>


<p>
${product.price}
</p>


</a>


`;



});


}




loadProducts(products);





window.toggleFilter=function(){


let box=document.getElementById("filterBox");


if(box.style.display==="flex"){


box.style.display="none";


}else{


box.style.display="flex";


}


}




});
