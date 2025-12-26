
// =========================
// HELPER FUNCTIONS
// =========================

// Normalize string: lowercase + remove accents
function normalize(text){
  return text.toLowerCase();
}

// Debounce utility si aysan search-ka u socon markasta typing
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
}

// =========================
// SEARCH FUNCTION
// =========================
function searchBooks(query) {
  const q = normalize(query);

  // Hel dhamaan book cards
  const books = document.querySelectorAll('.book-card');
  
  books.forEach(book => {
    const title = book.querySelector('h3').textContent;
    const price = book.querySelector('p').textContent;
    const content = title + " " + price;

    // Haddii content-ka uu ka kooban yahay query-ga, muuji, haddii kale qari
    if(normalize(content).includes(q)){
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}

// =========================
// CONNECT INPUTS
// =========================
const searchInput = document.getElementById('search');
const searchMobile = document.getElementById('search-mobile');

// Ku dar debounce si typing-ka uusan u overload garayn
const debouncedSearch = debounce((e) => {
  searchBooks(e.target.value);
}, 200);

searchInput.addEventListener('input', debouncedSearch);
searchMobile.addEventListener('input', debouncedSearch);


