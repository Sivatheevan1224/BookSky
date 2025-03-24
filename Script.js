//selecting popup box,popup overlay,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container
// add-book button,book-title-input,book-author-input,book-description-input
var container= document.querySelector(".container")
var addbook = document.getElementById("add-book")
var title = document.getElementById("book-title-input")
var author = document.getElementById("book-author-input")
var description = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove()
}