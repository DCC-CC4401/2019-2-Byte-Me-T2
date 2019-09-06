document.addEventListener('DOMContentLoaded', function() {
  var Calendar = FullCalendar.Calendar;
  var Draggable = FullCalendarInteraction.Draggable;

  var initialLocaleCode = 'es';
  var localeSelectorEl = document.getElementById('locale-selector');

  var containerEl = document.getElementById('external-events-list');
  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText.trim()
      }
    }
  });

  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'list', 'interaction' ],
    header: {
      left: 'prev,next, var Draggable = FullCalendarInteraction.Draggable today',
      center: 'title',
      right: 'timeGridWeek,dayGridMonth,timeGridDay,listWeek'
    },
    defaultDate: '2019-08-12',

    /* ---------- Enable Features ---------- */
    locale: initialLocaleCode,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    droppable: true,
    eventLimit: true, // allow "more" link when too many events

    /* ---------- events ---------- */
    events: [
      {
        title: 'Tarea Ing. de Software',
        start: '2019-08-01',
      },
      {
        title: 'Tarea Lenguajes',
        start: '2019-08-07',
        end: '2019-08-10'
      },
      {
        groupId: 999,
        title: 'Estudiar Lenguajes',
        start: '2019-08-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Estudiar Arqui',
        start: '2019-08-16T16:00:00'
      },
      {
        title: 'Charla IA',
        start: '2019-08-11',
        end: '2019-08-13'
      },
      {
        title: 'Reunión Byte Me',
        start: '2019-08-12T10:30:00',
        end: '2019-08-12T12:30:00'
      },
      {
        title: 'Almuerzo',
        start: '2019-08-12T12:00:00'
      },
      {
        title: 'Reunión Seminario de Innovación',
        start: '2019-08-12T14:30:00'
      },
      {
        title: 'Salida con amigos',
        start: '2019-08-12T17:30:00'
      },
      {
        title: 'Tomar Once',
        start: '2019-08-12T20:00:00'
      },
      {
        title: 'Cumple JP',
        start: '2019-08-13T07:00:00'
      }
    ],

    /* ---------- Features Functions ---------- */


  });

  calendar.render();

  // build the locale selector's options
  calendar.getAvailableLocaleCodes().forEach(function(localeCode) {
    var optionEl = document.createElement('option');
    optionEl.value = localeCode;
    optionEl.selected = localeCode == initialLocaleCode;
    optionEl.innerText = localeCode;
    localeSelectorEl.appendChild(optionEl);
  });

  // when the selected option changes, dynamically change the calendar option
  localeSelectorEl.addEventListener('change', function() {
    if (this.value) {
      calendar.setOption('locale', this.value);
    }
  });

});
