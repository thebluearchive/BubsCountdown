
// Set the date we're counting down to
var countDownDate = new Date("Jan 17, 2025 20:00:00 UTC");

// Update the count down every 1 second
window.addEventListener('load', updateCountdown);
setInterval(updateCountdown, 1000);

function updateCountdown() {
	var now = Date.now();

	if (now >= countDownDate) {
		document.getElementById("countdown").innerHTML = "0d 0h 0m 0s";
		document.getElementById("isBubsBack").style.visibility = "visible";
		return;
	}

	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
