
//Returns first element that matches CSS selector.
document.querySelector(".footnote"); //DO NOTT USE BRACKET

//returns all elements that match a CSS selector or a group of CSS selectors & for loop
document.querySelectorAll(".footnote")

//change html + get value
document.getElementById("preview").innerHTML = 
document.getElementById("preview").innerHeight.textContent = 
document.getElementsByClassName("test")[0].innerHTML = //change html of first item with class
document.getElementById("result").value

document.getElementsByClassName('nav-links').click( function (){})
//Add + remove Class
document.getElementsByClassName('.nav-links').className += "nameOfClass"
document.getElementsByClassName('.nav-links').classList.remove('underlineNav');

//Return Parent
document.getElementsByClassName("test")[0].parentNode;
document.getElementsByClassName("test")[0].parentNode.className +=

//find the first <p> element, and change its text to "Hello".
document.getElementsByTagName("p")[0].innerHTML="Hello"

//Change the text color
document.getElementById("demo").style.color = "red";
  //.style.fontSize = "40px";
  //.style.display = "none"

//Use the eventListener to assign an onclick event to the <button> element.
document.getElementById("demo").addEventListener("click", myFunction);


// ADD class
theElement.className += 'errorMsg';
//ADD ID
theElement.id = 'errorMsg';

//remove class
theElement.classList.remove('class');

//GET PARENT
//.parentNode

//EACH
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  // ✅ Remove class from each element
  box.classList.remove('big');

  // ✅ Add class to each element
  box.classList.add('small');
});


