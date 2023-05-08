import {habits} from './data.js'

const currentDate = document.getElementById('current-date')
const addHabitModal = document.getElementById('add-habit-modal')
const customHabitText = document.getElementById('custom-habit-text')
const habitPicker = document.getElementById('habit-picker')


// Toma los names del array habit y los renderiza como botones

 function renderHabitButtons(){
    
    for (let habit of habits) {
        habitPicker.innerHTML += `
        <button class="picker" id="picker-${habit.id}" data-button="${habit.name}">${habit.name}</button>     `       
    }
        habitPicker.innerHTML += `
        <button class="picker custom-picker" id="add-habit-btn">custom habit</button> ` 
 }

renderHabitButtons()

// Click en habit picker, se agrega a la lista

habitPicker.addEventListener('click', function(e){
    if ((e.target.dataset.button)){
    renderSelectedHabit(e.target.dataset.button)
    }})


function renderSelectedHabit(habitName){
    const targetObject = habits.filter(function(target){
        return target.name === habitName
    })[0]
        // document.getElementById("empty-repository").display.style = "none"
        document.getElementById("habit-repository").innerHTML += `
            <div class="habit-container">
            <p class="habit-text">${targetObject.name}
            <button type="button" id="habit-btn1">Pending</button>
        </div>
        `
}


// Gets current date

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let user = "Nacho"

currentDate.innerHTML = `Hi ${user}! Today is ${day}-${month} <br>
                        Day 4 of week 5
`;

// PENDIENTE switch daily habit to complete / pending

// habitBtn1.addEventListener('click', function(){
//     habitBtn1.style.backgroundColor = '#84ab4e';
//     habitBtn1.textContent = 'Done!';

//    })

// habitBtn1.addEventListener('dblclick', function(){
//     habitBtn1.style.backgroundColor = '#AF3E4D'
//     habitBtn1.textContent = 'Pending'



// Show custom habit modal, hide rest
document.getElementById("add-habit-btn").addEventListener('click', function(){
    addHabitModal.style.display = 'block'
    const allMain = document.getElementsByClassName('main')
    for (let all of allMain){
        all.style.display = "none"
    }
})

submitCustomHabitBtn.addEventListener('click', function(){
    let customInput = document.getElementById('custom-habit-input').value
    console.log(customInput)
    addHabitModal.style.display = 'none'
    document.getElementById('custom-habit').style.display = 'flex'
    customHabitText.innerHTML = `${customInput} >>`
    addHabitBtn.style.display = 'none' 
    const allMain = document.getElementsByClassName('main')
    for (let all of allMain){
        all.style.display = "block"
    }
})

