// ---------------------------------------------------------------
// Catalogue, loaded from the Books_Inventory spreadsheet.
// "category" is the book's genre, exactly as given in the sheet.
// "cover" is a placeholder photo — EDIT: replace each with your own
// image (e.g. save it as covers/perfect.jpg, then set
// cover: "covers/perfect.jpg").
// ---------------------------------------------------------------
const books = [
  { title: "Perfect", author: "Cecelia Ahern", category: "Fantasy", year: 2017, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "Fourth Wing", author: "Rebecca Yarros", category: "Fantasy", year: 2023, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "Scion of Ikshvaku", author: "AMISH", category: "Mythology / Fantasy", year: 2015, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "Delirium", author: "Lauren Oliver", category: "Fantasy", year: 2011, url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "Firestarter", author: "Stephen King", category: "Horror", year: 1992, url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "Different Seasons", author: "Stephen King", category: "Horror", year: 1982, url: "#", cover: "https://picsum.photos/id/1021/300/450" },
  { title: "The Outsider", author: "Albert Camus", category: "Philosophy", year: 1942, url: "#", cover: "https://picsum.photos/id/1024/300/450" },
  { title: "The Good Soldier", author: "Madox Ford", category: "Realism", year: 1915, url: "#", cover: "https://picsum.photos/id/1035/300/450" },
  { title: "I am Malala", author: "Malala Yousafzai", category: "Autobiography", year: 2013, url: "#", cover: "https://picsum.photos/id/1043/300/450" },
  { title: "What the Body Remembers", author: "Shauna Singh Baldwin", category: "Historical", year: 1999, url: "#", cover: "https://picsum.photos/id/1056/300/450" },
  { title: "Diary of a Wimpy Kid: Dog Days", author: "Jeff Kinney", category: "Children", year: 2009, url: "#", cover: "https://picsum.photos/id/1060/300/450" },
  { title: "Heaven & Earth", author: "Nora Roberts", category: "Romance", year: 2001, url: "#", cover: "https://picsum.photos/id/1074/300/450" },
  { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", category: "Historical", year: 2006, url: "#", cover: "https://picsum.photos/id/1084/300/450" },
  { title: "Private India", author: "Ashwin Sanghi & James Patterson", category: "Mystery", year: 2014, url: "#", cover: "https://picsum.photos/id/1082/300/450" },
  { title: "Misplaced Heads", author: "Jayanthi Sankar", category: "Historical", year: 2020, url: "#", cover: "https://picsum.photos/id/1080/300/450" },
  { title: "Not without my Daughter", author: "Betty Mahmoody & William Hoffer", category: "Autobiography", year: 1988, url: "#", cover: "https://picsum.photos/id/1077/300/450" },
  { title: "The Shadowhunter's Codex", author: "Cassandra Clare & Joshua Lewis", category: "Fantasy", year: 2013, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "The the Lighthouse", author: "Virginia Woolf", category: "Modernist Fiction", year: 1927, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "[Title unknown — fix in spreadsheet, row 19]", author: "Colleen Hoover", category: "Romance", year: 2015, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "Karyarath", author: "Anil Avchat", category: "Non-fiction", year: 1997, url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "The Invisible Detective - Web of Anubis", author: "Justin Richards", category: "Mystery", year: 2004, url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "The Witches", author: "Roald Dahl", category: "Children", year: 1983, url: "#", cover: "https://picsum.photos/id/1021/300/450" },
  { title: "The New Managerial Grid - Purpose, People, Power", author: "Blake & Mouton", category: "Self-help", year: 1985, url: "#", cover: "https://picsum.photos/id/1024/300/450" },
  { title: "Three Men in a Boat", author: "Jerome K Jerome", category: "Fiction", year: 1889, url: "#", cover: "https://picsum.photos/id/1035/300/450" },
  { title: "Flight Plan - The Real Secret of Success", author: "Brain Tracy", category: "Self-help", year: 2008, url: "#", cover: "https://picsum.photos/id/1043/300/450" },
  { title: "Arms and the Man", author: "George Bernard Shaw", category: "Realism", year: 1898, url: "#", cover: "https://picsum.photos/id/1056/300/450" },
  { title: "Romeo & Juliet", author: "William Shakespeare", category: "Romance", year: 1597, url: "#", cover: "https://picsum.photos/id/1060/300/450" },
  { title: "Young Sherlock - Nightbreak", author: "Andrew Lane", category: "Mystery", year: 2015, url: "#", cover: "https://picsum.photos/id/1074/300/450" },
  { title: "Selected stories by Katherine Mansfield", author: "Katherine Mansfield", category: "Fiction", year: 1948, url: "#", cover: "https://picsum.photos/id/1084/300/450" },
  { title: "Murder is Easy", author: "Agatha Christie", category: "Mystery", year: 1938, url: "#", cover: "https://picsum.photos/id/1082/300/450" },
  { title: "Animal Farm", author: "George Orwell", category: "Satire", year: 1945, url: "#", cover: "https://picsum.photos/id/1080/300/450" },
  { title: "Nancy Drew - Mardi Gras Maquerade", author: "Caroline Keene", category: "Mystery", year: 2008, url: "#", cover: "https://picsum.photos/id/1077/300/450" },
  { title: "I Who Have Never Known Men", author: "Jacqueline Harpman", category: "Dystopian", year: 1995, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "The Diary of a Young Girl", author: "Anne Frank", category: "Autobiography", year: 1947, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "The Secret History", author: "Donna Tartt", category: "Dystopian", year: 1992, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "Jane Eyre", author: "Charlotte Brönte", category: "Classic", year: 1847, url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "The Mother I Never Knew", author: "Sudha Murthy", category: "Fiction", year: 2014, url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "Blood on the Line", author: "Edward Marston", category: "Mystery", year: 2011, url: "#", cover: "https://picsum.photos/id/1021/300/450" },
  { title: "Deep Work", author: "Carl Newport", category: "Self-help", year: 2016, url: "#", cover: "https://picsum.photos/id/1024/300/450" },
  { title: "Collected Works - Agatha Christie", author: "Agatha Christie", category: "Mystery", year: 1975, url: "#", cover: "https://picsum.photos/id/1035/300/450" },
  { title: "The Hidden Hindu", author: "Akshat Gupta", category: "Mythology", year: 2022, url: "#", cover: "https://picsum.photos/id/1043/300/450" },
  { title: "Mansfield Park", author: "Jane Austen", category: "Classic", year: 1814, url: "#", cover: "https://picsum.photos/id/1056/300/450" },
  { title: "Emma", author: "Jane Austen", category: "Classic", year: 1815, url: "#", cover: "https://picsum.photos/id/1060/300/450" },
  { title: "Pride & Prejudice", author: "Jane Austen", category: "Classic", year: 1813, url: "#", cover: "https://picsum.photos/id/1074/300/450" },
  { title: "Sense & Sensibility", author: "Jane Austen", category: "Classic", year: 1811, url: "#", cover: "https://picsum.photos/id/1084/300/450" },
  { title: "The Hate you Give", author: "Angie Thomas", category: "Fiction", year: 2017, url: "#", cover: "https://picsum.photos/id/1082/300/450" },
  { title: "Collected Works - Agatha Christie (2)", author: "Agatha Christie", category: "Mystery", year: 1975, url: "#", cover: "https://picsum.photos/id/1080/300/450" },
  { title: "Everybody Loves a Good Drought", author: "P. Sainath", category: "Non-fiction", year: 1996, url: "#", cover: "https://picsum.photos/id/1077/300/450" },
  { title: "Divergent", author: "Veronica Roth", category: "Dystopian", year: 2011, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "9th Judgement", author: "James Patterson", category: "Mystery", year: 2010, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "Taylor Era by Era", author: "Caroline Sullivan", category: "Biography", year: 2024, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "Murder on the Christmas Express", author: "Alexandra Benedict", category: "Mystery", year: 2022, url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "The Tale of Two Cities", author: "Charles Dickens", category: "Classic", year: 1859, url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "Management Guide to Planning Time", author: "Kate Keenan", category: "Self-help", year: 2000, url: "#", cover: "https://picsum.photos/id/1021/300/450" },
  { title: "Gosht Mendha Gavachi", author: "Milind Bokil", category: "Fiction", year: 2012, url: "#", cover: "https://picsum.photos/id/1024/300/450" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Cobey", category: "Self-help", year: 1990, url: "#", cover: "https://picsum.photos/id/1035/300/450" },
  { title: "Fourth Eye - Excellence through Creativity", author: "Pradeep Khandwala", category: "Self-help", year: 1988, url: "#", cover: "https://picsum.photos/id/1043/300/450" },
  { title: "Brave New World", author: "Aldous Huxley", category: "Dystopian", year: 1932, url: "#", cover: "https://picsum.photos/id/1056/300/450" },
  { title: "The Climate Solution", author: "Mridula Ramesh", category: "Non-fiction", year: 2019, url: "#", cover: "https://picsum.photos/id/1060/300/450" },
  { title: "Lady Chatterley's Lover", author: "D.H.Lawrence", category: "Classic", year: 1928, url: "#", cover: "https://picsum.photos/id/1074/300/450" },
  { title: "It Happened One Summer", author: "Tessa Bailey", category: "Romance", year: 2021, url: "#", cover: "https://picsum.photos/id/1084/300/450" },
  { title: "The Book Thief", author: "Marcus Zusak", category: "War Fiction", year: 2005, url: "#", cover: "https://picsum.photos/id/1082/300/450" },
  { title: "The Adventures of Tom Sawyer", author: "Mark Twain", category: "Classic", year: 1876, url: "#", cover: "https://picsum.photos/id/1080/300/450" },
  { title: "Pandemonium", author: "Lauren Oliver", category: "Fantasy", year: 2012, url: "#", cover: "https://picsum.photos/id/1077/300/450" },
  { title: "Day of Reckoning", author: "Jack Higgins", category: "Mystery", year: 2000, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "The Man's Search for Meaning", author: "Viktor Frankl", category: "War Fiction", year: 1946, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "Silas Marner", author: "George Elliot", category: "Classic", year: 1861, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "Who Moved my Cheese", author: "Dr. Spencer Johnson", category: "Self-help", year: 1998, url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "Collected Works - Agatha Christie (3)", author: "Agatha Christie", category: "Mystery", year: 1976, url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "Vyayamashi Maitri Aarogyachi Khatri", author: "Rujuta Diwekar", category: "Self-help", year: 2014, url: "#", cover: "https://picsum.photos/id/1021/300/450" },
  { title: "1920s Omnibus", author: "Agatha Christie", category: "Mystery", year: 2006, url: "#", cover: "https://picsum.photos/id/1024/300/450" },
  { title: "Maximum City - Bombay Lost & Found", author: "Suketu Mehta", category: "Non-fiction", year: 2004, url: "#", cover: "https://picsum.photos/id/1035/300/450" },
  { title: "Jhumbar", author: "Prakash Sant", category: "Fiction", year: 2004, url: "#", cover: "https://picsum.photos/id/1043/300/450" },
  { title: "Parat Malbhumikade", author: "Dr. Sangram Patil", category: "Non-fiction", year: 2011, url: "#", cover: "https://picsum.photos/id/1056/300/450" },
  { title: "The Palace of Lost Dreams", author: "Charlotte Betts", category: "Romance", year: 2018, url: "#", cover: "https://picsum.photos/id/1060/300/450" },
  { title: "The Business", author: "Martina Cole", category: "Mystery", year: 2008, url: "#", cover: "https://picsum.photos/id/1074/300/450" },
  { title: "Ramrao - The Story of India's Farm Crisis", author: "Jaideep Haldikar", category: "Non-fiction", year: 2021, url: "#", cover: "https://picsum.photos/id/1084/300/450" },
  { title: "The Kite Runner", author: "Khaled Hosseini", category: "Fiction", year: 2003, url: "#", cover: "https://picsum.photos/id/1082/300/450" },
  { title: "Mahabharata", author: "Kamala Subramaniam", category: "Mythology", year: 1965, url: "#", cover: "https://picsum.photos/id/1080/300/450" },
  { title: "The Dose Effect", author: "TJ Power", category: "Self-help", year: 2025, url: "#", cover: "https://picsum.photos/id/1077/300/450" },
  { title: "What's Bread in the Bone?", author: "Robertson Davies", category: "Fiction", year: 1987, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "What got you Here won't get you There", author: "Marshall Goldsmith", category: "Self-help", year: 2007, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "A Book of Peace", author: "Elizabeth Goudge", category: "Poetry", year: 1967, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "The Shadowlines", author: "Amitabh Ghosh", category: "Historical", year: 1988, url: "#", cover: "https://picsum.photos/id/1018/300/450" },
  { title: "The Baby Dragon Cafe", author: "A.P.Qureshi", category: "Romance / Fantasy", year: 2025, url: "#", cover: "https://picsum.photos/id/1019/300/450" },
  { title: "Nirmal Manachi Premal Mansa", author: "Baburao Mali", category: "Non-fiction", year: 2018, url: "#", cover: "https://picsum.photos/id/1021/300/450" },
  { title: "The Little Book of Otter Philosophy", author: "Jennifer McCartney", category: "Self-help", year: 2019, url: "#", cover: "https://picsum.photos/id/1024/300/450" },
  { title: "Indian Superfoods", author: "Rujuta Diwaekar", category: "Self-help", year: 2016, url: "#", cover: "https://picsum.photos/id/1035/300/450" },
  { title: "Stree Purush Tulna", author: "Tarabai Shinde", category: "Non-fiction", year: 1882, url: "#", cover: "https://picsum.photos/id/1043/300/450" },
  { title: "A New Earth", author: "Eckhart Toole", category: "Self-help", year: 2005, url: "#", cover: "https://picsum.photos/id/1056/300/450" },
  { title: "The Spy who came in from the Cold", author: "John le Carré", category: "Mystery", year: 1963, url: "#", cover: "https://picsum.photos/id/1060/300/450" },
  { title: "A Portrait of the Artist as a Young Man", author: "James Joyce", category: "Classic", year: 1916, url: "#", cover: "https://picsum.photos/id/1074/300/450" },
  { title: "The Crown", author: "Kiera Cass", category: "Romance", year: 2016, url: "#", cover: "https://picsum.photos/id/1084/300/450" },
  { title: "Persuasion", author: "Jane Austen", category: "Classic", year: 1817, url: "#", cover: "https://picsum.photos/id/1082/300/450" },
  { title: "Mortal Instruments - City of Heavenly Fire (Book 6)", author: "Cassandra Clare", category: "Fantasy", year: 2014, url: "#", cover: "https://picsum.photos/id/1080/300/450" },
  { title: "Lord of Shadows - The Dark Artifices (Book 2)", author: "Cassandra Clare", category: "Fantasy", year: 2014, url: "#", cover: "https://picsum.photos/id/1077/300/450" },
  { title: "Chain of Thorns - The Last Hours (Book 3)", author: "Cassandra Clare", category: "Fantasy", year: 2023, url: "#", cover: "https://picsum.photos/id/1011/300/450" },
  { title: "Harry Potter and the Order of the Phoenix (Book 5)", author: "J.K.Rowling", category: "Fantasy", year: 2003, url: "#", cover: "https://picsum.photos/id/1015/300/450" },
  { title: "Harry Potter and the Half Blood Prince (Book 6)", author: "J.K.Rowling", category: "Fantasy", year: 2005, url: "#", cover: "https://picsum.photos/id/1016/300/450" },
  { title: "Harry Potter and the Deathly Hallows (Book 7)", author: "J.K.Rowling", category: "Fantasy", year: 2007, url: "#", cover: "https://picsum.photos/id/1018/300/450" }
];

const grid         = document.getElementById("book-grid");
const genreFilter  = document.getElementById("genre-filter");
const authorFilter = document.getElementById("author-filter");
const search       = document.getElementById("search");
const count        = document.getElementById("count");
const empty        = document.getElementById("empty");
const arrivals     = document.getElementById("new-arrivals-grid");
const shelf        = document.getElementById("book-shelf");

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
  const genre = genreFilter.value;
  const author = authorFilter.value;

  const matches = books.filter(function (b) {
    const inGenre = genre === "All" || b.category === genre;
    const inAuthor = author === "All" || b.author === author;
    const inSearch = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    return inGenre && inAuthor && inSearch;
  });

  grid.replaceChildren(...matches.map(makeCard));
  empty.hidden = matches.length > 0;
  count.textContent = matches.length + (matches.length === 1 ? " title" : " titles");
}

// Fills a <select> with "All ..." plus every distinct value from the
// catalogue, sorted alphabetically.
function fillDropdown(select, values, allLabel) {
  const options = ["All", ...values];
  select.replaceChildren(...options.map(function (value) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value === "All" ? allLabel : value;
    return opt;
  }));
}

