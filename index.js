const habitBtn1 = document.getElementById('habit-btn1')
const switchBtn2 = document.getElementById('switch-btn2')
const switchBtn3 = document.getElementById('switch-btn3')
const switchBtnCustom = document.getElementById('switch-btn-custom')
const currentDate = document.getElementById('current-date')
const addHabitBtn = document.getElementById('add-habit-btn')
const addHabitModal = document.getElementById('add-habit-modal')
const submitCustomHabitBtn = document.getElementById('submit-custom-habit-btn')
const customHabitText = document.getElementById('custom-habit-text')


habitBtn1.addEventListener('click', function(){
    habitBtn1.style.backgroundColor = '#84ab4e';
    habitBtn1.textContent = 'Done!'
   })

habitBtn1.addEventListener('dblclick', function(){
    habitBtn1.style.backgroundColor = '#AF3E4D'
    habitBtn1.textContent = 'Pending'
})

switchBtn2.addEventListener('click', function(){
    switchBtn2.style.backgroundColor = '#84ab4e';
    switchBtn2.textContent = 'Done!'
   })

switchBtn2.addEventListener('dblclick', function(){
   switchBtn2.style.backgroundColor = '#AF3E4D'
    switchBtn2.textContent = 'Pending'
})

switchBtn3.addEventListener('click', function(){
    switchBtn3.style.backgroundColor = '#84ab4e';
    switchBtn3.textContent = 'Done!'
   })

switchBtn3.addEventListener('dblclick', function(){
    switchBtn3.style.backgroundColor = '#AF3E4D'
    switchBtn3.textContent = 'Pending'
})

switchBtnCustom.addEventListener('click', function(){
    switchBtnCustom.style.backgroundColor = '#84ab4e';
    switchBtnCustom.textContent = 'Done!'
   })

switchBtnCustom.addEventListener('dblclick', function(){
    switchBtnCustom.style.backgroundColor = '#AF3E4D'
    switchBtnCustom.textContent = 'Pending'
})

addHabitBtn.addEventListener('click', function(){
    addHabitModal.style.display = 'block'
})

submitCustomHabitBtn.addEventListener('click', function(){
    let customInput = document.getElementById('custom-habit-input').value
    console.log(customInput)
    addHabitModal.style.display = 'none'
    document.getElementById('custom-habit').style.display = 'flex'
    customHabitText.innerHTML = `${customInput} >>`
    addHabitBtn.style.display = 'none' 
})

// Get current date

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

currentDate.textContent = `Hi Nacho! Today is ${day}-${month}`;
