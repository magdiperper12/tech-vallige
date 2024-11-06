window.addEventListener('scroll', function () {
    let elementToHide = document.getElementById('elementToHide');
    let header = document.getElementById("sticky-header");
    if (window.scrollY > 0) { 
        elementToHide.style.display="none";
        header.style.padding = "0px" 
    } else {
        elementToHide.style.display="block";
        header.style.padding = "40px 0px"
    }
});

window.addEventListener('scroll', function () {
    let arrow = document.getElementById('arrow');
    if (window.scrollY > 100) { 
        arrow.style.display="block";
       
    } else {
        arrow.style.display="none";
        
    }
});

let carousel = document.querySelector(".carousel"),
 next = document.querySelector(".next"),
 prev = document.querySelector(".prev");


next.addEventListener("click",()=>{
    carousel.style.transform += "translateX(-300px)";
})

prev.addEventListener("click",()=>{
    carousel.style.transform += "translateX(300px)";
})


