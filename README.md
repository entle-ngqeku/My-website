# 🍔 Amina's Fast Food Website

## 📌 Project Overview

Amina's Fast Food is a responsive website for a local fast-food business based in KwaZakele, Port Elizabeth, Eastern Cape.

The website gives customers a simple way to learn about the business, view the menu and prices, submit an enquiry, contact the business and find its location.

---

## 🎯 Project Objectives

### Increase Sales

- Display the menu and prices online.
- Provide an enquiry/order page.
- Provide WhatsApp ordering support.
- Promote combo deals.

### Improve Customer Convenience

- Display contact details and trading hours.
- Provide location information.
- Provide a responsive mobile-friendly website.

### Build Community Connection

- Share the history of Amina's Fast Food.
- Explain the business mission, vision and values.
- Highlight the connection with the local community.

---

## 👥 Target Audience

The website is intended for:

- Students looking for affordable meals.
- Working families looking for convenient food.
- Local community members.
- Customers who support local businesses.

---

## 🌐 Website Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage, introduction and calls to action |
| `Pages/about.html` | Business story, mission, vision and values |
| `Pages/services.html` | Menu, food categories and combo deals |
| `Pages/enquiry.html` | Customer enquiry and order form |
| `Pages/contact.html` | Contact details, hours and location |
| `Assets/css/style.css` | Shared styling, typography and responsive design |
| `WIREFRAMES.md` | Wireframes for the planned page layouts |

---

## 🗺️ Sitemap

```text
Home
│
├── About
│   ├── Our Story
│   ├── Mission
│   ├── Vision
│   └── Values
│
├── Services & Menu
│   ├── Burgers
│   ├── Chips
│   ├── Kota
│   ├── Fat Cakes
│   └── Combo Deals
│
├── Enquiry / Order
│   └── Order Form
│
└── Contact
    ├── Location
    ├── Phone
    ├── WhatsApp
    └── Trading Hours
```

---

## 🍔 Menu

### Burgers

- Classic Burger — R35
- Cheese Burger — R40
- Double Burger — R50

### Chips

- Small Chips — R20
- Medium Chips — R30
- Large Chips — R40

### Kota

- Basic Kota — R30
- Cheese Kota — R40
- Special Kota — R50

### Fat Cakes

- Plain Fat Cake — R10
- Filled Fat Cake — R15

### Combo Deals

- Burger Combo — R60
- Kota Combo — R70

> **Note:** Prices shown on the website should be checked and updated when the business changes its menu prices.

---

## 📲 Ordering System

The `enquiry.html` page provides a front-end order/enquiry form.

Customers can enter:

- Full name
- Phone number
- Meal
- Quantity
- Collection or delivery
- Additional information

The page displays a confirmation message after the form is submitted. Customers can then use WhatsApp to confirm the order details.

**Important:** The current form is a front-end demonstration. It does not store orders in a database or send form information to a server.

---

## 🎨 Design Aesthetics and Typography

The website uses a clear fast-food visual style with strong contrast and consistent spacing.

### Main Colours

| Colour | Use |
|---|---|
| Black | Navigation and footer |
| Dark red | Branding and headings |
| Orange | Buttons and highlights |
| Light orange | Page banners and CTA sections |
| White | Content cards and form areas |

### Typography

The website uses a readable Arial/Helvetica sans-serif font stack. Responsive `clamp()` sizes are used for important headings so text remains readable on different screen sizes. Paragraph width is also controlled to avoid very long lines.

---

## 📱 Responsive Design

The website is designed for:

- 📱 Mobile phones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

CSS media queries change the layout for smaller screens. Navigation links stack on very small screens, while two-column sections change to one column.

---

## 🧱 Semantic HTML and Content Elements

The website makes use of HTML5 semantic and content elements, including:

- `<header>` for the website header.
- `<nav>` for navigation.
- `<main>` for primary page content.
- `<section>` for major content sections.
- `<article>` for independent content cards.
- `<footer>` for footer information.
- `<h1>`, `<h2>` and `<h3>` for heading structure.
- `<p>` for paragraphs.
- `<ul>`, `<ol>` and `<li>` for lists.
- `<strong>` and `<small>` for important and supporting menu information.
- `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>` and `<textarea>` for the enquiry form.
- `<a>` for internal and external links.

The HTML files also contain student-friendly comments explaining important syntax.

---

## 📁 Project Structure

```text
My-website/
│
├── index.html
│
├── Assets/
│   ├── css/
│   │   └── style.css
│   │
│   └── junk-food-concept-unhealthy-food-background-fast-food-sugar-burger-sweets-chips-chocolate-donuts-soda-junk-food-concept-137097176.webp
│
├── Pages/
│   ├── about.html
│   ├── services.html
│   ├── enquiry.html
│   └── contact.html
│
├── WIREFRAMES.md
│
└── README.md
```

### File Descriptions

