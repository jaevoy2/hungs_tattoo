# Hung's Tattoo Parlor

A static single-page website for Hung's Tattoo Parlor (Saint Paul, MN), built with React, Vite and framer-motion.

## Features

- Parallax hero, plus fixed-background parallax sections
- Scroll-triggered entrance animations on every section
- About section with artist profiles (Hung and Trish)
- Photo gallery, services, booking banner
- Contact section with address, phone, email, social links (Instagram, Facebook, TikTok), contact form and Google Map
- Visit notification email (production only, see below)

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Project structure

```
api/visit.js        Serverless function that emails visit notifications
public/images/      All site photos (served at /images/...)
src/App.jsx         All sections and content data (artists, services, hours, contact info)
src/styles.css      Theme (CSS variables at the top) and layout
index.html          Page shell, fonts, favicon
```

## Editing content

- **Contact details, social links, map address:** constants at the top of `src/App.jsx` (`IG`, `FB`, `TT`, `EMAIL`, `PHONE`, `ADDRESS`).
- **Artists, services, gallery, hours:** the `ARTISTS`, `SERVICES`, `WORK` and `HOURS` arrays in `src/App.jsx`.
- **Colors:** `--accent` and the other variables in `:root` in `src/styles.css`.
- **Photos:** drop files into `public/images/` and reference them by filename. Missing images show a striped placeholder.
- **Hero crop:** adjust `object-position` on `.hero-bg img` in `src/styles.css`.

## Contact form

The site has no backend for the form. Submitting opens the visitor's email app with a message addressed to the shop's email. To send directly from the page, connect a form service such as Formspree.

## Visit notification email

When the live site is opened, `api/visit.js` emails `francis@creativedevlabs.com` the visitor's IP address, approximate location, device, browser and time.

- Written for **Vercel** serverless functions and sends through [Resend](https://resend.com).
- Sent once per browser session, skips bots, and never runs in `npm run dev`.
- IP and location come from Vercel's request headers (no third-party tracking).

Set these environment variables in your Vercel project (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (required) |
| `NOTIFY_TO` | Recipient, defaults to `francis@creativedevlabs.com` |
| `NOTIFY_FROM` | Sender on a domain verified in Resend. Resend's default sender can only email your own account address |

A footer line tells visitors that basic visit information is recorded. Keep it, since collecting IP addresses and locations can be covered by privacy laws such as GDPR and CCPA.

## Deployment

1. Push the project to a Git repository and import it into Vercel (framework preset: Vite).
2. Add the environment variables above.
3. Deploy. The `api/` folder is picked up automatically.

Hosting elsewhere works for the static site, but `api/visit.js` would need to be rewritten for that host.

## Credits

- Shop and artist photos: [hungstattooparlor.com](https://www.hungstattooparlor.com)
- Hero photo: Chu CHU on [Unsplash](https://unsplash.com/photos/man-with-extensive-back-tattoos-flexing-arm-fgoy96r0JGE)
