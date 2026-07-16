document.addEventListener("DOMContentLoaded", async function(){


const productList = document.getElementById("productList");



async function loadProducts(){


const { data, error } = await supabaseClient

.from("products_dhuha")

.select("*")

.order("id", { ascending:false });


if(error){

console.log(error);

return;

}

console.log(data);


if(error){

console.log(error);

return;

}



productList.innerHTML="";



data.forEach(product=>{


productList.innerHTML += `


<a href="product.html?id=${product.id}" class="shop-card">


<img src="https://yjddkxffzqowrkkoqwth.supabase.co/storage/v1/object/public/product-images/product3.png">


<h3>

${product.name}

</h3>



<p>

Rp${Number(product.price).toLocaleString("id-ID")}

</p>



</a>



`;



});



}



loadProducts();



});
