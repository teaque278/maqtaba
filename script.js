// ---------------------------------------------------------------
// Sample catalogue. Replace these with your own titles.
// "url" is where the Read button goes; "#" is a placeholder.
// ---------------------------------------------------------------
const books = [
  { title: "Pride and Prejudice",      author: "Jane Austen",      category: "Fiction",    url: "#" },
  { title: "On the Origin of Species", author: "Charles Darwin",   category: "Science",    url: "#" },
  { title: "Leaves of Grass",          author: "Walt Whitman",     category: "Poetry",     url: "#" },
  { title: "The Histories",            author: "Herodotus",        category: "History",    url: "#" },
  { title: "Meditations",              author: "Marcus Aurelius",  category: "Philosophy", url: "#" },
  { title: "Roget's Thesaurus",        author: "Peter Mark Roget", category: "Reference",  url: "#" }
];

const grid       = document.getElementById("book-grid");
const chipsBox   = document.getElementById("chips");
const search     = document.getElementById("search");
const count      = document.getElementById("count");
const empty      = document.getElementById("empty");
const arrivals   = document.getElementById("new-arrivals-grid");

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

  const cover = el("div", "cover cover-" + (index % 4), book.title.charAt(0));
  cover.setAttribute("aria-hidden", "true");

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

document.getElementById("year").textContent = new Date().getFullYear();

buildChips();
render();
renderNewArrivals();
