const {
  I
} = inject();

module.exports = {
  // setting locators
  title: locate('h1').withText('⏰ Date Time Checker'),
  dateValidationHeader: locate('h2').withText('Date Validation'),
  dateValidationInput: locate('input').withAttr({
    type: 'date'
  }),
  dateValidationButton: locate('button').withText('Validate'),
  timeValidationHeader: locate('h2').withText('Time Validation'),
  timeValidationInput: locate('input').withAttr({
    placeholder: 'Enter time (HH:MM:SS or HH:MM)'
  }),
  timeValidationButton: locate('button').withText('Validate'),
  dateTimeComparisonHeader: locate('h2').withText('DateTime Comparison'),
  dateTimeComparisonInputs: locate('input').withAttr({
    type: 'datetime-local'
  }),
  compareDatesButton: locate('button').withText('Compare Dates'),
  timezoneConversionHeader: locate('h2').withText('Timezone Conversion'),
  timezoneConversionInput: locate('input').withAttr({
    type: 'datetime-local'
  }),
  timezoneConversionSelects: locate('select'),
  convertTimezoneButton: locate('button').withText('Convert Timezone'),
  ageCalculatorHeader: locate('h2').withText('Age Calculator'),
  ageCalculatorInput: locate('input').withAttr({
    type: 'date'
  }),
  calculateAgeButton: locate('button').withText('Calculate Age'),

  // setting methods
  async validateDate(date) {
    I.fillField(this.dateValidationInput, date);
    I.click(this.dateValidationButton);
  },

  async validateTime(time) {
    I.fillField(this.timeValidationInput, time);
    I.click(this.timeValidationButton);
  },

  async compareDates(date1, date2) {
    I.fillField(locate(this.dateTimeComparisonInputs).at(1), date1);
    I.fillField(locate(this.dateTimeComparisonInputs).at(2), date2);
    I.click(this.compareDatesButton);
  },

  async convertTimezone(date, timezone1, timezone2) {
    I.fillField(this.timezoneConversionInput, date);
    I.selectOption(locate(this.timezoneConversionSelects).at(1), timezone1);
    I.selectOption(locate(this.timezoneConversionSelects).at(2), timezone2);
    I.click(this.convertTimezoneButton);
  },

  async calculateAge(date) {
    I.fillField(this.ageCalculatorInput, date);
    I.click(this.calculateAgeButton);
  },
};