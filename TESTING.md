# Testing Record — WEDE5020 POE Part 3

| Area | Test | Expected result | Status |
|---|---|---|---|
| Navigation | Open all links on every page | Correct page opens | Pending browser verification |
| Responsive layout | Test desktop (1280px), tablet (768px) and mobile (375px) widths | No horizontal overflow; controls usable | Pending browser verification |\n| Keyboard focus | Press Tab and Shift+Tab through links, buttons and form fields | Clear visible focus outline appears | CSS rule added; keyboard retest pending |
| Menu search | Search for "burger" | Matching category remains visible | Pending browser verification |
| Category filter | Select each category and All | Correct category shown | Pending browser verification |
| Enquiry invalid | Submit missing, whitespace-only, invalid phone/email and invalid quantity | Inline JavaScript errors and HTML5 validation block submission; focus moves to first invalid field | Pending browser verification |
| Enquiry valid | Submit a valid product enquiry | Product fields are required, estimate is calculated and WhatsApp opens with a prepared message | Pending manual verification |
| Other enquiry types | Select a non-product enquiry type | Product-only meal, quantity and delivery fields are hidden and are not required | Pending browser verification |
| Contact invalid | Enter invalid email, invalid optional phone or short message | Inline JavaScript errors and HTML5 validation block submission | Pending browser verification |
| Contact valid | Complete and submit general contact form | Email application opens with the selected message type and compiled message | Pending manual verification |
| Lightbox | Click a menu photo, use next/previous, Escape and close | Large image opens; navigation and close work with keyboard and mouse | Pending browser verification |
| FAQ | Open and close each question | Content expands and collapses | Pending browser verification |
| Map | Load Contact page | Map search loads and supports zoom/pan | Pending live-site verification |
| SEO | Inspect title, description, H1 and links | Purposeful page metadata and headings | Source review completed; live crawl pending |
| Security | Scan repository for credentials | No private credentials committed | Manual scan pending |
| Deployment | Open live URL in private window | Site features work online | Pending deployment |
| Part 2 corrections | Compare lecturer comments with fixes | Every comment corrected and retested | Feedback not supplied |

## Evidence to capture
- Menu search and category filter.
- Valid and invalid enquiry form.
- Prepared WhatsApp message.
- Valid and invalid contact form, including inline error messages.
- Menu lightbox open, next/previous and closed states on desktop and mobile.
- FAQ open state.
- Map on desktop and mobile.
- Each page at mobile width.
- Deployed website and GitHub commit history.

## Limitations\n- No AJAX/server endpoint is configured. Forms prepare a WhatsApp message or email draft; the visitor must complete the send step.
- Enquiry opens WhatsApp with a prepared message; the customer must review and send it. No database is connected.
- Contact opens the visitor's email application; the visitor must press Send. No server-side email service is connected.
- Map searches the KwaZakele area, not a verified street-level business pin.
- Complete browser, mobile-device and deployment tests before submission.
