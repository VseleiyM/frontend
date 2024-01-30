// Controller
const PeriodController = {
    initialize: function() {
      PeriodModel.initialize();
      this.initializePlugins();
      this.bindUIActions();
    },
    initializePlugins: function() {
      // Инициализация Inputmask для произвольного периода
      $("#custom-start-date, #custom-end-date").inputmask("dd.mm.yyyy", {
        "placeholder": "дд.мм.гггг",
        insertMode: false,
        showMaskOnHover: false,
        clearIncomplete: true,
        greedy: false,
        definitions: {
          'd': {
            validator: "[0-9]",
            cardinality: 1,
            prevalidator: null
          },
          'm': {
            validator: "[0-9]",
            cardinality: 1,
            prevalidator: null
          },
          'y': {
            validator: "[0-9]",
            cardinality: 1,
            prevalidator: null
          }
        },
        onKeyPress: function (value, event, currentField, options) {
          PeriodModel.handleInputMaskKeyPress(value, event, currentField, options);
        }
      });
  
      // Инициализация datepicker для произвольного периода
      $('#custom-start-date, #custom-end-date').datepicker({
        format: 'dd.mm.yyyy',
        language: 'ru',
        autoclose: true,
        todayHighlight: true
      });
    },
    bindUIActions: function() {
      // События изменения в стандартном периоде
      $('#standard-year, #standard-period').on('change', function() {
        PeriodModel.calculateDates();
      });
  
      // Обработчики кнопок "Ок" и "Отмена"
      $('#btn-ok').click(function() {
        // Логика для кнопки "Ок"
      });
      $('#btn-cancel').click(function() {
        // Логика для кнопки "Отмена"
      });
    },
    updateDateInputs: function(startDate, endDate) {
      $('#custom-start-date').datepicker('update', startDate);
      $('#custom-end-date').datepicker('update', endDate);
    }
  };