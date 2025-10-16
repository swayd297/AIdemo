const {
  I
} = inject();

module.exports = {
  // setting locators
  pageTitle: locate('h1').withText('⏰ Date Time Checker'),
  dateValidationHeader: locate('h2').withText('Date Validation'),
  dateValidationInput: locate('input').withAttr({
    type: 'date'
  }).inside(locate('div').withText('Date Validation').inside(locate('.backdrop-blur-sm'))),
  dateValidationButton: locate('button').withText('Validate').inside(locate('div').withText('Date Validation').inside(locate('.backdrop-blur-sm'))),

  timeValidationHeader: locate('h2').withText('Time Validation'),
  timeValidationInput: locate('input').withAttr({
    placeholder: 'Enter time (HH:MM:SS or HH:MM)'
  }).inside(locate('div').withText('Time Validation').inside(locate('.backdrop-blur-sm'))),
  timeValidationButton: locate('button').withText('Validate').inside(locate('div').withText('Time Validation').inside(locate('.backdrop-blur-sm'))),

  dateTimeComparisonHeader: locate('h2').withText('DateTime Comparison'),
  dateTimeComparisonInputs: locate('input').withAttr({
    type: 'datetime-local'
  }).inside(locate('div').withText('DateTime Comparison').inside(locate('.backdrop-blur-sm'))),
  compareDatesButton: locate('button').withText('Compare Dates').inside(locate('div').withText('DateTime Comparison').inside(locate('.backdrop-blur-sm'))),

  timezoneConversionHeader: locate('h2').withText('Timezone Conversion'),
  timezoneConversionInput: locate('input').withAttr({
    type: 'datetime-local'
  }).inside(locate('div').withText('Timezone Conversion').inside(locate('.backdrop-blur-sm'))),
  timezoneFromSelect: locate('select').first().inside(locate('div').withText('Timezone Conversion').inside(locate('.backdrop-blur-sm'))),
  timezoneToSelect: locate('select').last().inside(locate('div').withText('Timezone Conversion').inside(locate('.backdrop-blur-sm'))),
  convertTimezoneButton: locate('button').withText('Convert Timezone').inside(locate('div').withText('Timezone Conversion').inside(locate('.backdrop-blur-sm'))),

  ageCalculatorHeader: locate('h2').withText('Age Calculator'),
  ageCalculatorInput: locate('input').withAttr({
    type: 'date'
  }).inside(locate('div').withText('Age Calculator').inside(locate('.backdrop-blur-sm'))),
  calculateAgeButton: locate('button').withText('Calculate Age').inside(locate('div').withText('Age Calculator').inside(locate('.backdrop-blur-sm'))),

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
    const inputs = await I.grabNumberOfVisibleElements(this.dateTimeComparisonInputs);
    if (inputs === 2) {
      I.fillField(locate(this.dateTimeComparisonInputs).at(1), date1);
      I.fillField(locate(this.dateTimeComparisonInputs).at(2), date2);
    } else {
      I.log('Could not find two date inputs for comparison');
    }
    I.click(this.compareDatesButton);
  },

  async convertTimezone(date, fromTimezone, toTimezone) {
    I.fillField(this.timezoneConversionInput, date);
    I.selectOption(this.timezoneFromSelect, fromTimezone);
    I.selectOption(this.timezoneToSelect, toTimezone);
    I.click(this.convertTimezoneButton);
  },

  async calculateAge(date) {
    I.fillField(this.ageCalculatorInput, date);
    I.click(this.calculateAgeButton);
  },
};