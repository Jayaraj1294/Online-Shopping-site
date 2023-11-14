const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="...">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="active"><a href="#home" class="link">Home</a></li>
    <li class="link-item"><a href="#categories" class="link">Categories</a></li>
    <li class="link-item"><a href="#product" class="link">Best Selling</a></li>
    <li class="link-item"><a href="#footer" class="link">Contact Us</a></li>
</ul>
   ` ;
}

createNav();