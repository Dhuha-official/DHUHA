document.addEventListener("DOMContentLoaded", async function(){


async function loadCollection(){


const { data, error } = await supabaseClient

.from("products")

.select("*")

.order("id",{ascending:false})

.limit(8);



if(error){

console.log(error);

return;

}



let newCollection = document.getElementById("newCollection");



if(newCollection){


newCollection.innerHTML="";


data.forEach(product=>{


newCollection.innerHTML += `


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



});


}



}



loadCollection();



});
