//************Function that gets rid of preloader *//
window.addEventListener("load", ()=>{
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader-finish");
})




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



//*****************ANIMATE THE HEADING************/
const heading1 = document.querySelector(".heading1");
const heading1Txt = heading1.textContent;
const splitText= heading1Txt.split("");
heading1.textContent="";
for (let t = 0 ; t< splitText.length; t++){
    heading1.innerHTML +="<span>" + splitText[t]+"</span>"
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = heading1.querySelectorAll("span")[char];
    span.classList.add("fade")
    char++;
    if (char === splitText.length){
        complete();
        return;
    }
}


function complete(){
    clearInterval(timer);
    timer = null
}