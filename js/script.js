

// var clock = setInterval(clocktiming 
//     , 1000)

//     function clocktiming(){

//         var d = new Date();
//         var gudu = d.toLocaleTimeString();
//         document.getElementById('showclock').innerHTML = gudu;

//     }

setInterval(()=>{

    const time = document.querySelector("#time")
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day_night = "AM";

    if (hours>12){
        day_night = "PM"
        hours = hours-12
    }

    if(minutes<10){
         minutes = "0" + minutes
    }
    
    time.textContent = hours + " : " + minutes + " : " + seconds + " " + day_night;

},1000)


