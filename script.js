// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if(hamburger){
  hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}

// Mini-books page d'accueil (3 livres)
const miniBooksContainer = document.querySelector('.mini-books');
if(miniBooksContainer){
  for(let i = 1; i <= 3; i++){
    const miniBook = document.createElement('div');
    miniBook.className = 'mini-book fade-up-init';
    miniBook.innerHTML = `
      <img src="assets/livre${i}.jpg" alt="Livre ${i}">
      <div class="mini-book-title"><strong>Livre ${i}</strong></div>
    `;
    miniBooksContainer.appendChild(miniBook);
  }
}

// Pack books 20 (apercu)
const packBooks = document.getElementById('packBooks');
if(packBooks){
  for(let i = 1; i <= 20; i++){  // 20 livres pour aperçu
    const bookCard = document.createElement('div');
    bookCard.className = 'pack-book-card fade-up-init';
    bookCard.innerHTML = `
      <img src="assets/livre${i}.jpg" alt="Livre ${i}">
      <div class="pack-book-title"><strong>Livre ${i}</strong></div>
    `;
    packBooks.appendChild(bookCard);
  }
}

// Avis clients (minimum 10 avis)
const reviewsList = document.getElementById('reviewsList');
if(reviewsList){
  const avis = [
    {author:"Alice", text:"Super pack, j'ai beaucoup appris !"},
    {author:"Bob", text:"Livres variés et instructifs."},
    {author:"Chloé", text:"Contenu de qualité, je recommande."},
    {author:"David", text:"Excellent investissement pour seulement 25 000 FCFA."},
    {author:"Emma", text:"Très satisfait, pack complet et utile."},
    {author:"Fabrice", text:"Des livres pratiques pour mon business."},
    {author:"Gisèle", text:"Idéal pour améliorer mes compétences en marketing."},
    {author:"Hugo", text:"Je recommande ce pack à tous mes amis."},
    {author:"Isabelle", text:"Pack bien structuré et riche en contenu."},
    {author:"Jean", text:"Livres très inspirants et faciles à lire."}
  ];

  avis.forEach(a => {
    const card = document.createElement('div');
    card.className = 'review-card fade-up-init';
    card.innerHTML = `<p>"${a.text}"</p><p class="author">- ${a.author}</p>`;
    reviewsList.appendChild(card);
  });
}

// Fade-up animation observer
const fadeElements = document.querySelectorAll('.fade-up-init');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
