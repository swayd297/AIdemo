
// Feature("ai");

// Scenario("test something", ({ I }) => {
//   I.amOnPage("http://localhost:3000/");
//   pause();
// });

Feature('Date Time Checker');

Scenario('Verify valid date', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#day', 5);
  I.waitForElement('#month', 5);
  I.waitForElement('#year', 5);
  I.waitForElement('#check-btn', 5);
  I.fillField('#day', '15');
  I.fillField('#month', '8');
  I.fillField('#year', '2023');
  I.click('#check-btn');
  I.waitForText('Valid Date', 5, '.result-section');
});

Scenario('Verify invalid day', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#day', 5);
  I.waitForElement('#month', 5);
  I.waitForElement('#year', 5);
  I.waitForElement('#check-btn', 5);
  I.fillField('#day', '32');
  I.fillField('#month', '12');
  I.fillField('#year', '2023');
  I.click('#check-btn');
  I.waitForText('Invalid day', 5, '.result-section');
});

Scenario('Verify invalid month', ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#day', 5);
  I.waitForElement('#month', 5);
  I.waitForElement('#year', 5);
  I.waitForElement('#check-btn', 5);
  I.fillField('#day', '10');
  I.fillField('#month', '13');
  I.fillField('#year', '2023');
  I.click('#check-btn');
  I.waitForText('Invalid month', 5, '.result-section');
});
