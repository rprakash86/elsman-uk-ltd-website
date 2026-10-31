# Elsman UK Ltd website

Responsive wholesale product catalogue for Elsman UK Ltd. Built with HTML, CSS and JavaScript, with Vite available for local preview/build.

## Features
- Responsive desktop and mobile layouts
- Eight product lines using supplied product photography
- Live catalogue search and category filters
- Product quick-view dialog and product-specific email enquiry preparation (`mailto:`)
- Animated hero image rotation using supplied catalogue images
- Scroll reveal, verified catalogue counters, recently viewed product (session only), and back-to-top control
- Reduced-motion accessibility support
- Company contact and registration details in the footer

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Vite outputs the production site to `dist/`. For Hostinger Git deployment using a static Vite build, configure the build command as `npm run build` and output directory as `dist`. If uploading the plain source files directly to `public_html`, ensure `index.html`, `styles.css`, `script.js`, `package.json`, and `assets/` are all in the deployed root; the website does not require a server-side runtime.

## Enquiries
The enquiry form prepares a message addressed to `hello@elsman.co.uk` in the visitor's configured email application. The visitor must press Send in that application. If no email app is configured, the page provides a Hostinger Webmail fallback. This is not a server-submitted form.

## Before publishing
Confirm product specifications, stock, safety/compliance statements, pack sizes and availability. Review privacy wording and company details. The website does not display wholesale prices or process orders/payments.


## Motion and interaction
The site includes animated hero entrance, floating product cards, a continuously scrolling catalogue ticker, timed hero image rotation, hover shine on product cards and buttons, scroll reveals, count-up metrics, and mobile-aware reduced-motion handling. Test with normal motion enabled; visitors who request reduced motion receive a simplified experience.
