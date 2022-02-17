const headingOne = document.querySelector("h1");
        
const headingTwo = document.querySelector(".heading-two");

headingOne.innerText = "Updated Hello World From JavaScript!";

headingTwo.style.color = "#134e4a";

const bodyEl = document.querySelector("body");


function updateColors() {
bodyEl.style.backgroundColor = "black";
headingOne.style.color = "red";
headingTwo.style.color = "yellow";
}