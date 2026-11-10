# AniVerse — Anime & Manga Fan Website

**Topic:** Anime / Manga fan website

**Group members:**
- Zhumagaliyev Aktilek
- Babassov Alibek
- Meiirkhan Abilda

**Website link:** https://tilya1.github.io/Midterm-WEB/

## Description

AniVerse is a multi-page responsive website for anime and manga fans. Users can see popular anime, read about manga, check the top rating and look at the gallery. The website has a black and purple theme.

For the endterm we added JavaScript and jQuery: a registration form with validation, search and filter on the anime catalog, a watchlist table with add / edit / delete, and a lightbox for the gallery.

## Pages

1. **Home** (`index.html`) — welcome block and popular anime cards
2. **Anime** (`anime.html`) — catalog of 11 anime with search and genre filter
3. **Manga** (`manga.html`) — manga list with authors and genres
4. **Top** (`top.html`) — rating table of the best anime and the Watchlist table (CRUD)
5. **Gallery** (`gallery.html`) — posters with caption on hover and a lightbox
6. **Register** (`register.html`) — registration form with validation

## Features implemented

### Midterm (HTML, CSS, Bootstrap)

- Navigation bar on all pages (`<header>` with logo and menu, made with **Flexbox**)
- Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Headings, paragraphs, lists (`ul`, `ol`), links and images
- **Table** — top anime rating (`top.html`)
- **External CSS** — `css/style.css`, class selectors
- **Box model** — margin, padding, border
- **Flexbox** — header, navigation, manga items
- **Grid** — anime catalog and gallery
- **Positioning** — `position: relative` + `absolute` for gallery captions
- `:hover` effects on links, buttons, cards and gallery
- **Media queries** for tablet (992px) and mobile (576px)
- **Bootstrap** grid (`container`, `row`, `col-12 col-md-6 col-lg-4`)

### Endterm (JavaScript and jQuery, `js/script.js`)

**1. Form validation** (`register.html`)
- Required checks for name, email, password and confirm password
- Email is checked with a RegEx: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Password strength bar: **Weak** (red), **Medium** (yellow), **Strong** (green)
- Confirm password must be the same as the password
- Real-time feedback while typing: Bootstrap `is-valid` / `is-invalid` (green check or red text)
- On submit with errors the form is not sent and a red Bootstrap alert appears; with correct data a green alert appears

**2. Search and filter** (`anime.html`)
- Search bar filters anime cards while typing (`.on("keyup")`)
- Buttons **All / Action / Adventure / Sports** filter by genre
- Search and genre buttons work together, search is case-insensitive
- If nothing is found, the text "No anime found." is shown

**3. Watchlist table — CRUD** (`top.html`)
- **Create:** fill the form and press Add
- **Read:** the table is built from a JavaScript array
- **Update:** press Edit, the data goes to the form, change it and press Save
- **Delete:** press Delete and confirm in the `confirm()` window

**4. Gallery lightbox** (`gallery.html`)
- Pictures appear one by one with `.fadeIn()`
- Click on a picture opens it big in a dark lightbox
- Arrows ❮ ❯ go to the previous / next picture with `.fadeOut()` and `.fadeIn()`
- The caption appears with `.animate()`
- Close with × or by clicking on the dark background

## Technologies used

- HTML5
- CSS3 (external file `css/style.css`)
- Bootstrap 5.3
- JavaScript
- jQuery 3.7.1
- GitHub Pages

## Individual contribution

| Member | Midterm | Endterm |
|---|---|---|
| Zhumagaliyev Aktilek | Home page, Top page (table), header and footer, GitHub Pages | Registration form validation, Watchlist CRUD table, README |
| Babassov Alibek | Anime page (Grid catalog), Manga page (lists) | Search bar and genre filter on the Anime page |
| Meiirkhan Abilda | Gallery page (positioning, hover captions), media queries | Gallery lightbox with arrows and fade effects |

## Project structure

```
index.html
anime.html
manga.html
top.html
gallery.html
register.html
css/style.css
js/script.js
images/
README.md
```
