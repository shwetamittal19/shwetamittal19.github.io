# Shweta Mittal — portfolio

A static site: no build step. Open `index.html` through any web server, or upload the whole folder to a static host.

- `js/data.js` holds all the text: work, experience, courses, skills. Edit it and refresh.
- `files/` holds the case study files that cards open. To remove one, delete its entry from `files: [...]` in `js/data.js` and delete the file.
- `img/life/` holds the "Beyond work" photos.
- To add a headshot, save it as `img/profile.jpg` and set `PROFILE.photo` in `js/data.js`.
- Every case study has its own link, for example `…/#work/shopsight`.

Preview locally:

    python3 -m http.server 4173

then open http://localhost:4173
