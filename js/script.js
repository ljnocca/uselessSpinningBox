var KEYCODES = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var boxEl = document.getElementsByClassName("side")

var boxState = {
  speed: 100,
  top: 0,
  left: 0
}

var moveBox = function(eventObject) { 
  if (eventObject.keyCode === KEYCODES.up) {
    boxState.top -= boxState.speed
    boxEl.style.top = boxState.top + 'px'
  }  
  if (eventObject.keyCode === KEYCODES.down) {
    boxState.top += boxState.speed
    boxEl.style.top = boxState.top + 'px'
  }  
  if (eventObject.keyCode === KEYCODES.left) {
    boxState.left -= boxState.speed
    boxEl.style.left = boxState.left + 'px'
  }  
  if (eventObject.keyCode === KEYCODES.right) {
    boxState.left += boxState.speed
    boxEl.style.left = boxState.left + 'px'
  }
}

window.addEventListener('keydown', moveBox)