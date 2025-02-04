// script.js
const monthYear = document.getElementById('monthYear');
const datesContainer = document.getElementById('dates');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const toggleCalendarButton = document.getElementById('toggleCalendar');
const calendar = document.querySelector('.calendar');
const selectedDateContainer = document.getElementById('selectedDateContainer');
const selectedDateElement = document.getElementById('selectedDate');

let currentDate = new Date();

// Función para renderizar el calendario
function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Mostrar el mes y año actual
  monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

  // Limpiar el contenedor de fechas
  datesContainer.innerHTML = '';

  // Obtener el primer día del mes y el último día del mes
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Obtener el día de la semana del primer día (0 = Domingo, 1 = Lunes, etc.)
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Ajuste para empezar en Lunes

  // Agregar días vacíos al inicio si es necesario
  for (let i = 0; i < startDay; i++) {
    datesContainer.appendChild(document.createElement('div'));
  }

  // Agregar los días del mes
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = day;
    dateElement.addEventListener('click', () => selectDate(day, month, year)); // Evento al hacer clic en una fecha
    datesContainer.appendChild(dateElement);
  }
}

// Función para seleccionar una fecha
function selectDate(day, month, year) {
  const selectedDate = new Date(year, month, day);
  const formattedDate = selectedDate.toLocaleDateString('es-ES', { // Formato de fecha en español
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  // Mostrar la fecha seleccionada
  selectedDateElement.textContent = formattedDate;
  selectedDateContainer.classList.remove('hidden'); // Mostrar el contenedor de la fecha seleccionada

  // Ocultar el calendario
  calendar.classList.add('hidden');
  toggleCalendarButton.textContent = 'Mostrar Calendario';
}

// Cambiar al mes anterior
prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

// Cambiar al siguiente mes
nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Mostrar u ocultar el calendario
toggleCalendarButton.addEventListener('click', () => {
  calendar.classList.toggle('hidden');
  toggleCalendarButton.textContent = calendar.classList.contains('hidden') ? 'Mostrar Calendario' : 'Ocultar Calendario';
});

// Renderizar el calendario al cargar la página
renderCalendar();