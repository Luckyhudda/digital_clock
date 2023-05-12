const time = document.querySelector('.time');
const am = document.querySelector('.am');
const pm = document.querySelector('.pm');
time.textContent = '00 : 00 : 00'


function updateTime(){
    const now = new Date();
    const day = now.getDay()
    let  hours = `${now.getHours()}`.padStart(2,0)
    const minutes = `${now.getMinutes()}`.padStart(2,0)
    const seconds = `${now.getSeconds()}`.padStart(2,0)

    if(hours >= 12){
        pm.classList.add('timeZone')
        am.classList.remove('timeZone')
    } else{
        pm.classList.remove('timeZone')
        am.classList.add('timeZone')
    }

    if(hours > 12){
       hours =  `${now.getHours() - 12}`.padStart(2,0)
    }  

    if(day === 1){
        document.querySelector('.monday').style.color = 'white'
    }
    if(day === 2){
        document.querySelector('.tuesday').style.color = 'white'
    }
    if(day ===3){
        document.querySelector('.wednesday').style.color = 'white'
    }
    if(day === 4){
        document.querySelector('.thursday').style.color = 'white'
    }
    if(day === 5){
        document.querySelector('.friday').style.color = 'white'
    }
    if(day === 6){
        document.querySelector('.saturday').style.color = 'white'
    }
    if(day === 7){
        document.querySelector('.sunday').style.color = 'white'
    }

    time.textContent = `${hours} : ${minutes} : ${seconds}`
    
}
setInterval(updateTime, 1000);





