//preloader logic
let loader = document.getElementById("preloader");
//window.addEventListener("load", function(){
window.onload = () => {
    loader.style.display = "none";
    loader.remove();
};

let imgbase = document.querySelector(".img-box");
let imgwrap = document.querySelector(".img-wrap");
let wrap = document.getElementById("wrap");
let arrowline = document.getElementById("arrow-span")

wrap.style.height = imgbase.offsetHeight + "px";

imgbase.onmousemove = function(elem){
    let boxwidth = (elem.pageX - imgbase.offsetLeft) + "px";
    imgwrap.style.width = boxwidth;
    arrowline.style.left = boxwidth;

}