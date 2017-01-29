var ohButton = document.getElementById("oh")
var tyButton = document.getElementById("ty")
var byeButton = document.getElementById("bye")

ohButton.addEventListener('click', function() {
  document.getElementById("OH").play()
})

tyButton.addEventListener('click', function() {
  document.getElementById("TY").play()
})

byeButton.addEventListener('click', function() {
  document.getElementById("BYE").play()
})
