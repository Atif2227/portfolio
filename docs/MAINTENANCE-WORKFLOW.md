# Website Maintenance Workflow

## Adding a new case study

1. Create the individual HTML page in the project root.
2. Add its card to `case-study.html`.
3. Add a thumbnail to `assets/case-studies/cards/`.
4. Create a project-specific screenshot folder under `assets/case-studies/`.
5. Use `css/individual-case-study.css`.
6. Verify all internal links.
7. Test desktop, tablet, and mobile views.

## Editing a service

- Content: `services.html`
- Styling: `css/services-page.css`
- Home-page preview styling: `css/services.css`

## Editing the navigation

- HTML navigation appears in each page.
- Styling: `css/navbar.css`
- Mobile behavior: `js/navbar.js`

Because this is a static HTML website, navigation changes must normally be repeated across all HTML pages.

## Editing the footer

- Footer markup appears in each HTML page.
- Shared styling: `css/footer.css`

## Replacing Power BI or YouTube placeholders

Search the project for:
- `REPLACE_WITH_PUBLIC_EMBED_LINK`
- the generic YouTube embed URL

Replace only the relevant project page URL and test it after deployment.

## Before deleting a file

Search all `.html`, `.css`, and `.js` files for the filename. A file that appears unused may still be needed by a page not currently linked in navigation.
