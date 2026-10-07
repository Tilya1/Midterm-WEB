# AniVerse — Anime & Manga Fan Website

**Topic:** Anime / Manga fan website

**Group members:**
- Zhumagaliyev Aktilek
- Babassov Alibek
- Meiirkhan Abilda

**Website link:** https://tilya1.github.io/Midterm-WEB/

## Description

AniVerse is a multi-page responsive website for anime and manga fans. Users can see popular anime, read about manga, check the top rating, look at the gallery and join the fan club with a form. The website has a black and purple theme.

## Pages

1. **Home** (`index.html`) — welcome block and popular anime cards
2. **Anime** (`anime.html`) — catalog of 11 anime
3. **Manga** (`manga.html`) — manga list with authors and genres
4. **Top** (`top.html`) — rating table of the best anime
5. **Gallery** (`gallery.html`) — posters with caption on hover
6. **Contact** (`contact.html`) — form to join the fan club and contacts

## Features implemented

- Navigation bar on all pages (`<header>` with logo and menu, made with **Flexbox**)
- Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Headings, paragraphs, lists (`ul`, `ol`), links and images
- **Table** — top anime rating (`top.html`)
- **Form** — join the club (`contact.html`)
- **External CSS** — `css/style.css`, class selectors
- **Box model** — margin, padding, border
- **Flexbox** — header, navigation, manga items
- **Grid** — anime catalog and gallery
- **Positioning** — `position: relative` + `absolute` for gallery captions
- `:hover` effects on links, buttons, cards and gallery
- **Media queries** for tablet (992px) and mobile (576px): header becomes vertical, grid items stack, font size and padding become smaller
- **Bootstrap** grid (`container`, `row`, `col-12 col-md-6 col-lg-4`)

## Technologies used

- HTML5
- CSS3 (external file `css/style.css`)
- Bootstrap 5.3
- GitHub Pages

## Individual contribution

| Member | Work |
|---|---|
| Zhumagaliyev Aktilek | Home page, Top page (table), header and footer, GitHub Pages |
| Babassov Alibek | Anime page (Grid catalog), Manga page (lists) |
| Meiirkhan Abilda | Gallery page (positioning, hover captions), Contact page (form), media queries |

## Project structure

```
index.html
anime.html
manga.html
top.html
gallery.html
contact.html
css/style.css
images/
README.md
```
