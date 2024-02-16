let convert = document.getElementById("convertid")
let length = document.getElementById("length-id")
let volume = document.getElementById("volume-id")
let mass = document.getElementById("mass-id")

convert.addEventListener("click", function(){
    let val = document.querySelector('input').value;
    let meters = (val/3.281).toFixed(3)
    let feet= (val*3.281).toFixed(3)
    let liters=(val/0.264).toFixed(3)
    let gallons=(val*0.264).toFixed(3)
    let kilos=(val/2.204).toFixed(3)
    let pounds=(val*2.2049).toFixed(3)
    
    length.textContent= `${val} meters = ${feet} feet | ${val} feet = ${meters} meters`
    volume.textContent= `${val} liters = ${gallons} gallons | ${val} gallons = ${liters} liters`
    mass.textContent= `${val} kilos = ${pounds} pounds | ${val} pounds = ${kilos} kilos`
    
    
    
})
