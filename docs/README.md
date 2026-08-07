# Portfolio Website — Maintenance Guide

This folder contains the complete portfolio website for Atif Noorul Hasan.

## Important decision

The current file and folder structure has **not been reorganized**. Moving HTML, CSS, JavaScript, or image files would require updating many relative paths and could break the live GitHub Pages website.

Documentation has instead been added under `docs/` so the website remains unchanged and future updates are easier.

## Main website pages

- `index.html` — Home page
- `services.html` — Services page
- `case-study.html` — Main Case Studies listing page
- `about.html` — About page
- `contact.html` — Contact page

## Individual case-study pages

Each case-study HTML file is stored in the website root. Its related screenshots and thumbnail are stored under `assets/case-studies/`.

## Stylesheets

All active CSS files are under `css/`. They are already categorized by page or section:

- `navbar.css` — Header and navigation
- `footer.css` — Footer
- `hero.css` — Home hero
- `what-i-do.css` — Home “What I Do”
- `problems.css` — Problems section
- `services.css` — Home services preview
- `services-page.css` — Full Services page
- `case-studies.css` — Case-study cards/listing
- `case-study-page.css` — Main Case Studies page layout
- `individual-case-study.css` — Individual case-study pages
- `about-page.css` — About page
- `contact-page.css` — Contact page
- `industries.css` — Industries section
- `technology-stack.css` — Technology section
- `cta.css` — Reusable CTA sections

## JavaScript

- `js/navbar.js` — Mobile navigation and menu behavior

## Assets

- `assets/logo/` — Brand logos
- `assets/hero/` — Home hero images
- `assets/what-i-do/` — What I Do illustration
- `assets/services/` — Services page images
- `assets/case-studies/` — Case-study thumbnails, architecture images, pipelines, and screenshots
- `assets/about/` — About-page profile image

## Safe update rules

1. Keep filenames and paths unchanged unless every related HTML/CSS reference is updated.
2. Before deleting an image, search the entire project for its filename.
3. Keep a backup ZIP before every major update.
4. Test locally before uploading to GitHub.
5. After deployment, check the browser console and Network tab for missing files.
6. Use lowercase filenames with hyphens for new files.
7. Store new case-study screenshots in a dedicated folder under `assets/case-studies/`.

See the other files in this folder for the detailed inventory and cleanup review.
