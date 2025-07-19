let [milliseconds , seconds , minutes , hours ] = [0,0,0,0] 
let Time = document.querySelector(".time")
let timer = null;

function stopWatch(){
    milliseconds+= 1;
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
        if( seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    

    let h;
    if (hours < 10) {
    h = "0" + hours;
    } else {
    h = hours;
    }

    let m;
    if (minutes < 10) {
    m = "0" + minutes;
    } else {
    m = minutes;
    }

    let s;
    if (seconds < 10) {
    s = "0" + seconds;
    } else {
    s = seconds;
    }

    let ml;
    if (milliseconds < 10) {
    ml = "0" + milliseconds;
    }
     else {
    ml = milliseconds;
    }

    Time.innerHTML = h + ":" + m + ":" + s + ":" + ml;

} 

function watchStart (){
  if(timer !== null){
    clearInterval(timer)
  }
  timer = setInterval(stopWatch,10);
}

function watchStop(){
  clearInterval(timer)
}

function watchReset(){
  clearInterval(timer)
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  Time.innerHTML = "00:00:00"
}
