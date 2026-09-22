// ---------------------------------------------------------------
// Sample catalogue. Replace these with your own titles.
// "url" is where the Read button goes; "#" is a placeholder.
// "cover" is the book's cover photo — EDIT: replace each placeholder link
// with your own image (e.g. save it as covers/pride-and-prejudice.jpg,
// then set cover: "covers/pride-and-prejudice.jpg").
// ---------------------------------------------------------------
const books = [
  { title: "Pride and Prejudice",      author: "Jane Austen",      category: "Fiction",    url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "On the Origin of Species", author: "Charles Darwin",   category: "Science",    url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "Leaves of Grass",          author: "Walt Whitman",     category: "Poetry",     url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "The Histories",            author: "Herodotus",        category: "History",    url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "Meditations",              author: "Marcus Aurelius",  category: "Philosophy", url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "Roget's Thesaurus",        author: "Peter Mark Roget", category: "Reference",  url: "#", cover: "https://picsum.photos/id/1021/300/450" }
];

const grid       = document.getElementById("book-grid");
const chipsBox   = document.getElementById("chips");
const search     = document.getElementById("search");
const count      = document.getElementById("count");
const empty      = document.getElementById("empty");
const arrivals   = document.getElementById("new-arrivals-grid");
const shelf      = document.getElementById("book-shelf");

let activeCategory = "All";
let query = "";

// Small helper to build an element with a class and text
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function makeCard(book, index) {
  const card = el("article", "card book");

  const cover = el("div", "cover cover-" + (index % 4));
  const coverPhoto = document.createElement("img");
  coverPhoto.className = "book-cover-photo";
  coverPhoto.src = book.cover;
  coverPhoto.alt = "Cover of " + book.title;
  cover.append(coverPhoto);

  const body = el("div", "book-body");
  body.append(
    el("h3", "", book.title),
    el("p", "book-author", book.author),
    el("span", "tag", book.category)
  );

  const link = el("a", "btn btn-small", "Read");
  link.href = book.url;
  body.append(link);

  card.append(cover, body);
  return card;
}

function render() {
  const q = query.trim().toLowerCase();

  const matches = books.filter(function (b) {
    const inCategory = activeCategory === "All" || b.category === activeCategory;
    const inSearch = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    return inCategory && inSearch;
  });

  grid.replaceChildren(...matches.map(makeCard));
  empty.hidden = matches.length > 0;
  count.textContent = matches.length + (matches.length === 1 ? " title" : " titles");
}

function buildChips() {
  const categories = ["All", ...new Set(books.map(function (b) { return b.category; }))];

  categories.forEach(function (name) {
    const chip = el("button", "chip", name);
    chip.type = "button";
    chip.setAttribute("aria-pressed", name === activeCategory ? "true" : "false");

    chip.addEventListener("click", function () {
      activeCategory = name;
      chipsBox.querySelectorAll(".chip").forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      render();
    });

    chipsBox.append(chip);
  });
}

search.addEventListener("input", function () {
  query = search.value;
  render();
});

// New Arrivals: a small teaser row on the homepage.
// EDIT: change this number, or swap in a real "dateAdded" field and sort by it,
// once your catalogue is bigger than the sample list above.
function renderNewArrivals() {
  if (!arrivals) return;
  const latest = books.slice(0, 4);
  arrivals.replaceChildren(...latest.map(makeCard));
}

// ---------------------------------------------------------------
// Decorative shelf strip: a row of book "spines" for show only.
// Clicking does nothing on purpose. Hovering (or tabbing to one with a
// keyboard) lifts the spine, plays a soft pop sound, and shows its title.
// ---------------------------------------------------------------

// A tiny synthesised "pop" — no audio file needed. Browsers block sound
// until the visitor has interacted with the page at least once, so the
// very first hover before any click may be silent; that's normal and
// not a bug.
let audioCtx = null;
function unlockAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return; // very old browser: skip sound entirely
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
}
document.addEventListener("pointerdown", unlockAudio, { once: true });
document.addEventListener("keydown", unlockAudio, { once: true });

function playPop() {
  if (!audioCtx || audioCtx.state !== "running") return;
  const t0 = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(260, t0);
  osc.frequency.exponentialRampToValueAtTime(520, t0 + 0.09);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(0.16, t0 + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.16);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t0);
  osc.stop(t0 + 0.18);
}

// EDIT: heights (in px) each spine cycles through, for a playful uneven
// shelf look — add/remove numbers or change them freely.
const spineHeights = [150, 128, 168, 138, 158, 120];

function renderShelf() {
  if (!shelf) return;

  const spines = books.map(function (book, index) {
    const spine = document.createElement("button");
    spine.type = "button"; // no href, no navigation — this is decorative only
    spine.className = "spine spine-" + (index % 4);
    spine.style.height = spineHeights[index % spineHeights.length] + "px";
    spine.setAttribute("aria-label", book.title + " — decorative, not clickable");

    const tooltip = el("span", "spine-tooltip", book.title);
    tooltip.setAttribute("aria-hidden", "true"); // title is already in aria-label above
    spine.append(tooltip);

    spine.addEventListener("mouseenter", playPop);
    spine.addEventListener("focus", playPop);

    // Explicitly do nothing on click/activation — for show only.
    spine.addEventListener("click", function (e) { e.preventDefault(); });

    return spine;
  });

  shelf.replaceChildren(...spines);
}

document.getElementById("year").textContent = new Date().getFullYear();

buildChips();
render();
renderNewArrivals();
renderShelf();
