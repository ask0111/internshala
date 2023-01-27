
window.addEventListener('scroll', () => {
   
    if (window.innerWidth < 650) {
        return;
    }
    var scrolly = window.scrollY;
    var fix = document.querySelector('.parts');

    if (scrolly > 11000) {
        fix.style.width = '0px';

    } else {
        fix.style.position = scrolly > 250 ? 'fixed' : 'static';
        fix.style.width = '20px';
    }
})


var htmlNavbarCode = `<div class="nav-img navbar-main">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgm7FhF6B_tfph4ncuMGaibpHR9rHPIUMiw&usqp=CAU"
    alt="">
</div>
<div class="navbar-main">
<a href="./index.html" class="home">Home</a>
<a href="./about.html" class="about">Contact Us</a>

</div>
<div class="nav-img navbar-main">

</div>`

var htmlFooterCode = `<div class="foot">
<div class="store">
    <dir>
        <img src="./google.png" alt="google play">
    </dir>
    <dir>
        <img src="./app.png" alt="App Store">

    </dir>
</div>
<div class="product">
    <h4><b>PRODUCT</b></h4>
    <p href="">Pricing</p>
    <p href="">Product tour</p>
    <p href="">See what's new</p>
    <h4>

        <b>FEATURES</b>
    </h4>
    <p>Auto scheduling</p>
    <p>Fair workweek compliance</p>
    <p>Break planning compliance</p>
    <p>Demand forecasting</p>
    <p>Integrations</p>
</div>
<div class="INDUSTRIES SERVED">
    <h4>
        <b>INDUSTRIES SERVED</b>

    </h4>
    <p>All industries</p>
    <p>Agriculture</p>
    <p>Call center</p>
    <p>Charity</p>
    <p>Construction & Engineering</p>
    <h4>
    <b>BUSINESS SIZE</b>
    </h4>
    <p>Enterprise</p>
    <p>Small or medium-sized</p>
</div>
<div class="RESOURCES">
    <h4>

        <b>RESOURCES</b>
    </h4>
    <p>Blog</p>
    <p>Customer stories</p>
    <p>Customer reviews</p>
    <p>Deputy insights</p>
    <p>Deputy reviews</p>
    <h4>
        <b>SUPPORT</b>
    </h4>
    <p>Deputy training</p>
    <p>Deputy API</p>
    <p>GDPR</p>
    <p>Help center</p>
</div>
<div class="COMPANY">
    <div>

        <h4>
            
        <b>COMPANY</b>
    </h4>
    <p>About us</p>
    <p>Careers</p>
    <p>Partners</p>
    <p>Press</p>
    <h4>
        
        <b>CONTACT US</b>
    </h4>
    <p>☎ 1-855-633-7889</p>
    <p>Deputy USA</p>
    <p>149 New Montgomery St, 4th Floor, Suite 563
        San Francisco, United States CA 94105
    </p>
    
</div>
    <div class="logo">
        <div class="facebook social">
            <img  src="./gace.png" alt="">
        </div>
        <div class="instagram social">
            <img src="./instagram.jpg" alt="">
        </div>
        <div class="twitter social">
            <img src="./twitter.png" alt="">
        </div>
        <div class="linkdine social">
            <img src="./linkdin.png" alt="">
        </div>
        <div class="youtub social">
            <img src="./youtub.png" alt="">
        </div>
    </div>
</div>
</div>`

document.querySelector('.navbar').innerHTML = htmlNavbarCode;
document.querySelector('footer').innerHTML = htmlFooterCode;
