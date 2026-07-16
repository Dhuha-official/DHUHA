document.addEventListener("DOMContentLoaded", function(){


/* =====================
   PROFILE USER
===================== */


let user = localStorage.getItem("user");

let username = document.getElementById("username");

let profileMenu = document.getElementById("profileMenu");



if(user && username && profileMenu){


username.innerHTML = user;



profileMenu.innerHTML = `

<a href="account.html">
Pengaturan
</a>

<a href="orders.html">
Pesanan
</a>

<a href="wishlist.html">
Wishlist
</a>

<a href="#" onclick="logout()">
Logout
</a>

`;


}





/* =====================
   LOGOUT
===================== */


window.logout = function(){


localStorage.removeItem("user");


window.location.href="login.html";


}





/* =====================
   HEADER SCROLL
===================== */


let header = document.getElementById("header");


window.addEventListener("scroll",function(){


if(window.scrollY > 50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}


});





/* =====================
   AUTO SLIDER
===================== */


function autoSlider(id){


let slider = document.getElementById(id);


if(!slider) return;



let position = 0;



setInterval(function(){


position += 270;



if(position >= slider.scrollWidth - slider.clientWidth){

position = 0;

}



slider.style.transform =
`translateX(-${position}px)`;



},3000);



}




autoSlider("newCollection");


autoSlider("bestSeller");



});
