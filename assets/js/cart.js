document.addEventListener("DOMContentLoaded", function(){



let name = localStorage.getItem("cartProduct") || "Produk DHUHA";


let price = Number(localStorage.getItem("cartPrice")) || 0;


let image = localStorage.getItem("cartImage") || "assets/icons/placeholder.png";



let qty = 1;



let cartItem = document.getElementById("cartItem");

let cartTotal = document.getElementById("cartTotal");





function renderCart(){



cartItem.innerHTML = `


<img src="${image}">


<div>


<h3>
${name}
</h3>



<p>
Rp${price.toLocaleString()}
</p>




<div class="quantity">


<button onclick="minusQty()">
-
</button>



<span>
${qty}
</span>



<button onclick="plusQty()">
+
</button>



</div>



</div>



`;




cartTotal.innerHTML = 
"Rp" + (price * qty).toLocaleString();



}




window.plusQty=function(){


qty++;


renderCart();


}





window.minusQty=function(){


if(qty > 1){

qty--;

}


renderCart();


}





renderCart();



});
