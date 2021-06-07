function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

var clicked = false;

function toggle(){
    if(!clicked){
        clicked = true;
        document.getElementById("language-button").innerHTML = "EN";
        document.getElementById("home").innerHTML = "Дома";
        document.getElementById("food").innerHTML = "Храна";
        document.getElementById("drinks").innerHTML = "Пијалоци";
        document.getElementById("about-us").innerHTML = "За Нас";
        
    }else{
        clicked=false;
        document.getElementById("language-button").innerHTML = "MKD";
        document.getElementById("home").innerHTML = "Home";
        document.getElementById("food").innerHTML = "Food";
        document.getElementById("drinks").innerHTML = "Drinks";
        document.getElementById("about-us").innerHTML = "About Us";
        
    }

}