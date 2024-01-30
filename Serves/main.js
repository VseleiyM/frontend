// main.js

// Подключение модели
import { PeriodModel } from 'F:\GitUnity\GitHub\frontend\Serves\periodComponent\periodComponentModel.js';

// Подключение контроллера
import { PeriodController } from 'F:\GitUnity\GitHub\frontend\Serves\periodComponent\periodComponentController.js';

// Инициализация модели и контроллера
$(document).ready(function() {
  PeriodModel.initialize();
  PeriodController.initialize();
});