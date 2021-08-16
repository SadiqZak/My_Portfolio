const btnHamburger = document.querySelector("#btnHamburger");
const overLay = document.querySelector("#overlay");
const headerMenu = document.querySelector("#menu");
const body = document.querySelector("body");

btnHamburger.addEventListener("click",function(){

    if( btnHamburger.classList.contains("open","noscroll","dissapear")){
        btnHamburger.classList.remove("open")
        overLay.classList.remove("overlay")
        headerMenu.classList.add("dissapear")
        body.classList.remove("noscroll")
       
    }
    else{
        btnHamburger.classList.add("open")
        overLay.classList.add("overlay")
        headerMenu.classList.remove("dissapear")
        body.classList.add("noscroll")
        
    }
    
});

