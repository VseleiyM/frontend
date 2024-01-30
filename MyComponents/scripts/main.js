document.querySelectorAll('th').forEach(function(th) {
  // Функция сброса всех стрелок, кроме текущего выбранного столбца
  function resetArrows(current) {
    document.querySelectorAll('th').forEach(function(header) {
      if (header !== current) {
        header.querySelector('.bi-caret-down-fill').classList.remove('hidden');
        header.querySelector('.bi-caret-up-fill').classList.add('hidden');
      }
    });
  }

  // Функция переключения стрелок для текущего выбранного столбца
  function toggleArrow(current) {
    var downArrow = current.querySelector('.bi-caret-down-fill');
    var upArrow = current.querySelector('.bi-caret-up-fill');
    downArrow.classList.toggle('hidden');
    upArrow.classList.toggle('hidden');
  }

  // Обработчик кликов для каждого заголовка
  th.addEventListener('click', function() {
    resetArrows(this); // Сбрасываем стрелки во всех столбцах
    toggleArrow(this); // Переключаем стрелку для текущего столбца
  });
});
            
            
            
            
            
            function toggleTheme() {
                var theme = document.documentElement.getAttribute('data-bs-theme');
                if (theme === 'dark') {
                    document.documentElement.setAttribute('data-bs-theme', 'light');
                } else {
                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                }
            }

            

            $(document).ready(function(){
                // Инициализация Inputmask для произвольного периода с немедленным форматированием
                $("#custom-start-date, #custom-end-date").inputmask("dd.mm.yyyy", {
                    "placeholder": "дд.мм.гггг",
                    insertMode: false,
                    showMaskOnHover: false,
                    clearIncomplete: true,
                    greedy: false, // Добавить эту опцию
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
                        // Автоматическое добавление точек при вводе
                        var matches = value.match(/(\d{2})(\d{2})?(\d{4})?/);
                        if (matches) {
                            if(matches[2]) {
                                var day_month = matches[1] + '.' + matches[2];
                                if(matches[3]) {
                                    day_month += '.' + matches[3].substr(0,2);
                                }
                                currentField.val(day_month);
                            }
                            if(matches[2] && matches[3] && matches[3].length == 2) {
                                // Добавляем последние две цифры года и обновляем поле сразу
                                var dateWithYear = value + matches[3].substr(2,2);
                                currentField.val(dateWithYear);
                            }
                        }
                    }
                });

              // Иконка календаря для открытия datepicker
              $('.bi-calendar3').click(function() {
                $('#datepicker').datepicker('show');
              });
            });
            $(document).ready(function(){
            // Инициализация datepicker для произвольного периода
            $('#custom-start-date, #custom-end-date').datepicker({
              format: 'dd.mm.yyyy',
              language: 'ru',
              autoclose: true,
              todayHighlight: true
            });

            // События изменения в стандартном периоде
            $('#standard-year').on('input', function() {
              var year = $(this).val();
              if (year.length == 4) {
                updateCustomPeriodDates(year, $('#standard-period').val());
              }
            });

            $('#standard-period').change(function() {
              var year = $('#standard-year').val();
              var period = $(this).val();
              updateCustomPeriodDates(year, period);
            });

            // Функция обновляет даты в произвольном периоде
            function updateCustomPeriodDates(year, period) {
                var startDate, endDate;
              
                if (year) {
                    switch (period) {
                        case "full-year":
                            startDate = `01.01.${year}`;
                            endDate = `31.12.${year}`;
                            break;
                        case "first-half":
                            startDate = `01.01.${year}`;
                            endDate = `30.06.${year}`;
                            break;
                        case "second-half":
                            startDate = `01.07.${year}`;
                            endDate = `31.12.${year}`;
                            break;
                        case "first-quarter":
                            startDate = `01.01.${year}`;
                            endDate = `31.03.${year}`;
                            break;
                        case "second-quarter":
                            startDate = `01.04.${year}`;
                            endDate = `30.06.${year}`;
                            break;
                        case "third-quarter":
                            startDate = `01.07.${year}`;
                            endDate = `30.09.${year}`;
                            break;
                        case "fourth-quarter":
                            startDate = `01.10.${year}`;
                            endDate = `31.12.${year}`;
                            break;
                        case "nine-months":
                            startDate = `01.01.${year}`;
                            endDate = `30.09.${year}`;
                            break;
                        default:
                            // Если период - это месяц (01-12)
                            if (!isNaN(period) && period >=1 && period <=12) {
                                var paddedPeriod = period.padStart(2, '0');
                                startDate = `01.${paddedPeriod}.${year}`;
                                // Определение последнего дня месяца
                                var endDay = new Date(year, period, 0).getDate();
                                endDate = `${endDay < 10 ? '0' + endDay : endDay}.${paddedPeriod}.${year}`;
                            }
                            break;
                    }
                
                    // Обновление datepicker с новыми значениями
                    if (startDate && endDate) {
                        $('#custom-start-date').datepicker('update', startDate);
                        $('#custom-end-date').datepicker('update', endDate);
                    }
                }
            }
            

            // Обработчики кнопок "Ок" и "Отмена"
            $('#btn-ok').click(function() {
              // Ваша логика для кнопки "Ок"
            });

            $('#btn-cancel').click(function() {
              // Ваша логика для кнопки "Отмена"
            });
          });



            const totalPages = 23; // Предположим, что у нас всего 6 страниц

  function togglePageList() {
  const pageList = document.getElementById('pageList');
  // Проверяем, добавлены ли уже страницы в список
  if (pageList.childElementCount === 0) {
    // Добавляем страницы только если они еще не были добавлены
    for (let i = 1; i <= totalPages; i++) {
      const pageListItem = document.createElement('li');
      pageListItem.className = 'page-item';
      pageListItem.innerHTML = `<span class="page-link">${i}</span>`;
      pageListItem.onclick = function () { setActive(i); };
      pageList.appendChild(pageListItem);
    }
  }
  // Переключаем класс, который скрывает или показывает список
  pageList.classList.toggle('hidden');
}