function buildFilters() {
  const genres = [...new Set(books.map(function (b) { return b.category; }))].sort();
  const authors = [...new Set(books.map(function (b) { return b.author; }))].sort();

  fillDropdown(genreFilter, genres, "All genres");
  fillDropdown(authorFilter, authors, "All authors");
}

genreFilter.addEventListener("change", render);
authorFilter.addEventListener("change", render);

search.addEventListener("input", function () {
  query = search.value;
  render();
});

// New Arrivals: shows the 4 most recently published titles in the
// catalogue, by "year". EDIT: swap in a real "dateAdded" field and sort
// by that instead, once you're tracking when books actually joined the
// collection (publishing year isn't quite the same thing).
function renderNewArrivals() {
  if (!arrivals) return;
  const latest = books.slice().sort(function (a, b) {
    return (b.year || 0) - (a.year || 0);
  }).slice(0, 4);
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

// EDIT: how many spines to show — now that the catalogue has 100 books,
// this strip only shows a handful rather than all of them (a "peek",
// not the whole shelf). Change the number to show more or fewer.
const shelfCount = 14;

function renderShelf() {
  if (!shelf) return;

  const spines = books.slice(0, shelfCount).map(function (book, index) {
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

buildFilters();
render();
renderNewArrivals();
renderShelf();
