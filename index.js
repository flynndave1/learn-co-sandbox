document.addEventListener("DOMContentLoaded" , function(){

document.querySelector('#mainP').innerHTML= " New js text file";

mainP.innerHTML = "This is new text..!!";


for (var i = 0 ; i < 12 ; i++ ) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = 'I am new div ${i}';
  let mainTag = document.querySelector('#mainP');
  mainTag.appendChild(newDiv);
}
}
)