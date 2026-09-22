# Cosmetic Corner — Final Website

Static GitHub-ready website for Cosmetic Corner.

## Product catalog
- 46 Bremod products
- Exact prices supplied for the catalog
- Product images are stored locally under `assets/products/`
- No product card depends on a remote image URL

## Header update
The old order-threshold shipping message has been removed from the top ticker.

## Run
Open `index.html` in a browser or deploy the folder to GitHub Pages, Netlify or Vercel.


Product images are bundled locally under assets/products/p01.jpg through p46.jpg so the catalog renders without external image URLs.

## Premium motion layer (latest pass)
Added animations and transitions throughout — nothing was removed or restructured:
- Hero: slow continuous Ken Burns zoom on the photo, staggered entrance for headline/text/button/dots after the intro splash
- Intro splash: gold shimmer sweep on the wordmark
- Category circles: staggered entrance + image zoom on hover
- Promo bands: floating decorative circles, slowly rotating ring, hover lift
- Product cards: richer "drop in" entrance (was a plain 14px fade, now a fuller fall+settle), image zoom on hover, wishlist heart pop animation
- Benefits / promo / editorial / trust sections now fade up into view as you scroll (safe progressive enhancement — content is never hidden if animation fails to fire)
- WhatsApp button: continuous soft pulse glow
- Cart drawer rows animate in; product and checkout modals now pop in with a scale/fade instead of appearing instantly
- Footer links and all buttons got hover polish (lift + shadow)

Also fixed: the hero section was missing the id the WhatsApp-button-hides-over-hero script needed, so that existing
feature (button hidden while the hero photo is on screen) is now actually working.
