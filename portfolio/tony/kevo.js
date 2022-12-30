/*============================= typing animation ====================================*/

var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Content Creator"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/*============================== Active Elements=======================================*/

var header = document.querySelector(".nav");
const link = header.querySelectorAll(".navLink");

for(var i = 0; i < link.length; i++)
{
    link[i].addEventListener("click", function() {
        var current = document.querySelector(".active");
        current[0].className = current[0].className.replace("active","");
        this.className += "active";
    });
};