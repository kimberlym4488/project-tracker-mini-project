var timerEl = document.querySelector(".timer");

var today=moment();
timerEl.innerHTML=today.format("[Current date and time] MMM Do, YYYY [at] h:mm:ss a[.]");

