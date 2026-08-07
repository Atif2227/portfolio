# Cleanup Audit

The project was scanned without changing or deleting any website files.

## Safe-to-review files

The following files were not referenced by active HTML or CSS during the scan. They may be old, duplicate, temporary, or intentionally retained. Do not delete them until they are visually checked and a backup exists.

### Empty or documentation files
- `assets/case-studies/Structure.txt`
- `assets/services/New Text Document.txt`

### Likely alternate or backup images
- `assets/hero/hero-illustration - 1.png`
- `assets/hero/hero-illustration.svg.svg`
- `assets/logo/logo-horizontal Extra.png`
- `assets/case-studies/hero/hero-illustration Extra.png`
- `assets/services/hero/services-hero-illustration small.png`

### Older or duplicated screenshot folders
- `assets/case-studies/gtci-demography/`
- Several older healthcare screenshots under `assets/case-studies/enterprise-healthcare-analytics/screenshots/`:
  - `inpatients.jpg`
  - `outpatients-performance.jpg`
  - `outpatients.jpg`
  - `procedures.jpg`
  - `revenue.jpg`
  - `suite-home.jpg`
  - `surgeries.jpg`

### Other unused candidates
- `assets/case-studies/healthcare-workforce-training-compliance/screenshots/dashboard-10.png`
- `assets/case-studies/microsoft-fabric/medallion-architecture.png`
- `assets/logo/logo-icon.png`
- `assets/logo/logo-stacked.png`

## Exact duplicate files found

Some thumbnails intentionally duplicate the first dashboard screenshot. This is normal and allows card images and gallery images to have independent paths.

Other exact duplicates include:
- `case-study-1.png` and `cards/enterprise-platform.png`
- `case-study-2.png` and `cards/fabric-etl.png`
- `case-study-4.png`, `cards/global-talent-competitiveness.png`, and the GTCI overview screenshot
- Several case-study card thumbnails and their first dashboard screenshot
- Workforce Training `dashboard-10.png` and `solution-architecture.png`

These duplicates should not be removed automatically because active pages may reference different copies.

## Missing linked pages

The scan found footer links to:
- `privacy-policy.html`
- `terms-of-use.html`

Those files are not present in the portfolio folder. These links currently lead to missing pages and should either be created later or commented out until the pages exist.

## Recommendation

Do not reorganize or delete files at this stage. The current website is working, and changing paths introduces avoidable risk. Use this audit as a controlled cleanup checklist after a full backup and visual verification.
