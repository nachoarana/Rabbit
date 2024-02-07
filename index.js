// Variables calculo dias y semanas
let dailyScore = 0
let weekCount = 35 // hardcoded por ahora
let dailyCompleted = 0

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
  
      // Después de 3 segundos, volver al texto original y al color original
      setTimeout(function() {
        button.innerText = originalText;
      }, 1000);

      
      // Suma un punto por habito cumplido y recalcula dailyCompleted
      dailyScore++
      dailyCompleted = Math.round((dailyScore * 100) / 7)

      //Recalcula progresos
      getProgress()

      // Deshabilita boton
      button.disabled = true;
      
    });
  });

// Toma y renderiza la fecha de hoy

let user = "Nacho"

const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

let date = new Date()
let day = date.getDate();
let month = meses[date.getMonth()]; // Obtener el nombre del mes en español
let year = date.getFullYear();

const greeting = document.getElementById('salute')
greeting.innerHTML = `
  <h1>Hola ${user}!</h1>
  <p class="fecha-hoy">Hoy es ${day} de ${month}</p>
  <p class="semana-hoy">Semana #${weekCount}</p>  
  `;

  // Logica progress

  function getProgress(){

    let progresoSemanal = Math.round((dailyScore * 100) / 49)
    const progressWeek = document.getElementById('progress-week')
    progressWeek.innerHTML =
      `
      <p class='progress-top'>Semana al ${progresoSemanal}% </p>  
    `

    const progressDay = document.getElementById('progress-day')
    progressDay.innerHTML =
      `
      <p class='progress-top'>Dia al ${dailyCompleted}% </p>  
    `

  }

  getProgress()