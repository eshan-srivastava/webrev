//preloader logic
let loader = document.getElementById("preloader");
//window.addEventListener("load", function(){
window.onload = () => {
    loader.style.display = "none";
    loader.remove();
};

//logic for image slider
let imgbase = document.querySelector(".img-box");
let imgwrap = document.querySelector(".img-wrap");
let wrap = document.getElementById("wrap");
let arrowline = document.getElementById("arrow-span")

wrap.style.height = imgbase.offsetHeight + "px";

imgbase.onmousemove = function(elem){
    //formula for dynamically setting overlay image's width
    let boxwidth = (elem.pageX - imgbase.offsetLeft) + "px";
    imgwrap.style.width = boxwidth;
    arrowline.style.left = boxwidth; //for span arrow line
}

//logic for game bar
let selectorField = document.getElementById('selectfield');
let selectorText = document.getElementById('selecttext');
let list = document.getElementById("game-list");
let games = document.getElementsByClassName("game-item");
let dropArrow = document.getElementById("droparr")
let newimg = document.getElementById("fieldimg")
let gobutton = document.getElementById("gobtn");

selectorField.onclick = function(){
    list.classList.toggle("hide-list");
    dropArrow.classList.toggle('rotate');
}

for (game of games){
    game.onclick = function(){
        selectorText.innerHTML = this.textContent;
        dropArrow.classList.toggle('rotate');
        list.classList.toggle('hide-list')
        newimg.src = this.children[0].src;
    }
}