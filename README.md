# Tina Gerlich Portfolio

A clean Next.js portfolio site ready for Vercel.

## Contact form setup

The contact form sends email from the server through [Resend](https://resend.com), so no API key or private recipient address is exposed in the browser.

Create a `.env.local` file for local development (it is ignored by Git):

```text
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=your-inbox@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <contact@your-verified-domain.com>
```

- `RESEND_API_KEY`: Create this in the Resend dashboard.
- `CONTACT_TO_EMAIL`: Tina's private destination email address.
- `CONTACT_FROM_EMAIL`: An address on a domain verified in Resend. For initial testing, use Resend's permitted test sender.

In Vercel, add the same three values under **Project Settings → Environment Variables**, enable them for Production (and Preview if desired), then redeploy. Never commit `.env.local` or the API key.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import the project into Vercel from GitHub, or upload the project through the Vercel dashboard. Vercel will detect Next.js automatically.
