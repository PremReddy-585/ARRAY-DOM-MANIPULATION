let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";
let containerElement = document.getElementById("mycontainer");
containerElement.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = "change technologies";
btnElement.onclick = function(){
  h1Element.textContent = "4.0 Technologies";
  h1Element.classList.add("heading");
 }
containerElement.appendChild(btnElement);
