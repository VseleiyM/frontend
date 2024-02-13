
//Логика компонента №1
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
            
            
            
            
//Логика компонента №2
            function toggleTheme() {
                var theme = document.documentElement.getAttribute('data-bs-theme');
                if (theme === 'dark') {
                    document.documentElement.setAttribute('data-bs-theme', 'light');
                } else {
                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                }
            }

            

//Логика компонента №3
            $(document).ready(function() {
              // Инициализация всех компонентов DatePicker
              $('.custom-start-date, .custom-end-date').datepicker({
                  format: 'dd.mm.yyyy',
                  language: 'ru',
                  autoclose: true,
                  todayHighlight: true
              });

              $('.period-setting-component').each(function() {
                var $component = $(this);
          
              // Логика кнопок "Ок" и "Отмена" для всех карточек
              $('.period-setting-component').on('click', '.btn-ok', function() {
                  // Ваша логика для кнопки "Ок"
              });
          
              $('.period-setting-component').on('click', '.btn-cancel', function() {
                  // Ваша логика для кнопки "Отмена"
              });
          
              // Обработчик изменения значения стандартного периода для каждой карточки
              $component.on('input change', '#standard-year, #standard-period', function() {
              var year = $component.find('#standard-year').val();
              var period = $component.find('#standard-period').val();
              updateCustomPeriodDates(year, period, $component);
                });
              });
          
              function updateCustomPeriodDates(year, period) {
                  var startDate, endDate;
          
                  // далее идет логика определения startDate и endDate
                  if (year) {
                      switch (period) {
                          // ... все case как в оригинальном скрипте
                          // ... 
                          // Убедитесь, что этот код включает все сценарии для period,
                          // включая полугодия, кварталы, месяцы и т.д.
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
                              if (!isNaN(period) && period >= 1 && period <= 12) {
                                  var paddedPeriod = period.padStart(2, '0');
                                  startDate = `01.${paddedPeriod}.${year}`;
                                  // Определение последнего дня месяца
                                  var endDay = new Date(year, period, 0).getDate();
                                  endDate = `${endDay < 10 ? '0' + endDay : endDay}.${paddedPeriod}.${year}`;
                              }
                              break;
                      }
          
                      // Обновление DatePicker со значениями startDate и endDate
                      if (startDate && endDate) {
                          $('.custom-start-date').datepicker('update', startDate);
                          $('.custom-end-date').datepicker('update', endDate);
                      }
                  }
              }
          });

            


//Логика компонента №4
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


//Логика компонента №5
//выбор периода облегченный 
document.querySelectorAll('.date-navigator').forEach(function(navigator) {
  let fromDateInput = navigator.querySelector('.from-date');
  let toDateInput = navigator.querySelector('.to-date');
  
  navigator.querySelector('.btn-prev-from').addEventListener('click', function() {
      adjustDate(fromDateInput, -1, navigator.querySelector('.date-change-type-from').value);
  });

  navigator.querySelector('.btn-next-from').addEventListener('click', function() {
      adjustDate(fromDateInput, 1, navigator.querySelector('.date-change-type-from').value);
  });

  navigator.querySelector('.btn-prev-to').addEventListener('click', function() {
      adjustDate(toDateInput, -1, navigator.querySelector('.date-change-type-to').value);
  });

  navigator.querySelector('.btn-next-to').addEventListener('click', function() {
      adjustDate(toDateInput, 1, navigator.querySelector('.date-change-type-to').value);
  });
});

function adjustDate(input, step, changeType) {
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

  input.value = currentDate.toISOString().substring(0, 10);
}
