function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var hoursString = hours.toString().padStart(2, '0');
    var minutesString = minutes.toString().padStart(2, '0');
    var secondsString = seconds.toString().padStart(2, '0');
  
    document.getElementById("hours").textContent = hoursString;
    document.getElementById("minutes").textContent = minutesString;
    document.getElementById("seconds").textContent = secondsString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  