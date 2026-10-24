# Bayu Aji Portfolio

## Preview locally

```powershell
npm install
npm run dev
```

## Publish once with Netlify Drop

1. Run `npm run build`.
2. Sign in to Netlify and open `https://app.netlify.com/drop`.
3. Drag the `dist` folder from this project into the page.
4. Netlify will provide a public URL that stays available when this computer is off.

To publish changes later, run the build again and upload the new `dist` folder to the same Netlify site.

## Automatic updates

Create a GitHub repository for this project and import that repository in Netlify. Netlify reads `netlify.toml`, builds with `npm run build`, and publishes `dist`. After the initial GitHub and Netlify connection, pushing a change to the repository triggers a new deployment automatically.

## Routes

The `public/_redirects` file keeps project detail routes working when someone opens or refreshes their URL directly.