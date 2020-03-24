
//declare variables for each hand
let secondH = document.getElementById('second')
let minuteH = document.getElementById('minute')
let hourH = document.getElementById('hour')
//tick per second
const TPS = 6
const TPM = 0.1
const TPH = .0083
// hand position
let secondPos = 0
let minutePos = 0
let hourPos = 0

//set interval to one second for each TM function
const start = () => {
    setInterval(seconds, 1000)
    setInterval(minutes, 1000)
    setInterval(hours, 1000)
}

// rotate each hand within function using tick per second set to
const seconds = () =>{
      secondPos += TPS;
      secondH.style.transform = "rotate(" + secondPos + "deg)"

    }
const minutes = () =>{
      minutePos += TPM;
      minuteH.style.transform = "rotate(" + minutePos  + "deg)"

    }
const hours = () => {
      hourPos +=  TPH;
      hourH.style.transform = "rotate(" + hourPos + "deg)"

}


 start()
