# 🍔 Amina's Fast Food Website

## Project overview
Amina's Fast Food is a website for a local fast-food business in KwaZakele, Port Elizabeth, Eastern Cape. It introduces the business, displays its menu, supports customer enquiries and provides contact and location information.

**Module:** WEDE5020 | **POE:** Part 3 | **Student:** Entle Ngqeku | **Year:** 2026

## Objectives
- Display the business story, menu and prices.
- Help customers ask questions and submit order requests.
- Provide phone, WhatsApp and location information.
- Present a responsive, accessible layout.
- Improve search metadata and JavaScript functionality.

## Pages and files
| File | Purpose |
|---|---|
| `index.html` | Home page, introduction and FAQ |
| `Pages/about.html` | Business story, mission, vision and values |
| `Pages/services.html` | Menu with live search and category filter |
| `Pages/enquiry.html` | Enquiry form and WhatsApp hand-off |
| `Pages/contact.html` | Contact details, general message form and map |
| `Assets/css/style.css` | Shared styling and responsive rules |
| `Assets/js/script.js` | Menu filtering and form workflows |
| `CHANGELOG.md` | Part 3 change history |
| `TESTING.md` | Testing matrix and evidence record |
| `WIREFRAMES.md` | Original page wireframes |

## Part 3 functionality
- Menu search filters menu categories as a visitor types.
- Category filter narrows the menu to burgers, chips, kota, fat cakes or combo deals.
- Homepage FAQ questions expand and collapse.
- Enquiry form validates details, calculates an estimate from menu prices and prepares a WhatsApp message.
- Contact form validates details and prepares an email draft.

### Form and service limitations
The enquiry form opens WhatsApp with a prepared message. The customer must review and send it. It does not save orders to a database.

The contact form opens the visitor's email application addressed to `aminafastfood@gmail.com`. The visitor must review and press Send. Confirm that this is the correct business email before submission. No server-side email service is connected.

The delivery fee in the estimate is R20, as used in the existing project. Confirm this amount with the business before accepting orders. The map searches for KwaZakele, Port Elizabeth; it is not a verified street-level business pin.

## SEO and accessibility
- Each page has a descriptive title and meta description.
- Open Graph title and description metadata are included.
- Semantic HTML landmarks and logical headings are used.
- Forms use labels, suitable input types and HTML5 validation.
- Dynamic result messages use `aria-live`.
- Interactive controls have visible keyboard focus styling.
- Responsive CSS supports smaller screens and flexible content grids.

## Project structure
```text
My-website/
├── index.html
├── Assets/
│   ├── css/style.css
│   ├── js/script.js
│   └── junk-food-concept-unhealthy-food-background-fast-food-sugar-burger-sweets-chips-chocolate-donuts-soda-junk-food-concept-137097176.webp
├── Pages/
│   ├── about.html
│   ├── services.html
│   ├── enquiry.html
│   └── contact.html
├── CHANGELOG.md
├── README.md
├── TESTING.md
└── WIREFRAMES.md
```

## How to run
1. Clone or download the repository.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser or use the VS Code Live Server extension.
4. Test the menu search, category filter, forms, FAQ and map.

No build step or package installation is required.

## Testing and evidence
Follow [TESTING.md](TESTING.md). Capture screenshots of menu search/filter, valid and invalid form states, the WhatsApp message preview, FAQ, map and responsive mobile layout. Test the deployed URL as well as local files.

**Testing status:** Source changes are committed. Browser/device testing and deployment verification remain pending. Do not mark pending checks as passed until completed.

## Part 2 feedback
The lecturer's Part 2 feedback was not supplied with the Part 3 guide used for this update. Add each actual feedback point, code correction and retest outcome to [CHANGELOG.md](CHANGELOG.md) before submission. No feedback has been assumed.

## GitHub and deployment
Repository: https://github.com/entle-ngqeku/My-website

The repository and deployed website are separate deliverables. Publish the static site using GitHub Pages, Netlify or another suitable free host, then add the verified live URL here and submit both URLs on the LMS.

## Existing menu prices
- Classic Burger R35; Cheese Burger R40; Double Burger R50
- Small Chips R20; Medium Chips R30; Large Chips R40
- Basic Kota R30; Cheese Kota R40; Special Kota R50
- Plain Fat Cake R10; Filled Fat Cake R15
- Burger Combo R60; Kota Combo R70

Confirm menu prices with the business before publishing them as current prices.

## References
- MDN Web Docs, HTML form validation: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- MDN Web Docs, JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Google Maps: https://www.google.com/maps
- GitHub Docs, repositories: https://docs.github.com/en/repositories
- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

The project uses native HTML, CSS and JavaScript; no additional JavaScript framework is required.
