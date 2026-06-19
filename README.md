# Desipe Finance — Website

Corporate website for **Desipe Finance Private Limited**, parent of ShramStack and Bharat Bachat.
Built with **Vite + React + React Router**. Shares the ShramStack visual identity (Sora / DM Sans / JetBrains Mono, navy + blue-purple-teal-amber palette).

Pages: Home, Products, About, Contact.

## Run locally

```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs static files to ./dist
npm run preview    # preview the production build locally
```

The `dist/` folder is a plain static site — deploy it anywhere.

## Deploy

This is a single-page app, so the host must rewrite all routes to `index.html`.
Config files for the three common hosts are already included.

### Firebase Hosting (recommended — same as ShramStack)
```bash
# one time
npm install -g firebase-tools
firebase login
# set your project id in .firebaserc (replace REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID)
npm run build
firebase deploy --only hosting
```
`firebase.json` already points to `dist` and rewrites all routes to `index.html`.

### Vercel
Import the repo. Build command `npm run build`, output dir `dist`.
`vercel.json` handles SPA rewrites automatically.

### Netlify
Build command `npm run build`, publish dir `dist`.
`public/_redirects` handles SPA fallback automatically.

## Before going live — edit these

- **Contact form** (`src/pages/Contact.jsx`) is front-end only. Wire `send()` to your
  inbox/CRM (e.g. a Formspree endpoint, a Firebase function, or your API).
- **Email / address** placeholders: `hello@desipefinance.com`, Nizampet Hyderabad —
  search & replace with the real ones (in `Contact.jsx` and `Footer.jsx`).
- **Advocacy copy** in `src/pages/About.jsx` is deliberately careful (no live case
  numbers, no direct causation claims). Adjust to taste before publishing.

## Structure

```
src/
  main.jsx              # entry + BrowserRouter
  App.jsx               # routes, scroll-to-top, scroll-reveal
  styles.css            # full design system (one file)
  components/
    Navbar.jsx
    Footer.jsx
    StackCard.jsx       # the animated four-layer hero signature
    PhoneMockup.jsx     # variant="shramstack" | "bharatbachat"
    Sections.jsx        # PageHeader + CTABand (shared)
  pages/
    Home.jsx  Products.jsx  About.jsx  Contact.jsx
```

To change the stack content (layers, statuses, copy), edit the arrays at the top of
`Home.jsx` and `Products.jsx` — the components map over them.

---

## PayU resubmission checklist

The site now covers the standard payment-aggregator website requirements:

- [x] Privacy Policy — `/privacy`
- [x] Terms & Conditions — `/terms`
- [x] Cancellation & Refund Policy + service delivery — `/refund`
- [x] Pricing page — `/pricing`
- [x] Contact Us (email, phone, registered office, Grievance Officer) — `/contact`
- [x] All policy links working in the footer ("Legal" column)
- [x] Legal entity name + CIN in footer
- [x] No "waitlist / coming soon" language; operational CTAs (Login, Pricing, Get started)

**Fill these real values before resubmitting (search for the bracketed placeholders):**
- Registered office address — in `Contact.jsx` and `Privacy.jsx`
- Phone number — in `Contact.jsx`
- Real subscription prices — in `Pricing.jsx` (currently EXAMPLE values)
- Confirm the refund window in `Refund.jsx` matches your PayU agreement
- Point the `Login` button (`APP_URL` in `Navbar.jsx`) to the correct product login

**Have a lawyer review the policy pages** before they go live — these are solid
standard drafts, but a fintech entity should get them checked, especially the
refund terms and data/UPI clauses.
