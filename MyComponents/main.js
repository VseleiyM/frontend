// Стрелки сортировки таблицы 
$(document).ready(function() {
  $('th').click(function() {

    $('th .bi-caret-up-fill').removeClass('hidden');
    $('th .bi-caret-down-fill').addClass('hidden');

    var upArrow = $(this).find('.bi-caret-up-fill');
    var downArrow = $(this).find('.bi-caret-down-fill');


    if(upArrow.hasClass('hidden')) {
      upArrow.removeClass('hidden');
      downArrow.addClass('hidden');
    } else {
      upArrow.addClass('hidden');
      downArrow.removeClass('hidden');
    }

    //действия по сортировке..
  });
});
            
            
            
            
            // цветовой режим кнопка 
            function toggleTheme() {
                var theme = document.documentElement.getAttribute('data-bs-theme');
                if (theme === 'dark') {
                    document.documentElement.setAttribute('data-bs-theme', 'light');
                } else {
                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                }
            }


            // Выбор периода облегченный 
            // Установка сегодняшней даты в поля ввода при их активации
        document.getElementById('fromDate').addEventListener('focus', function() {
          this.type = 'date';
          if(this.value === '') {
              this.valueAsDate = new Date();
          }
      });

      document.getElementById('toDate').addEventListener('focus', function() {
          this.type = 'date';
          if(this.value === '') {
              this.valueAsDate = new Date();
          }
      });

      // Функции изменения даты в зависимости от выбранной опции в dropdown
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



            //выбор периода
          
  
  
            (document).ready(function(){
              // Инициализация InputMask
              $("#custom-start-date, #custom-end-date").inputmask("dd.mm.yyyy", {
                  "placeholder": "дд.мм.гггг",
                  insertMode: false,
                  showMaskOnHover: false,
                  clearIncomplete: true,
                  greedy: false,
                  definitions: {
                      'd': {
                          validator: "[0-9]",
                          cardinality: 1
                      },
                      'm': {
                          validator: "[0-9]",
                          cardinality: 1
                      },
                      'y': {
                          validator: "[0-9]",
                          cardinality: 1
                      }
                  },
                  onKeyPress: function (value, event, currentField, options) {
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
                              var dateWithYear = value + matches[3].substr(2,2);
                              currentField.val(dateWithYear);
                          }
                      }
                  }
              });

          });
            
            // Инициализация Datepicker
            $('#custom-start-date, #custom-end-date').datepicker({
              format: 'dd.mm.yyyy',
              language: 'ru',
              autoclose: true,
              todayHighlight: true
            });
          
            // Обработчики событий для стандартного периода
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
          
            // Функция для обновления дат
            function updateCustomPeriodDates(year, period) {
              var startDate, endDate;
              if (year && year.length === 4) {
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
  
                          if (!isNaN(period) && period >=1 && period <=12) {
                              var paddedPeriod = period.padStart(2, '0');
                              startDate = `01.${paddedPeriod}.${year}`;
  
                              var endDay = new Date(year, period, 0).getDate();
                              endDate = `${endDay < 10 ? '0' + endDay : endDay}.${paddedPeriod}.${year}`;
                          }
                          break;
                  }
              
         
                  if (startDate && endDate) {
                      $('#custom-start-date').datepicker('update', startDate);
                      $('#custom-end-date').datepicker('update', endDate);
                  }
              }
                
                // Обновление значений datepicker
                if (startDate && endDate) {
                  $('#custom-start-date').datepicker('setDate', startDate);
                  $('#custom-end-date').datepicker('setDate', endDate);
                }
              }
            }
          $('#btn-ok').click(function() {
           
          });
  
          $('#btn-cancel').click(function() {
     
          });

          

  //перебор страниц,
  const totalPages = 23; 

  function togglePageList() {
  const pageList = document.getElementById('pageList');

  if (pageList.childElementCount === 0) {

    for (let i = 1; i <= totalPages; i++) {
      const pageListItem = document.createElement('li');
      pageListItem.className = 'page-item';
      pageListItem.innerHTML = `<span class="page-link">${i}</span>`;
      pageListItem.onclick = function () { setActive(i); };
      pageList.appendChild(pageListItem);
    }
  }

  pageList.classList.toggle('hidden');
}

function setActive(pageNumber) {
  const currentPage = document.getElementById('currentPage');
  currentPage.textContent = pageNumber;
  changePage(0); 
}

function changePage(direction) {
  const currentPageElement = document.getElementById('currentPage');
  let currentPageNumber = parseInt(currentPageElement.textContent, 10);
  const newPageNumber = currentPageNumber + direction;
  

  if(newPageNumber >= 1 && newPageNumber <= totalPages) {
    currentPageElement.textContent = newPageNumber;

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
 
  document.getElementById('pageList').classList.add('hidden');
}
