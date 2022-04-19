// hamburger menu

let hamburger = document.querySelector(".navigation__hamburger");
let navContent = document.querySelector(".navigation__content");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navContent.classList.toggle("active");
});

// navigation hiding (scroll down) and showing (scroll up) 

let lastScrollTop = window.scrollY,
    navbar = document.querySelector('[data-navigation]');
    window.addEventListener('scroll', function() {
        if (navContent.classList.contains("active") && hamburger.classList.contains("active")){
            return
        }
        else {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbar.style.top = "-125px";
                
            }
            else {
                navbar.style.top = "0";
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
  
});