function setActive(pageNumber) {
  const currentPage = document.getElementById('currentPage');
  currentPage.textContent = pageNumber;
  changePage(0); // Обновляем активную страницу без изменения
}

function changePage(direction) {
  const currentPageElement = document.getElementById('currentPage');
  let currentPageNumber = parseInt(currentPageElement.textContent, 10);
  const newPageNumber = currentPageNumber + direction;
  
  // Проверяем, чтобы номер страницы был в допустимом диапазоне
  if(newPageNumber >= 1 && newPageNumber <= totalPages) {
    currentPageElement.textContent = newPageNumber;
    // Если выпадающий список страниц отображается, скроем его
    document.getElementById('pageList').classList.add('hidden');
  }
}

function goToPage(position) {
  const currentPageElement = document.getElementById('currentPage');
  if(position === 'first') {
    currentPageElement.textContent = '1';
  } else if(position === 'last') {
    currentPageElement.textContent = String(totalPages);
  }
  // Если выпадающий список страниц отображается, скроем его
  document.getElementById('pageList').classList.add('hidden');
}

//выбор периода облегченный 
function adjustDate(inputId, step, changeType) {
  let input = document.getElementById(inputId);
  let currentDate = input.value ? new Date(input.value) : new Date();

  switch (changeType) {
      case 'day':
          currentDate.setDate(currentDate.getDate() + step);
          break;
      case 'month':
          currentDate.setMonth(currentDate.getMonth() + step);
          break;
      case 'year':
          currentDate.setFullYear(currentDate.getFullYear() + step);
          break;
      default:
          break;
  }

  input.value = currentDate.toISOString().substring(0, 10); // форматируем дату обратно в формат YYYY-MM-DD
}

document.getElementById('btnPrevFromDate').addEventListener('click', function() {
  let changeType = document.getElementById('dateChangeTypeFromDate').value;
  adjustDate('fromDate', -1, changeType);
});

document.getElementById('btnNextFromDate').addEventListener('click', function() {
  let changeType = document.getElementById('dateChangeTypeFromDate').value;
  adjustDate('fromDate', 1, changeType);
});

document.getElementById('btnPrevToDate').addEventListener('click', function() {
  let changeType = document.getElementById('dateChangeTypeToDate').value;
  adjustDate('toDate', -1, changeType);
});

document.getElementById('btnNextToDate').addEventListener('click', function() {
  let changeType = document.getElementById('dateChangeTypeToDate').value;
  adjustDate('toDate', 1, changeType);
});
