

var about1 = document.querySelector(".about1")
var ab1 = document.getElementById("ab1")
var about2 = document.querySelector(".about2")
var ab2 = document.getElementById("ab2")
var about3 = document.querySelector(".about3")
var ab3 = document.getElementById("ab3")
var content=document.querySelector(".about-content")








// ----------------------

ab1.addEventListener('click', function(event){
    event.preventDefault()
    
    about1.style.display = "block"
    about2.style.display ="none"
    about3.style.display = "none"
    // about1.style.display = "block"
})


ab2.addEventListener('click', function(event){
    event.preventDefault()
    
    about2.style.display = "block"
    about1.style.display ="none"
    about3.style.display = "none"
})
ab3.addEventListener('click', function(event){
    event.preventDefault()
    about3.style.display = "block"
    about1.style.display ="none"
    about2.style.display ="none"
})
