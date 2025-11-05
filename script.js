// Menu burger
const menuBurger = document.querySelector('.menu-burger');
const menuNav = document.querySelector('.menu-nav');
if (menuBurger) {
  menuBurger.addEventListener('click', () => menuNav.classList.toggle('active'));
}

// Section livres mini (page d’accueil)
const conteneurLivresMini = document.querySelector('.livres-mini');
if (conteneurLivresMini) {
  for (let i = 1; i <= 3; i++) {
    const livreMini = document.createElement('div');
    livreMini.className = 'livre-mini effet-apparition-init';
    livreMini.innerHTML = `
      <img src="assets/livre${i}.jpg" alt="Livre ${i}">
      <div class="titre-livre-mini"><strong>Livre ${i}</strong></div>
    `;
    conteneurLivresMini.appendChild(livreMini);
  }
}

// Section pack de livres (20 livres en aperçu)
const sectionLivresPack = document.getElementById('livresPack');
if (sectionLivresPack) {
  for (let i = 1; i <= 20; i++) {
    const carteLivre = document.createElement('div');
    carteLivre.className = 'carte-livre-pack effet-apparition-init';
    carteLivre.innerHTML = `
      <img src="assets/livre${i}.jpg" alt="Livre ${i}">
      <div class="titre-livre-pack"><strong>Livre ${i}</strong></div>
    `;
    sectionLivresPack.appendChild(carteLivre);
  }
}

// Section avis (minimum 10 avis)
const listeAvis = document.getElementById('listeAvis');
if (listeAvis) {
  const avis = [
    { auteur: "Alice", texte: "Super pack, j'ai beaucoup appris !" },
    { auteur: "Bob", texte: "Livres variés et instructifs." },
    { auteur: "Chloé", texte: "Contenu de qualité, je recommande." },
    { auteur: "David", texte: "Excellent investissement pour seulement 25 000 FCFA." },
    { auteur: "Emma", texte: "Très satisfait, pack complet et utile." },
    { auteur: "Fabrice", texte: "Des livres pratiques pour mon business." },
    { auteur: "Gisèle", texte: "Idéal pour améliorer mes compétences en marketing." },
    { auteur: "Hugo", texte: "Je recommande ce pack à tous mes amis." },
    { auteur: "Isabelle", texte: "Pack bien structuré et riche en contenu." },
    { auteur: "Jean", texte: "Livres très inspirants et faciles à lire." }
  ];

  avis.forEach(a => {
    const carte = document.createElement('div');
    carte.className = 'carte-avis effet-apparition-init';
    carte.innerHTML = `<p>"${a.texte}"</p><p class="auteur">- ${a.auteur}</p>`;
    listeAvis.appendChild(carte);
  });
}

// Animation d’apparition (effet fade-up)
const elementsApparition = document.querySelectorAll('.effet-apparition-init');
const observateur = new IntersectionObserver(entries => {
  entries.forEach(entree => {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
      observateur.unobserve(entree.target);
    }
  });
}, { threshold: 0.1 });

elementsApparition.forEach(el => observateur.observe(el));


document.querySelectorAll('.menu-nav a').forEach(lien => {
  lien.addEventListener('click', () => {
    menuNav.classList.remove('active');
  });
});


const liensMenu = document.querySelectorAll('.menu-nav a');
liensMenu.forEach(lien => {
  if (lien.href === window.location.href) {
    lien.classList.add('actif');
  }
});
