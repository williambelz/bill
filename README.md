# Vocational Rehabilitation Accessibility Website

This repository contains a static website that highlights the role of accessibility in vocational rehabilitation programs. The pages are designed with WCAG 2.1 AA principles in mind and include a few JavaScript enhancements for improved usability.

## Project Structure

- **index.html** – Landing page titled "Empowering Everyone: Accessibility in Vocational Rehabilitation" with quick links and success stories.
- **about.html** – Background on vocational rehabilitation and its intersection with major accessibility laws.
- **resources.html** – List of federal and state resources, assistive technology programs, and legal aid links.
- **contact.html** – Simple form allowing visitors to ask for assistance or information.
- **glossary.md** – Definitions of common VR and accessibility terms.
- **legal-framework.md** – Overview of ADA, Sections 504/508 of the Rehabilitation Act, and WIOA.
- **scripts/accessibility.js** – Adds a button to toggle a high‑contrast mode for better readability.

The file `site/requirements` contains the full outline and accessibility checklist used when creating these pages.

## Getting Started

Because the site consists of static HTML files, you can open `index.html` directly in a browser or launch a lightweight server:

```bash
python3 -m http.server --directory site
```

Then visit `http://localhost:8000` to browse the site locally.

## Contributing

Feel free to submit pull requests that enhance the content or improve accessibility. Please ensure all pages remain keyboard navigable and provide adequate contrast.

