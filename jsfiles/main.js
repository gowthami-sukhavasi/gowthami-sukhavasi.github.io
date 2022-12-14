/*const parallax = document.getElementById("parallax");*/
const nav = document.getElementById("nav");

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;  /*pageYoffset and scrollTop are the same here*/
    /*parallax.style.backgroundPositionY = offset*0.7+"px"; */

    let x = document.body.scrollTop;
    let y = document.documentElement.scrollTop;

    if(x>580 || y>580){
        nav.className = "navbar navbar-expand-md navbar-dark fixed-top bg-dark";
    }
    else{
        nav.className = "navbar navbar-expand-md navbar-dark fixed-top bg-transparent";
    }
})