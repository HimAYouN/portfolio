// ************CODE FOR TOP ANIMATION BAR***********//
const progressBar = document.querySelector("#progressBar");
const section = document.querySelector("section");

const animateProgressBar = () => {
    let scrollDistance = - section.getBoundingClientRect().top;
    let progressWidth = 
        (scrollDistance 
            (section.getBoundingClientRect().height -
                document.documentElement.clientHeight))
                * 100;
    //console.log(progressWidth)
    let value = Math.floor(progressWidth);
    
    progressBar.style.width = value + "%";

    //console.log("scrollDistance "+ scrollDistance)
    //console.log("progressWidth "+ progressWidth)
    //console.log("documentElement "+ document.documentElement.clientHeight)
    //console.log("Height "+ section.getBoundingClientRect().height)
}

window.addEventListener("scroll", animateProgressBar)
var btn = document.querySelector("#colorinput");
var box = document.querySelector(".box");
box.addEventListener("mouseover", function(){box.style.backgroundColor = "blue"})
box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "red"})

function colorChange(){
    var colorInp = document.querySelector("#colorinput").value;
    document.querySelector("body").style.backgroundColor = colorInp;
}