# PixelVault — Premium Image Gallery

A modern, production-quality image gallery built with vanilla HTML5, CSS3, and JavaScript. Features a masonry layout, lightbox, slideshow, dark/light theme, and comprehensive keyboard accessibility.

## Features

- **Masonry Grid** — Dynamic column-based layout using CSS columns
- **Lightbox** — Fullscreen modal with zoom, navigation, and captions
- **Category Filters** — Filter by Nature, City, Animals, Technology, Travel, Food
- **Search** — Instant client-side search by image title
- **Slideshow** — Auto-play with configurable speed (2s–8s)
- **Favorites** — Heart icon with LocalStorage persistence
- **Image Download** — One-click download from lightbox
- **Fullscreen Mode** — Toggle browser fullscreen
- **Image Zoom** — Click-to-zoom in lightbox
- **Shuffle** — Randomize gallery order
- **Dark / Light Theme** — Toggle with LocalStorage persistence
- **Loading Skeleton** — Animated placeholder while assets load
- **Animated Counters** — Eased number transitions on load
- **Scroll-to-Top** — Button with progress ring
- **Keyboard Navigation** — Arrow keys, Esc, full accessibility
- **Responsive** — 4–5 columns desktop, 3 tablet, 2 mobile, 1 small mobile
- **Lazy Loading** — Native `loading="lazy"` on all images
- **Glassmorphism** — Frosted glass header and UI elements

## Folder Structure

```
image-gallery/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## How to Run

Simply open `index.html` in any modern browser. No build tools or server required.

```bash
# Clone the repository
git clone https://github.com/maddurvignesh/image-gallery.git

# Navigate into the directory
cd image-gallery

# Open in browser (Windows)
start index.html

# Or macOS
open index.html

# Or Linux
xdg-open index.html
```

## Live Demo

[https://image-gallery-pied-five.vercel.app/](https://image-gallery-pied-five.vercel.app/)

## Future Enhancements

- Upload your own images via drag & drop
- User accounts and cloud storage integration
- Advanced image editing filters
- Social sharing
- Infinite scroll pagination
- Print-quality image download
- EXIF data viewer
- Bulk download as ZIP

## Author

**Maddur Vignesh** — [github.com/maddurvignesh](https://github.com/maddurvignesh)

> Built as part of the **CodeAlpha Internship Program**.

## Tech Stack

- HTML5
- CSS3 (CSS Grid, Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6
- Google Fonts (Inter, Poppins)

## License

MIT
