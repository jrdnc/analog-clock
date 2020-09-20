const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// get current time
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

// convert current time to degrees on circle ([num sec] * [total deg] / [total sec])
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12); // make hr hand move gradually with min hand each minute
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60); // make min hand move gradually with sec hand each second
let secPosition = sec * 360 / 60;


function runClock() {
  // incrementally increase hand positions ([pos] + [num deg to display next pos])
  hrPosition = hrPosition + (1 / 120);
  minPosition = minPosition + (6 / 60);
  secPosition = secPosition + 6;

  // rotate each hand according to apporiate hand position
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// run the runClock function every 1000 milliseconds (i.e. every second); makes script dynamic
var inverval = setInterval(runClock, 1000);
