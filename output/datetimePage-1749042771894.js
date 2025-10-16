const {
  I
} = inject();

module.exports = {
  // setting locators
  title: locate('h1').withText('DateTime Checker'),
  dayLabel: locate('label').withText('Day:'),
  dayInput: '#day',
  monthLabel: locate('label').withText('Month:'),
  monthInput: '#month',
  yearLabel: locate('label').withText('Year:'),
  yearInput: '#year',
  validateButton: locate('button').withText('Validate'),

  // setting methods
  fillDate(day, month, year) {
    I.fillField(this.dayInput, day);
    I.fillField(this.monthInput, month);
    I.fillField(this.yearInput, year);
  },

  validateDate() {
    I.click(this.validateButton);
  },
}