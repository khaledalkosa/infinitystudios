function navchange() {
    var navbarchange = document.getElementById('navbarchange')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 100) {
        navbarchange.classList.remove('nav-change');
    }
    else {
        navbarchange.classList.add('nav-change');
    }
    
}

window.addEventListener('scroll', navchange);

// 

function con1description() {
    var con1describtion = document.getElementById('con1describtion')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 450) {
        con1describtion.classList.remove('con-1-description-js');
    }
    else {
        con1describtion.classList.add('con-1-description-js');
    }
    
}

window.addEventListener('scroll', con1description);

function con1descriptionresponsive() {
    var con1describtion = document.getElementById('con1describtion')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 100) {
        con1describtion.classList.remove('con-1-description-js-responsive');
    }
    else {
        con1describtion.classList.add('con-1-description-js-responsive');
    }
    
}

window.addEventListener('scroll', con1descriptionresponsive);

// 

function con2describtion() {
    var con2describtion = document.getElementById('con2describtion')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1000) {
        con2describtion.classList.remove('con-2-description-js');
    }
    else {
        con2describtion.classList.add('con-2-description-js');
    }
    
}

window.addEventListener('scroll', con2describtion);

function con2describtionresponsive() {
    var con2describtion = document.getElementById('con2describtion')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 420) {
        con2describtion.classList.remove('con-2-description-js-responsive');
    }
    else {
        con2describtion.classList.add('con-2-description-js-responsive');
    }
    
}

window.addEventListener('scroll', con2describtionresponsive);

// 

function con3slide1() {
    var aboutusslide = document.getElementById('aboutusslide')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1800) {
        aboutusslide.classList.remove('con-3-1-description-js');
    }
    else {
        aboutusslide.classList.add('con-3-1-description-js');
    }
    
}

window.addEventListener('scroll', con3slide1);

function con3slide1desktopresponsive() {
    var aboutusslide = document.getElementById('aboutusslide')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1300) {
        aboutusslide.classList.remove('con-3-1-description-js-desktop-responsive');
    }
    else {
        aboutusslide.classList.add('con-3-1-description-js-desktop-responsive');
    }
    
}

window.addEventListener('scroll', con3slide1desktopresponsive);

function con3slide1responsive() {
    var aboutusslide = document.getElementById('aboutusslide')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1100) {
        aboutusslide.classList.remove('con-3-1-description-js-responsive');
    }
    else {
        aboutusslide.classList.add('con-3-1-description-js-responsive');
    }
    
}

window.addEventListener('scroll', con3slide1responsive);

// 

function con3slide2() {
    var branchesslide = document.getElementById('branchesslide')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1800) {
        branchesslide.classList.remove('con-3-2-description-js');
    }
    else {
        branchesslide.classList.add('con-3-2-description-js');
    }
    
}

function con3slide2desktopresponsive() {
    var branchesslide = document.getElementById('branchesslide')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1300) {
        branchesslide.classList.remove('con-3-2-description-js-desktop-responsive');
    }
    else {
        branchesslide.classList.add('con-3-2-description-js-desktop-responsive');
    }
    
}

window.addEventListener('scroll', con3slide2desktopresponsive);

window.addEventListener('scroll', con3slide2);

function con3slide2responsive() {
    var branchesslide = document.getElementById('branchesslide')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 1100) {
        branchesslide.classList.remove('con-3-2-description-js-responsive');
    }
    else {
        branchesslide.classList.add('con-3-2-description-js-responsive');
    }
    
}

window.addEventListener('scroll', con3slide2responsive);


// 

function apppopup() {
    document.getElementById("app-popup").classList.toggle("app-popup-active");
}

                                                                                                                // SUPBAGES

function supnavchange() {
    var supbagesnavchange = document.getElementById('supbagesnavchange')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 200) {
        supbagesnavchange.classList.remove('sup-nav-change');
    }
    else {
        supbagesnavchange.classList.add('sup-nav-change');
    }
    
}

window.addEventListener('scroll', supnavchange);

// 

function suplogo() {
    var supnavigationbarh1scroll = document.getElementById('supnavigationbarh1scroll')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 200) {
        supnavigationbarh1scroll.classList.remove('sup-navigation-bar-h1-scroll');
    }
    else {
        supnavigationbarh1scroll.classList.add('sup-navigation-bar-h1-scroll');
    }
    
}

window.addEventListener('scroll', suplogo);

function supmobilelogo() {
    var supnavigationbarh1scroll2span = document.getElementById('supnavigationbarh1scroll2span')
    var scrollvalue = window.scrollY;
    if(scrollvalue < 200) {
        supnavigationbarh1scroll2span.classList.remove('sup-navigation-bar-h1-scroll-2span');
    }
    else {
        supnavigationbarh1scroll2span.classList.add('sup-navigation-bar-h1-scroll-2span');
    }
    
}

window.addEventListener('scroll', supmobilelogo);




function togglepopup1() {
    document.getElementById("popup-1").classList.toggle("active-popup");
}

function togglepopup2() {
    document.getElementById("popup-2").classList.toggle("active-popup");
}

function togglepopup3() {
    document.getElementById("popup-3").classList.toggle("active-popup");
}

function togglepopup4() {
    document.getElementById("popup-4").classList.toggle("active-popup");
}

function togglepopup5() {
    document.getElementById("popup-5").classList.toggle("active-popup");
}

function togglepopup6() {
    document.getElementById("popup-6").classList.toggle("active-popup");
}

function togglepopup7() {
    document.getElementById("popup-7").classList.toggle("active-popup");
}

function supasideapppopup() {
    document.getElementById("sup-aside-app-popup").classList.toggle("sup-aside-app-popup-active");
}

function proftoliocontactswslideup() {
    document.getElementById("proftolio-contacts-w-slideup").classList.toggle("proftolio-contacts-w-slideup");
}

function proftoliocontactswslideup2() {
    document.getElementById("proftolio-contacts-w-slideup-2").classList.toggle("proftolio-contacts-w-slideup");
}

                                                                                                                // MOBILE VERSION

function mobilenavpopup() {
    document.getElementById("mobile-nav-popup").classList.toggle("mobile-nav-popup");
}