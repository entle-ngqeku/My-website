# Changelog — Amina's Fast Food

## [3.2.0] — 2026-10-30

### Added
- Added JavaScript field validation to both forms, including inline error messages, accessible error descriptions, invalid-field focus and checks for trimmed names, South African mobile numbers, email format, message length and order quantity.
- Made the enquiry form adapt to the selected enquiry type: meal, quantity and collection/delivery fields are required only for product orders.
- Added a menu photo lightbox with larger previews, captions, previous/next controls, Escape/backdrop closing and keyboard focus return.
- Added responsive lightbox styling and clear validation states.

### Improved
- Kept the contact form for general messages and the enquiry form for product/service requests, with different submission hand-offs.
- Retained the WhatsApp order hand-off and email-app contact hand-off; visitors are told to review and send the prepared message.
- Updated README and testing records to describe the features and identify browser testing still required.

### Limitations
- No AJAX endpoint or server-side form processor is configured in this static website. Do not describe form messages as sent until the visitor completes the WhatsApp or email-app send step.
- Actual browser, keyboard, mobile and deployed-site tests must still be completed and recorded.

# Changelog — Amina's Fast Food

## [3.1.0] — 2026-10-30\n\n### Marking feedback corrections\n- Added an explicit `:focus` state and a stronger `:focus-visible` keyboard indicator for links, buttons and form controls.\n- Added a tablet media query for viewport widths from 701px to 1024px, adjusting navigation spacing, content grids, containers, hero sizing and map height.\n- Expanded README documentation with a dedicated Part 1 feedback record, screenshot evidence instructions and relevant technical references.\n- Added a screenshot evidence folder guide with required desktop, tablet and mobile captures.\n- Added a Part 1 feedback/improvement record template. Actual lecturer comments and real screenshots still need to be supplied/recorded; they have not been fabricated.\n\n## [3.0.0] — 2026-10-30

### Added
- Shared JavaScript for menu search and category filtering.
- Dynamic enquiry summary, estimated menu total and WhatsApp message hand-off.
- Contact form email compilation with a clear instruction to press Send.
- HTML5 and JavaScript validation for names, South African phone numbers, quantity and message length.
- Expandable FAQ section on the homepage.
- Responsive Google Maps area search for KwaZakele.
- Accessible live status messages and visible keyboard focus styles.
- Part 3 testing record and updated README.
- GitHub Actions workflow to publish the static website through GitHub Pages after pushes to main.

### Changed
- Added action and method attributes to both forms.
- Removed unverified stock, catering availability, volunteer intake and sponsorship claims. The website now asks the business to confirm availability and final price.
- Added Open Graph metadata and a shared deferred JavaScript file to every page.
- Added menu search and category filter controls.

### Part 2 feedback
The lecturer's Part 2 feedback was not included with the supplied Part 3 guide. Add each actual comment, correction and retest result here before final submission. No feedback has been invented.
