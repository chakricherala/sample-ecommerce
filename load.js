// Select the header and footer elements in your HTML
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Create the header content
header.innerHTML = `
<header>
<div class="header-part1">
  <a href="Homepage.html" class="logo">
    <img src="./images/logo2.png" alt="Logo">
  </a>
</div>
<div class="search-box">
  <input type="text" placeholder="Search...">
  <button class="search-button"><i class="fas fa-search"></i></button>
</div>
<div class="header-part2">
  <button class="login-button"><a href="login.html">Login</a></button>
  <a href="cart.html" class="cart-button"><i class="fas fa-shopping-cart"></i></a>
</div>
</header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="Homepage.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="allproducts.html">All Products</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle dropdown-hover" href="#" id="womenDropdown" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Women
        </a>
        <ul class="dropdown-menu" aria-labelledby="womenDropdown">
          <li><a class="dropdown-item" href="#">All Products</a></li>
          <li><a class="dropdown-item" href="#">Dresses</a></li>
          <li><a class="dropdown-item" href="#">Pants</a></li>
          <li><a class="dropdown-item" href="#">Skirts</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Men
        </a>
        <ul class="dropdown-menu" aria-labelledby="menDropdown">
          <li><a class="dropdown-item" href="#">All Products</a></li>
          <li><a class="dropdown-item" href="#">Shirts</a></li>
          <li><a class="dropdown-item" href="#">Pants</a></li>
          <li><a class="dropdown-item" href="#">Hoodies</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Kids</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;


// Create the footer content
footer.innerHTML = `
  <div class="container">
    <div class="row">
      <!-- Women Column -->
      <div class="col-md-3 sm-1 text-center">
      <br>
        <h5>Women</h5>
        <a href="#" class="footer-inner-text">All Products</a><br>
        <a href="#" class="footer-inner-text">Dresses</a><br>
        <a href="#" class="footer-inner-text">Sarees</a><br>
        <a href="#" class="footer-inner-text">Jeans</a>
      </div>
      <!-- Men Column -->
      <div class="col-md-3 sm-1 text-center">
      <br>
        <h5>Men</h5>
        <a href="mensall.html" class="footer-inner-text">All Products</a><br>
        <a href="shirts.html" class="footer-inner-text">Shirts</a><br>
        <a href="#" class="footer-inner-text">T-shirts</a><br>
        <a href="#" class="footer-inner-text">Jeans</a>
      </div>
      <!-- Kids Column -->
      <div class="col-md-3 sm-1 text-center">
      <br>
        <h5>Kids</h5>
        <a href="kids.html" class="footer-inner-text">All Products</a>
        <!-- Add more sub-categories if needed -->
      </div>
      <!-- Links Column -->
      <div class="col-md-3 sm-1 text-center">
      <br>
        <h5>Links</h5>
        <a href="Homepage.html" class="footer-inner-text">Home</a><br>
        <a href="contact.html" class="footer-inner-text">Contact</a><br>
        <a href="login.html" class="footer-inner-text">Login</a>
      </div>
    </div>
    <hr>
    <p class="text-center">&copy; 2023 Vanilla. All rights reserved.</p>
  </div>
`;
