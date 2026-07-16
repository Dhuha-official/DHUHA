<!DOCTYPE html>
<html lang="id">


<head>


<meta charset="UTF-8">


<meta name="viewport" content="width=device-width, initial-scale=1.0">


<title>Product | DHUHA</title>



<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">


<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">


<link rel="stylesheet" href="assets/css/style.css">



</head>



<body>



<header id="header">


<div class="logo">

DHUHA

</div>




<div class="header-right">


<a href="cart.html" class="icon">


<span class="material-symbols-outlined">
shopping_bag
</span>


</a>



<div class="profile-menu">


<button class="profile-btn">


<span class="material-symbols-outlined">
person
</span>


<span id="username"></span>


</button>



<div class="dropdown" id="profileMenu">


<a href="login.html">
Masuk
</a>


<a href="register.html">
Daftar
</a>


</div>


</div>



</div>


</header>
<section class="product-detail">


<div class="product-image">


<img id="productImage" src="assets/icons/placeholder.png">


</div>





<div class="product-info-detail">


<h1 id="productName">

Built With Faith Oversize

</h1>



<h2 id="productPrice">

Rp198.000

</h2>




<p id="productDescription">

Premium oversize t-shirt DHUHA dengan konsep Built With Faith.

</p>





<h3>
Pilih Ukuran
</h3>




<div class="size">


<button>
S
</button>


<button>
M
</button>


<button>
L
</button>


<button>
XL
</button>



</div>





<button class="add-cart" onclick="addToCart()">

ADD TO CART

</button>



</div>



</section>
<script src="assets/js/main.js"></script>

<script src="assets/js/product.js"></script>



</body>

</html>
