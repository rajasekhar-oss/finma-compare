# FINMA Sanity CMS setup

The website now reads all English and French copy from one Sanity document named `Website Content`. Local translation values remain as safe fallbacks if Sanity is temporarily unavailable.

## 1. Install and seed the CMS

From the project root in PowerShell:

```powershell
npm install
cd studio
npm install
npx sanity exec scripts/seedSiteContent.ts --with-user-token
npm run dev
```

Run the seed command only once for the initial migration. It replaces the `siteContent` document with the text stored in the code, so do not run it again after editors begin changing content in Sanity.

Open `http://localhost:3333`, choose `Website Content`, edit English or French fields, and click Publish. The old `Homepage` document is no longer used.

## 2. Run the website locally

The root `.env.local` must contain:

```text
VITE_SANITY_PROJECT_ID=dbb97ars
VITE_SANITY_DATASET=production
```

Then run:

```powershell
cd "C:\Users\user\Downloads\FINMA Launchpad"
npm run dev
```

## 3. Deploy Sanity Studio

```powershell
cd studio
npx sanity deploy
```

Choose a Studio hostname when prompted. Editors will use that hosted Sanity URL; InterServer does not need to run the Studio.

Add the production website origins and answer `No` when asked about credentials:

```powershell
npx sanity cors add https://finma.ca
npx sanity cors add https://www.finma.ca
```

## 4. Deploy the website to InterServer

First back up the existing WordPress files and database, or deploy to a staging subdomain. Then:

```powershell
cd "C:\Users\user\Downloads\FINMA Launchpad"
npm run build
```

In cPanel File Manager, open the document root for `finma.ca` (`/finma.ca` in the current account) and upload the contents inside `dist`, including the generated `.htaccess`. Do not upload the `dist` folder itself. Confirm that `index.html` is directly inside `/finma.ca`.

The deployed static site requests published content directly from Sanity. Future text changes only require editing and publishing in Sanity; the React site does not need to be rebuilt unless the code or design changes.
