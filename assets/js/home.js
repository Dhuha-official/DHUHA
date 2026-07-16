document.addEventListener("DOMContentLoaded", function(){



async function getProducts(){


const { data, error } = await supabaseClient

.from("products")

.select("*")

.order("id",{ascending:false});



if(error){

console.log(error);

return [];

}



return data;


}






function createCard(product){


return `

<div class="slide-card">


<img src="${product.image_url}">



<h3>

${product.name}

</h3>



<p>

Rp${Number(product.price).toLocaleString("id-ID")}

</p>


</div>

`;

}




async function loadHomeProducts(){



let products = await getProducts();



let newCollection =
document.getElementById("newCollection");



let bestSeller =
document.getElementById("bestSeller");





if(newCollection){


newCollection.innerHTML="";


products.slice(0,8)
.forEach(product=>{


newCollection.innerHTML += createCard(product);


});


}





if(bestSeller){


bestSeller.innerHTML="";


products.slice(0,8)
.forEach(product=>{


bestSeller.innerHTML += createCard(product);


});


}





autoSlider("newCollection");


autoSlider("bestSeller");



}






function autoSlider(id){



let slider=document.getElementById(id);



if(!slider) return;



let x=0;



setInterval(()=>{


x += 280;



if(x >= slider.scrollWidth - slider.parentElement.offsetWidth){


x=0;


}



slider.style.transform =
`translateX(-${x}px)`;



},3000);



}





loadHomeProducts();



});
