# Elsman UK Ltd — launch checklist

## Website identity
- [x] Company name: Elsman UK Ltd
- [x] Contact email: hello@elsman.co.uk
- [x] Vibrant visual direction: cobalt blue, orange, lime, yellow and warm neutrals
- [x] Supplied product images included
- [x] Responsive catalogue, filters, search, product detail dialogs and FAQs
- [x] Enquiry email pre-filled to hello@elsman.co.uk

## Must complete before public launch
- [ ] Confirm the domain `elsman.co.uk` is registered and DNS points to the Hostinger website.
- [ ] Confirm the correct legal entity details and registered office address for the footer/legal pages.
- [ ] Add a business telephone number if you want calls.
- [ ] Confirm each product's exact commercial name, description, pack size, specifications, age guidance and compliance/safety information.
- [ ] Confirm whether the images supplied are approved for public marketing use and accurately depict the products being sold.
- [ ] Add a reviewed Privacy Notice explaining the data controller, enquiry data, purposes, lawful basis, recipients, retention, rights and contact route.
- [ ] Add appropriate terms of trade, delivery, returns and complaints information for your B2B sales model.
- [ ] Check whether any non-essential cookies, analytics, pixels or embedded third-party services are added; configure consent where required.
- [ ] Test the enquiry flow on devices with and without a configured email app.
- [ ] Test keyboard navigation, contrast, mobile layout, image loading and broken links.
- [ ] Enable SSL/HTTPS and verify the domain redirects to HTTPS.
- [ ] Set up a backup and keep the GitHub repository as the source of truth.

## Important form limitation
The current enquiry form uses a `mailto:` link. It opens the visitor's email application with a prepared message; it does not submit to a server, store leads, or guarantee delivery. Before depending on the form for business enquiries, connect a form backend or server-side handler, test spam protection, and update the privacy notice to match the actual data flow.

## Product and regulatory checks
Do not publish unverified claims such as "8-month protection", "safe", "eco-friendly", "water resistant", age suitability, certification or performance statements unless the product documentation substantiates them. Confirm relevant UK product safety, labelling, traceability and importer/distributor responsibilities for each product category before sale.

## Deployment using Hostinger Git integration
This project is a static HTML/CSS/JavaScript website. Hostinger's current Git integration supports custom PHP and HTML websites on eligible Web and Cloud hosting plans:
1. Push the contents of this project to the root of a GitHub repository. `index.html` must be at repository root.
2. In Hostinger hPanel, open Websites → Manage site → Advanced → Git.
3. Connect GitHub using the Hostinger authorisation flow.
4. Select the repository and `main` branch.
5. Set the deployment root to `public_html` and deploy.
6. Enable auto-deployment for the selected branch if desired.
7. Verify the deployment status in Hostinger and test the live domain.
8. Make future edits in GitHub and push to the selected branch; do not manually edit deployed files if Git auto-deployment will overwrite them.

Official guide: https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/

## Suggested final smoke tests
- Home, Products, About, How we work, FAQs and Contact navigation
- Product category buttons and search
- Product detail modal open/close
- Product-specific enquiry buttons
- Required form validation and email address recipient
- Desktop width, tablet width and mobile width
- HTTPS certificate and no mixed-content warnings
