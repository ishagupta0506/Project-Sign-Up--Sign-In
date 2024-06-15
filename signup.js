var sun= document.getElementById("sun")
var moon= document.getElementById("moon")
var body= document.getElementsByTagName("body")[0]

function darkMode(){
   sun.style.display="none"
    moon.style.display="block"
    body.classList.toggle("body-dark")
  
}

function lightMode(){
    sun.style.display="block"
    moon.style.display="none"
    body.classList.toggle("body-dark")
    }