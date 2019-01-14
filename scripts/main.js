var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lovely.jpg') {
      myImage.setAttribute ('src','images/eclipse.jpg');
    } else {
      myImage.setAttribute ('src','images/lovely.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is my first webpage, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'This if my first webpage, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
/*
this is a comment
*/
/// This is also a comment
/* basic multiply function = function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }
  */
 /* basic event function that happens on click
 document.querySelector('html').onclick = function() {};
 */
