// Defining text characters for the empty and full hearts for you to use later.
function globalHideError(){
  console.log(document.querySelector("#modal").hidden = true)
  }
  globalHideError()

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let hearts = document.querySelectorAll(".like-glyph");
console.log(hearts);

let oneHeart = function () {
  for (let heart of hearts) {
  console.log(heart.textContent)
  return heart.textContent
} 
  return hearts.textContent
} 
// console.log("oneHeart:", oneHeart());

oneHeart().addEventListener("click", heartFill)

function heartFill(){
  // eachHeart();
  document.querySelector(".like-glyph").textContent = FULL_HEART
}

//heart.addEventListener("click", heartFill)
//

// let heart = hearts.forEach(element => {
//   console.log(element)
// });




// function clickHeart (){
//   heart.addEventListener("click", function(e){
//     console.log('hi')
//     return console.log(e.target.textContent)
//   })
// }
// clickHeart()








  
// let eachHeart = function () {
//   for (let heart of hearts) {
//   heart.addEventListener("click", heartFill)
//   return heart.textContent
// } 
//   return hearts.textContent
// } 
// console.log("oneHeart:", eachHeart());



// const list = document.querySelectorAll('input[type=checkbox]');
// for (let checkbox of list) {
//   checkbox.checked = true;
// }


// let eachHeart = function heartLoop (){
//   hearts.forEach(heart => {
//     console.log(heart)
//     return heart.textContent
//   });
// }


// hearts.addEventListener("click", heartFill)



// function heartFill(){
//   let eachHeart = document.querySelector(".like-glyph")
//   return eachHeart
  // document.querySelector(".like-glyph").textContent = FULL_HEART
  // document.querySelector(".like-glyph").className = "activated-heart"
// }


// hearts.addEventListener("click", function(e){
//   function clickHeart(){
//     mimicServerCall()
//     .then(() => {
//       heartFill();;
//     })
//     .catch(() => {
//       unHideError()
//     })
//   }})



//hide 






// hearts.addEventListener("click", function(e){
// function clickHeart(){
//   mimicServerCall()
//   .then(() => {
//     heartFill();
//     return e.target;

//   })
//   .catch(() => {
//     unHideError()
//   })
// }})

// error functions
function unHideError(){
  document.querySelector("#modal").hidden = false;
  document.querySelector("#modal-message").textContent = "Random server error. Try again."
  setTimeout(() => {(document.querySelector("#modal").hidden = true)}, 3000)  
}


// //non-error functions
// function heartFill(){
//   e.target.textContent 
//   document.querySelector(".like-glyph").textContent = FULL_HEART
//   document.querySelector(".like-glyph").className = "activated-heart"
// }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
