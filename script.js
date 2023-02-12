const imgContainer=document.getElementById('dogImg');
const button=document.getElementById('button');
const url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener('click',getNewImg)

async function getNewImg(){
 const imgEl = document.createElement("img");
 imgEl.classList.add("img");
 imgContainer.appendChild(imgEl);
 await fetch(url)
   .then((response) => response.json())
   .then((json) => imgEl.src = json.message);
}
