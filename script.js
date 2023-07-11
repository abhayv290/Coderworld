
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  console.log(contest)
  ihtml = ""
  for (item in contest) {
    console.log(contest[item])
    ihtml += `
    <div class="card" style="width: 18rem; margin: 5px">
    <img src="Coderworld.jpg" alt="coderworld">
    
    <div class="card-body">
      <h5 class="card-title">${contest[item].name}</h5>
      <h4> <a href="${contest[item].url}">${contest[item].site}</a> </h4>
      <p class="card-text">${contest[item].start_time}</p>
      <p class="card-text">${contest[item].end_time}</p>
      
      <p class="card-text">${contest[item].duration} seconds</p>
      <p class="card-text">${contest[item].status}</p>
      <a href="${contest[item].url}" class="btn btn-primary">Visit Page</a>
    </div>
  </div>
  `
  }
  CardContainer.innerHTML = ihtml
})


const text = "Here you can find all your need on coding contests and hackethons at one place ,So why wait let just dive into coding"; 

let index = 0;
let timer;

function typeEffect() {
  const typewriterElement = document.getElementById("typewriter");
 
  typewriterElement.textContent = text.slice(0, index);

  index++;

  if (index > text.length) {
    clearInterval(timer);
    setTimeout(() => {
      index = 0;
      timer = setInterval(typeEffect, 1000); 
    }, 2000); 
  }
}
timer = setInterval(typeEffect, 100); 


const text1="CODERWORLD"
let index1 = 0;
let timer1;

function typeEffect1() {
  const typewriterElement = document.getElementById("str1");
 
  typewriterElement.innerHTML ='WELCOME TO '+ text1.slice(0, index1);

  index1++;

  if (index1 > text1.length) {
    clearInterval(timer1);
    setTimeout(() => {
      index1 = 0;
      timer1 = setInterval(typeEffect1, 500); 
    }, 2000); 
  }
}
timer1 = setInterval(typeEffect1, 100); 



