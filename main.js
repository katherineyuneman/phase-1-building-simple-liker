
document.getElementById("modal").hidden = true

  //function version of above
  // function globalHideError(){
  //   console.log(document.querySelector("#modal").hidden = true)
  //   }
  //   globalHideError()

 
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', event => {
    mimicServerCall()
    .then(() => {
      handleNewLike(heart);
    })
    .catch(() => {
      unHideError()
    })
  })
})

//functions

function handleNewLike(heart){
      if (heart.textContent === FULL_HEART){
        heart.textContent = EMPTY_HEART
        heart.className = "like-glyph"
      } else if (heart.textContent === EMPTY_HEART){
        heart.className = "activated-heart";
        heart.textContent = FULL_HEART;
      }
    }


function unHideError(){
      document.querySelector("#modal").hidden = false;
      document.querySelector("#modal-message").textContent = "Random server error. Try again."
      setTimeout(() => {(document.querySelector("#modal").hidden = true)}, 3000)  
    }
    



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