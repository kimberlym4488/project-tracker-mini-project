var timerEl = document.querySelector(".timer");

/**
 * Updates a timer on index.html every second
 */
var timer = setInterval(function(){
    var today = moment();
    timerEl.innerHTML=today.format("[Current date and time] MMM Do, YYYY [at] h:mm:ss a[.]");
}, 1000)

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})