- `index.html` — Main homepage.
- `about.html` — Business information, mission, vision and values.
- `services.html` — Food menu and services.
- `enquiry.html` — Customer order/enquiry form.
- `contact.html` — Contact and location information.
- `style.css` — Shared CSS stylesheet.
- `WIREFRAMES.md` — Website wireframes.
- `README.md` — Project documentation.

---

## ⭐ Main Features

- Responsive navigation bar.
- Homepage hero section with food background image.
- About Us page.
- Menu and services page.
- Burgers, chips, kota and fat cakes.
- Combo deals.
- Enquiry/order form.
- Form confirmation message.
- Clickable phone number.
- WhatsApp ordering link.
- Map location link.
- Trading hours.
- Responsive mobile layout.
- Semantic HTML5 structure.
- Student-friendly HTML and CSS comments.
- Wireframes documenting the page layouts.

---

## 📞 Contact Information

**Location:** KwaZakele, Port Elizabeth, Eastern Cape  
**Phone:** 072 784 8640  
**WhatsApp:** 072 784 8640  
**Trading Hours:** Monday - Sunday, 10:00 - 20:00

---

## 💻 Technologies Used

- **HTML5** — Website structure and semantic elements.
- **CSS3** — Styling, layout, typography and responsive design.
- **JavaScript** — Enquiry form confirmation message.
- **WhatsApp** — Direct customer communication.
- **Google Maps** — Location link.
- **GitHub** — Version control and project hosting.

---

## 🧪 Testing Checklist

Before submission, check each item:

- [ ] Homepage loads correctly.
- [ ] Hero background image loads correctly.
- [ ] All navigation links work from every page.
- [ ] About page opens correctly.
- [ ] Services/Menu page opens correctly.
- [ ] Enquiry page opens correctly.
- [ ] Contact page opens correctly.
- [ ] CSS loads on every page.
- [ ] Form validation works.
- [ ] Form confirmation message appears.
- [ ] Phone link works.
- [ ] WhatsApp link works.
- [ ] Map link works.
- [ ] Trading hours are correct.
- [ ] Menu prices are correct.
- [ ] Website works on mobile.
- [ ] Website works on desktop.
- [ ] No broken internal links are present.

---

## 📅 Development Timeline

| Semester Week | Development Activity | POE Evidence |
|---|---|---|
| Week 1 | Research, business analysis and project goals | Research notes and analysis |
| Week 2 | Proposal, objectives and requirements | POE Part 1 proposal |
| Week 3 | Sitemap, wireframes and design planning | Sitemap and `WIREFRAMES.md` |
| Week 4 | HTML page development | Initial website pages |
| Week 5 | CSS styling and responsive layout | Updated CSS and screenshots |
| Week 6 | Forms, links and website functionality | Enquiry and contact features |
| Week 7 | Testing, navigation checks and corrections | Testing checklist and fixes |
| Week 8 | Final review, documentation and submission | Final website and README |

**POE deadline:** The exact submission date must be copied from the official module POE brief/calendar so that the timeline matches the lecturer's required deadline. No deadline date was supplied in the marking rubric used for this README.

---

## 💰 Budget

The website is developed using HTML, CSS and JavaScript and is stored on GitHub during development.

Possible future costs include:

- Domain registration.
- Web hosting.
- Website maintenance.
- Optional analytics or marketing services.

Current hosting references include xneelo and Afrihost pricing pages. Prices can change, so the provider websites should be checked before making a final budget decision.

---

## 🔮 Future Improvements

Possible future improvements include:

- Online payment.
- Database for storing orders.
- Automatic order notifications.
- Customer reviews.
- Feedback management.
- Daily specials management.
- Online menu management.
- Social media integration.
- Website analytics.
- Careers page.
- Job application system.
- Additional business branches.

---

## 📊 Possible Website KPIs

The website can be evaluated using measures such as:

- Number of website visitors.
- Number of online enquiries.
- Number of WhatsApp enquiries.
- Number of completed orders.
- Menu page visits.
- Enquiry page visits.
- Contact page visits.
- Mobile traffic.
- Time spent on the website.

---

## 📚 References

1. Amina Fast Food Kitchen. Facebook Menu and Branding. Accessed August 2026.
2. xneelo. **Web Hosting.** https://xneelo.co.za/web-hosting/ Accessed September 2026.
3. Afrihost. **Hosting and Domains.** https://www.afrihost.com/ Accessed September 2026.
4. Google Analytics. **Analytics Overview.** https://marketingplatform.google.com/about/analytics/ Accessed September 2026.
5. GitHub. **GitHub Documentation / Repository Platform.** https://github.com/ Accessed September 2026.

---

## 👤 Project Information

**Project:** Amina's Fast Food Website  
**Student:** Entle Ngqeku  
**Module:** WEDE5020  
**Year:** 2026

---

## ❤️ Amina's Fast Food

**Fresh. Fast. Affordable.**

A local fast-food website focused on affordable meals, convenient ordering, friendly service and community connection.
