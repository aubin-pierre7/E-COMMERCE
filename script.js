// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click',()=>navMenu.classList.toggle('active'));

// Pack books 50
const packBooks = document.getElementById('packBooks');
if(packBooks){
  for(let i=1;i<=50;i++){
    const bookCard = document.createElement('div');
    bookCard.className = 'pack-book-card fade-up-init';
    bookCard.innerHTML=`<img src="images/livre${i}.jpg" class="pack-book-img" alt="Livre ${i}"><div class="pack-book-title">Livre ${i}</div>`;
    packBooks.appendChild(bookCard);
  }
}

// Avis clients
const reviewsList=document.getElementById('reviewsList');
if(reviewsList){
  const avis=[{author:"Alice", text:"Super pack, j'ai beaucoup appris !"},
              {author:"Bob", text:"Livres variés et instructifs."},
              {author:"Chloé", text:"Contenu de qualité, je recommande."},
              {author:"David", text:"Excellent investissement pour seulement 25 000 FCFA."},
              {author:"Emma", text:"Très satisfait, pack complet et utile."}];
  avis.forEach(a=>{
    const card=document.createElement('div');
    card.className='review-card fade-up-init';
    card.innerHTML=`<p>"${a.text}"</p><p class="author">- ${a.author}</p>`;
    reviewsList.appendChild(card);
  });
}

// Fade-up animation
const fadeElements=document.querySelectorAll('.fade-up-init');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); } 
  });
},{threshold:0.1});
fadeElements.forEach(el=>observer.observe(el));
