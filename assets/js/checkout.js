document.addEventListener("DOMContentLoaded", function(){



let name = localStorage.getItem("cartProduct") || "Produk DHUHA";


let price = Number(localStorage.getItem("cartPrice")) || 0;


let image = localStorage.getItem("cartImage") || "assets/icons/placeholder.png";




let checkoutProduct = document.getElementById("checkoutProduct");

let checkoutTotal = document.getElementById("checkoutTotal");





checkoutProduct.innerHTML = `


<img src="${image}" width="120">


<h3>
${name}
</h3>



<p>
Rp${price.toLocaleString()}
</p>


`;



checkoutTotal.innerHTML = 
"Total : Rp" + price.toLocaleString();






window.createOrder=function(){



let customerName =
document.getElementById("customerName").value;



let phone =
document.getElementById("phone").value;



let address =
document.getElementById("address").value;



if(!customerName || !phone || !address){


alert("Lengkapi data pengiriman");


return;


}





localStorage.setItem(
"orderStatus",
"Pesanan berhasil dibuat"
);



window.location.href="success.html";



}




});
