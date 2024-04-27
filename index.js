
    class MyApp {
        constructor() {
            // DOM ELEMENTS
            this.$dateEl = document.querySelector('#birth');
            this.$birthDayEl = document.querySelector('.birthday-date')
            this.$dayEl = document.querySelector('#day')
            this.$monthEl = document.querySelector('#month')
            this.$yearEl = document.querySelector('#year')
            this.$dashes = document.querySelectorAll('.dashes')
            this.addEventListners();
        }

        //   all events here
        addEventListners() {
            document.querySelector('form').addEventListener('submit', (e)=> {
               this.formSubmit(e);
               setTimeout(()=> {
                this.$dashes.forEach(function emptyDetails(dash) {
                  return  dash.textContent = ""; 
                });
                this.$birthDayEl.textContent = "";
                this.$dayEl.value = "";
               this.$monthEl.value = "";
               this.$yearEl.value = "";
               }, 5000)
           });

           document.body.addEventListener('input', (e)=> {
            var input = e.target.value
           const splitDates =  this.getDateDetails(input)
           this.$dayEl.value = splitDates[2];
           this.$monthEl.value = splitDates[1];
           this.$yearEl.value = splitDates[0];
        });

        }

         formSubmit(e) {
            e.preventDefault();
            this.$birthDayEl.textContent = this.$dateEl.value.length === 0 ? "Invalid date, Choose again!" : "Birthday date selected";
            this.$birthDayEl.style.color = this.$birthDayEl.textContent === "Birthday date selected" ? "green" : "red";
            var dateMilliseconds =  this.convertDate(this.$dateEl.value.toString());
            this.convertYear(dateMilliseconds);
            this.convertMonth(dateMilliseconds);
            this.convertDay(dateMilliseconds);
            this.convertHour(dateMilliseconds);
            this.emptyDateInput(this.$dateEl);
        }

         getDateDetails(input) {
            var splitDate = input.split("-");
            var year, month, day
            return  [year, month, day] = splitDate || [];
        }

         convertDate(input) {
            var today = new Date().getTime();
            var birthDay = new Date(input).getTime()
            if (birthDay === today) return 0;
            var dateDiff = today - birthDay;
            return dateDiff;
        }

         convertYear(input) {
        var years = Math.round(input / (1000 * 60 * 60 * 24 * 365));
        var yearDisplay = document.querySelector('.display-year')
        yearDisplay.textContent =  this.$dateEl.value.length === 0 ? "" :  years;
        document.querySelector('.period-year').textContent = years > 1 ? "YEARS OLD" : "YEAR OLD";
        return yearDisplay;
      }

       convertMonth(input) {
        var months = Math.round(input / 2629800000);
        var monthDisplay = document.querySelector('.display-month');
        monthDisplay.textContent =  this.$dateEl.value.length === 0 ? "" : months;
        document.querySelector('.period-month').textContent = months > 1 ? "MONTHS OLD" : "MONTH OLD";
        return monthDisplay;
      }

       convertDay(input) {
        var days = Math.round(input / (1000 * 60 * 60 * 24));
        var dayDisplay = document.querySelector('.display-day');
       dayDisplay.textContent =  this.$dateEl.value.length === 0 ? "" : days;
       document.querySelector('.period-day').textContent = days > 1 ? "DAYS OLD" : "DAY OLD";
        return dayDisplay;
      }

       convertHour(input) {
        var hours = Math.round(input / (1000 * 60 * 60 ));
        var hourDisplay = document.querySelector('.display-hour');
       hourDisplay.textContent =  this.$dateEl.value.length === 0 ? "" : hours;
       document.querySelector('.period-hour').textContent = hours > 1 ? "HOURS OLD" : "HOUR OLD";
        return hourDisplay;
      }

       emptyDateInput(input) {
        return input.value = "";
      }

      }

      new MyApp()