# Elsman UK Ltd — Premium wholesale catalogue website

This is a responsive static website built with HTML, CSS and vanilla JavaScript. It is designed as a B2B wholesale catalogue for convenience stores and independent retailers.

## Project contents
- `index.html` — full homepage, catalogue, company story, wholesale process, FAQs and enquiry form
- `styles.css` — complete responsive visual system for desktop, tablet and mobile
- `script.js` — mobile navigation, product category filters, live search, product detail dialogs and enquiry email preparation
- `assets/` — supplied product photography, favicon and social sharing image

## Business details included
- Legal name: Elsman UK Ltd
- Enquiry email: hello@elsman.co.uk
- Website: elsman.co.uk (update DNS/hosting separately)

## Before launch — important checks
1. Confirm that the product descriptions accurately reflect the goods you sell.
2. Add exact specifications, pack sizes, age guidance, safety/compliance information and availability only after verification.
3. Add registered office/company number, VAT details, telephone number and delivery/returns terms if you want these displayed.
4. Add a Privacy Notice and cookie notice appropriate to the data and tools used. The form currently prepares an email via the visitor's email app; it does not store submissions on a server.
5. Test on iPhone/Android, tablet and desktop, and check all links and email behaviour.
6. Consider a proper form backend (for example Hostinger-supported PHP mail handling or a trusted form service) before relying on the form for lead capture.

## Preview locally
Open `index.html` in a browser, or use VS Code with the Live Server extension.

## GitHub
Create a repository such as `elsman-uk-ltd-website`, then upload the *contents* of this folder to the repository root (not the ZIP file). Keep `index.html` at the root.

## Hostinger deployment
For a static HTML site:
1. In Hostinger hPanel, open Websites and select the domain.
2. If Git deployment is available on your hosting plan, open the Git deployment area, connect GitHub, select this repository and the `main` branch, and set the deployment directory to `public_html` (follow the current hPanel instructions).
3. Alternatively, upload the contents of this folder, including `assets/`, into `public_html` using File Manager or FTP.
4. Confirm `index.html` is directly inside `public_html`.
5. Enable SSL and force HTTPS in Hostinger, then test the live domain.

This package is a static front-end. It does not include inventory management, customer accounts, checkout, a database or server-side form processing.

## Development / build

This is a static HTML/CSS/JavaScript site with Vite added for package-based import and production builds.

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. The deployable website is generated in the `dist/` folder. For direct static hosting without a build step, the root `index.html`, `styles.css`, `script.js`, and `assets/` folder can also be uploaded as-is.



## Company details
- Elsman UK Ltd
- Address supplied on invoice: Wythenshawe, Manchester, Greater Manchester, M22 1TY, United Kingdom (house number omitted)
- Company registration number: 17304936
- Email: hello@elsman.co.uk


## Enquiry behaviour
The wholesale enquiry form uses a `mailto:` link to prepare an email to hello@elsman.co.uk. Customers must press Send in their email app. If no email app opens, the form offers a direct Hostinger Webmail link. No form data is stored by the website.

## Mobile improvements
The site includes mobile-specific layout, larger touch targets, readable form fields, a scrollable category filter row, improved navigation and reduced-motion support.
