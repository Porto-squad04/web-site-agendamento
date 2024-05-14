document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    locale: 'pt-br',
    buttonText: {
      today: 'Hoje',   // Personalizar o texto do botão "today"
      month: 'Mês',    // Personalizar o texto do botão "month"
      week: 'Semana',  // Personalizar o texto do botão "week"
      day: 'Dia'       // Personalizar o texto do botão "day"
    },
    allDayText: 'Todo o dia', // Personalizar o texto "all-day"
    initialDate: '2023-01-12',
    // inicialDate: '2023-10-12',
    navLinks: true, // pode clicar nos nomes dos dias/semanas para navegar pelas visualizações
    selectable: true,
    selectMirror: true,
    editable: true,
    dayMaxEvents: true, // permite o link "mais" quando muitos eventos
    events: [
      
    ]
  });

  calendar.render();
});
