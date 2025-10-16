const {
  I
} = inject();

module.exports = {

  // setting locators using priorities: by text, label, CSS
  logo: locate('h1').withText('LifeSource'),
  homeLink: locate('a.nav-link').withText('Home'),
  aboutUsLink: locate('a.nav-link').withText('About Us'),
  contactLink: locate('a.nav-link').withText('Contact'),
  languageSelect: '.language-select',
  englishOption: locate('option').withText('English'),
  vietnameseOption: locate('option').withText('Tiếng Việt'),
  loginButton: locate('a.login-btn').withText('LOGIN'),

  // Hero section
  heroHeading: locate('h1').withText('Give the Gift of Life'),
  heroSubHeading: locate('h2').withText('Your Blood Can Save Lives'),
  donateNowButtonInHero: locate('a.btn.btn-primary').withText('Donate Now'),
  learnMoreButton: locate('a.btn.btn-outline').withText('Learn More'),

  // Benefits carousel
  benefitsHeader: locate('h2').withText('Benefits of Donating Blood'),
  previousSlideButton: locate('button.carousel-arrow.prev').withAttr({
    'aria-label': 'Previous slide'
  }),
  nextSlideButton: locate('button.carousel-arrow.next').withAttr({
    'aria-label': 'Next slide'
  }),

  // Blood types section
  bloodTypesHeader: locate('h2').withText('Blood Types & Compatibility'),

  // Donation process section
  donationProcessHeader: locate('h2').withText('The Donation Process'),

  // Testimonials section
  testimonialsHeader: locate('h2').withText('Donor Testimonials'),

  // Call to Action (CTA) section
  ctaHeader: locate('h2').withText('Ready to Make a Difference?'),
  donateNowButtonInCta: locate('a.btn.btn-primary').withText('Donate Now'),

  // Footer links
  footerHomeLink: locate('a').withText('Home'),
  footerAboutUsLink: locate('a').withText('About Us'),
  donationProcessLink: locate('a').withText('Donation Process'),
  upcomingDrivesLink: locate('a').withText('Upcoming Drives'),
  footerContactLink: locate('a').withText('Contact'),

  // Social links
  facebookLink: locate('a').withText('FB'),
  twitterLink: locate('a').withText('TW'),
  instagramLink: locate('a').withText('IG'),

  // Method to interact with language select
  selectLanguage(language) {
    I.selectOption(this.languageSelect, language);
  },

  // Method to navigate
  clickNavLink(linkText) {
    I.click(locate('a').withText(linkText));
  },

  // Method to verify headings in sections
  seeSectionHeading(headingText) {
    I.seeElement(locate('h2').withText(headingText));
  },

  // Add any other necessary methods for interaction here...

};