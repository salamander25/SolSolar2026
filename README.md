# SolSolar Marketing Website

## Run Instructions
- `python3 -m http.server 4173`
- Open `http://localhost:4173`

## File Structure
- `index.html` home/landing page
- `pages/` solution, about, contact pages
- `legal/` compliance pages
- `css/styles.css` theme and responsive layout
- `js/main.js` mobile navigation behavior

## Customization
- Branding: update colors/typography in `css/styles.css`
- Copy: edit each page HTML content blocks
- Legal text: update documents in `legal/`

## Form + Live Chat Integration
- Search for integration comments in `index.html`:
  - Calendly embed point
  - WhatsApp deep link
  - CRM/webhook submission endpoint
  - AI chatbot widget mount
- For production, bind forms to your CRM endpoint and include server-side validation and consent logging.
