// Variables que calculan scores, dias y semanas
let dailyScore = 0
let weekCount = 35 // hardcoded por ahora
let dailyCompleted = 0


// Toma y renderiza la fecha de hoy

const user = "Nacho"

const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

let date = new Date()
let currentDay = date.getDate();
let month = meses[date.getMonth()]; // Obtener el nombre del mes en español
let year = date.getFullYear();

const greeting = document.getElementById('salute')
greeting.innerHTML = `
  <h1>Dale ${user}!</h1>
  <p class="fecha-hoy">Hoy es ${currentDay} de ${month}</p>
  <p class="semana-hoy">Estas en la semana #${weekCount} de tu nueva vida</p>  
  `;

// Cambia color al clickear boton y agrega kudos

let actionButtons = document.querySelectorAll('button');
const kudos = ["🎉 genial! 🎉", "🤗 ahhh que bien!! 🤗", '🏆 IM PE CA BLE 🏆', "💫 maravilloso! 💫"]

actionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Guardar el texto original del botón
      let originalText = button.innerText;
      
    // Seleccionar un elemento aleatorio del array kudos
    let randomIndex = Math.floor(Math.random() * kudos.length);
    let randomKudo = kudos[randomIndex];

    // Cambiar el texto del botón al kudo aleatorio
    button.innerText = randomKudo;
      
      // Cambiar el color de fondo del botón
      button.style.backgroundColor = '#478559';
  
      // Después de 3 segundos, volver al texto original
      setTimeout(function() {
        button.innerText = originalText;
      }, 1000);
      
      // Suma un punto por habito cumplido y recalcula dailyCompleted
      dailyScore++
      dailyCompleted = Math.round((dailyScore * 100) / 7)

      //Recalcula progreso diario y semanal
      getProgress()

      // Deshabilita boton
      button.disabled = true;
      
    });
  });



  // Logica progress

  function getProgress(){

    let weeklyCompleted = Math.round((dailyScore * 100) / 49)

    const testDiv = document.getElementById('test-div')
    testDiv.innerHTML = 
    `
    <div class="father">
      <h3>Semana al</h3>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${weeklyCompleted}%; background-color: #478559">
          <p style="color: #161748; font-weight: bold">${weeklyCompleted}%</p>
        </div>
      </div>
    </div>

    <div class="father">
      <h3>Dia al</h3>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${dailyCompleted}%; background-color: #478559">
          <p style="color: #161748; font-weight: bold">${dailyCompleted}%</p>
        </div>
      </div>
    `

  }

  getProgress()