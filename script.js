
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
    CardContainer.innerHTML=ihtml
})


// let str="WELCOME TO CODERWORLD";
// st=Array.from(str);
// let st2=document.getElementById('str1');
// console.log(st2)
// setInterval(function () {
// st.forEach(Element => {
//  st2.innerText = Element
//     // console.log(Element)

//   });
// }, 1000);


// My name is hero