"use strict";

let text = document.querySelector("#cooltext").textContent;


window.addEventListener("DOMContentLoaded", start);

function start() {
    document.querySelector("#cooltext").textContent = "";

    const arr = text.split("");
    console.log(arr);
    arr.forEach((elm)=>{
        const span = document.createElement("span");
        let character = document.createTextNode(elm);
        span.appendChild(character);
        span.style.opacity = 0;
        document.querySelector("#cooltext").appendChild(span);
        
        console.log(elm);
    });

    startAnimation();
    
}

function startAnimation() {
    console.log("startAnimation");


    document.querySelectorAll("span").forEach((elm, i)=>{
        if (elm.textContent === " ") {
            elm.innerHTML= "&nbsp" ;
        }
                console.log(i);
                 elm.classList.add("ani");
                elm.style.animationDelay = `${i/70}s`;
            });
};


