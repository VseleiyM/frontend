// Model
const PeriodModel = {
    year: null,
    period: null,
    customStartDate: null,
    customEndDate: null,
    initialize: function() {
      // Начальная инициализация данных, если требуется
    },
    calculateDates: function() {
      this.year = $('#standard-year').val();
      this.period = $('#standard-period').val();
      // Логика расчета дат на основе year и period
      // Предполагается, что функция обновления дат также здесь.
      // После расчета дат, вызываем контроллер для обновления ввода пользовательского интерфейса
      PeriodController.updateDateInputs(this.customStartDate, this.customEndDate);
    },
    handleInputMaskKeyPress: function(value, event, currentField, options) {
      // Логика автоматического добавления точек при вводе
    }
  };
  
  $(document).ready(function() {
    PeriodController.initialize();
  });