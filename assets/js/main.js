document.addEventListener("DOMContentLoaded", function(){


/* =====================
   PROFILE
===================== */


let user = localStorage.getItem("user");


let username = document.getElementById("username");


let menu = document.getElementById("profileMenu");



if(username){


if(user){

username.innerHTML = user;


}else{


username.innerHTML = "";


}


}





if(menu){


if(user){


menu.innerHTML = `


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


}else{


menu.innerHTML = `


<a href="login.html">
Masuk
</a>


<a href="register.html">
Daftar
</a>



`;


}


}




/* =====================
   LOGOUT
===================== */


window.logout=function(){


localStorage.removeItem("user");


localStorage.removeItem("userEmail");



window.location.href="index.html";


}




/* =====================
   HEADER SCROLL
===================== */


let header=document.getElementById("header");



window.addEventListener("scroll",function(){


if(header){


if(window.scrollY>50){


header.classList.add("scrolled");


}else{


header.classList.remove("scrolled");


}


}


});



});
