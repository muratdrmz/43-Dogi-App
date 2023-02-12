const imgContainer=document.getElementById('dogImg');
const button=document.getElementById('button');
const url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener('click',getNewImg)

 function getNewImg(){
//  const imgEl = document.createElement("img");
//  imgEl.classList.add("img");
//  imgContainer.appendChild(imgEl);
  fetch(url)
   .then(response => response.json())
   .then(data => data.message)
   .then(url=>
    // imgEl.src =url,
    imgContainer.innerHTML=`<img src="${url}" alt="img">`
    );
}

// fetch(url)
// .then(response=>response.json())
// .then(data=>data.message)
// .then(url=>console.log(url))


// create element dersen resimler sürekli eklenir ama ınner html dedinmi konteyner içindeki tek ımg nin url si değişir