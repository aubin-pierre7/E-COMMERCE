// =====================
// Variables globales
// =====================

// Menu burger
const menuBurger = document.querySelector('.menu-burger');
const menuNav = document.querySelector('.menu-nav');
if (menuBurger) {
  menuBurger.addEventListener('click', () => menuNav.classList.toggle('active'));
}

// Texte bilingue pour toutes les pages
const textes = {
  index: {
    fr: {
      banniereTitre: "Découvrez le pack ultime de 100 ebooks",
      banniereDesc: "Apprenez à mieux gérer votre vie et vos finances grâce à notre sélection complète d’ebooks numériques sur le développement personnel et l’éducation financière. Progressez à votre rythme et transformez vos habitudes.",
      btnVoirPack: "Voir un aperçu du pack",
      livresMiniTitre: "Exemples de livres inclus dans le pack",
      aproposTitre: "Pourquoi ce pack peut changer votre vie",
      aproposDesc: "Ce pack contient 100 ebooks soigneusement sélectionnés pour améliorer vos compétences, booster votre carrière et vous inspirer chaque jour.",
      aproposNb: "NB : Les 20 livres présentés ici ne sont qu’un aperçu de la richesse que vous allez découvrir.",
      aproposPers: "Plus de 50 personnes satisfaites ont déjà investi dans ce pack et constatent des résultats concrets dans leur vie personnelle et financière.",
      btnAvis: "Voir les avis de nos utilisateurs"
    },
    en: {
      banniereTitre: "Discover the ultimate 100-ebook pack",
      banniereDesc: "Learn to better manage your life and finances with our complete selection of digital ebooks on personal development and financial education. Progress at your own pace and transform your habits.",
      btnVoirPack: "See full pack",
      livresMiniTitre: "Examples of books included in the pack",
      aproposTitre: "Why this pack can change your life",
      aproposDesc: "This pack contains 100 carefully selected ebooks to improve your skills, boost your career, and inspire you every day.",
      aproposNb: "Note: The 20 books shown here are just a preview of the richness you will discover.",
      aproposPers: "Over 50 satisfied people have already invested in this pack and see real results in their personal and financial life.",
      btnAvis: "See user reviews"
    }
  },
  pack: {
    fr: {
      banniereTitre: "Découvrez notre pack de 100 ebooks",
      banniereDesc: "Vous trouverez ci-dessous un aperçu de 20 livres soigneusement sélectionnés pour vous inspirer et vous motiver.",
      btnVoirPack: "Acheter le pack complet",
      packApercuTitre: "Aperçu de 20 ebooks inclus",
      packDesc: "Avec ces 100 ebooks, explorez le développement personnel, la gestion financière, l’entrepreneuriat, l’investissement, la productivité et bien plus encore. Chaque livre vous offre des conseils pratiques, clairs et applicables immédiatement.",
      packDesc2: "Investir dans ce pack, c’est acquérir des connaissances précieuses, gagner du temps et développer des compétences clés pour réussir aussi bien sur le plan personnel que professionnel.",
      btnAcheter: "Acheter le pack maintenant"
    },
    en: {
      banniereTitre: "Discover our 100-ebook pack",
      banniereDesc: "Below you will find a preview of 20 carefully selected books to inspire and motivate you.",
      btnVoirPack: "Buy full pack",
      packApercuTitre: "Preview of 20 included ebooks",
      packDesc: "With these 100 ebooks, explore personal development, financial management, entrepreneurship, investing, productivity, and much more. Each book provides practical advice you can apply immediately.",
      packDesc2: "Investing in this pack means acquiring valuable knowledge, saving time, and developing key skills to succeed personally and professionally.",
      btnAcheter: "Buy the pack now"
    }
  },
  avis: {
    fr: {
      avisTitre: "Les avis de nos clients satisfaits",
      avisDesc: "Découvrez ce que nos utilisateurs pensent du pack AubinPack. Leur réussite est notre plus grande fierté.",
      btnDonnerAvis: "Donner mon avis",
      avisListe: [
        { auteur: "Alice", texte: "Super pack, j'ai beaucoup appris !" },
        { auteur: "Bob", texte: "Livres variés et instructifs." },
        { auteur: "Chloé", texte: "Contenu de qualité, je recommande." },
        { auteur: "David", texte: "Excellent investissement pour seulement 3000 FCFA." },
        { auteur: "Emma", texte: "Très satisfait, pack complet et utile." },
        { auteur: "Fabrice", texte: "Des livres pratiques pour mon business." },
        { auteur: "Gisèle", texte: "Idéal pour améliorer mes compétences en marketing." },
        { auteur: "Hugo", texte: "Je recommande ce pack à tous mes amis." },
        { auteur: "Isabelle", texte: "Pack bien structuré et riche en contenu." },
        { auteur: "Jean", texte: "Livres très inspirants et faciles à lire." }
      ]
    },
    en: {
      avisTitre: "Reviews from our satisfied customers",
      avisDesc: "Discover what our users think about the AubinPack. Their success is our greatest pride.",
      btnDonnerAvis: "Give my review",
      avisListe: [
        { auteur: "Alice", texte: "Great pack, I learned a lot!" },
        { auteur: "Bob", texte: "Varied and informative books." },
        { auteur: "Chloé", texte: "High-quality content, I recommend it." },
        { auteur: "David", texte: "Excellent investment for only 3,000 FCFA." },
        { auteur: "Emma", texte: "Very satisfied, complete and useful pack." },
        { auteur: "Fabrice", texte: "Practical books for my business." },
        { auteur: "Gisèle", texte: "Perfect to improve my marketing skills." },
        { auteur: "Hugo", texte: "I recommend this pack to all my friends." },
        { auteur: "Isabelle", texte: "Well-structured pack rich in content." },
        { auteur: "Jean", texte: "Very inspiring and easy-to-read books." }
      ]
    }
  },
  contact: {
    fr: {
      contactTitre: "Contactez-moi",
      contactDesc: "Pour toute question ou demande d’information, contactez-moi directement sur WhatsApp. Tous les messages sont envoyés via WhatsApp.",
      btnEnvoyer: "Contacter sur WhatsApp"
    },
    en: {
      contactTitre: "Contact us",
      contactDesc: "For any question or information request, contact us directly on WhatsApp. All messages are sent via WhatsApp.",
      btnEnvoyer: "Contact via WhatsApp"
    }
  }
};

// =====================
// Changement de langue
// =====================
let langueActuelle = 'fr';
const boutonLangue = document.getElementById('changerLangue');

if (boutonLangue) {
  boutonLangue.addEventListener('click', () => {
    langueActuelle = langueActuelle === 'fr' ? 'en' : 'fr';
    boutonLangue.textContent = langueActuelle === 'fr' ? 'EN' : 'FR';
    mettreAJourTexte();
  });
}

function mettreAJourTexte() {
  const page = window.location.pathname.split('/').pop().split('.')[0];
  if (!textes[page]) return;
  const t = textes[page][langueActuelle];

  if (page === 'index') {
    document.querySelector('.contenu-banniere h1').textContent = t.banniereTitre;
    document.querySelector('.contenu-banniere p em').textContent = t.banniereDesc;
    document.querySelector('.btn-principal').textContent = t.btnVoirPack;
    const sections = document.querySelectorAll('section');
    if (sections[1]) sections[1].querySelector('h2').textContent = t.livresMiniTitre;
    if (sections[2]) {
      const sec = sections[2];
      sec.querySelector('h2').textContent = t.aproposTitre;
      const ps = sec.querySelectorAll('p');
      ps[0].textContent = t.aproposDesc;
      ps[1].innerHTML = `<strong>NB :</strong> ${t.aproposNb.slice(4)}`;
      ps[2].textContent = t.aproposPers;
      sec.querySelector('.btn-principal').textContent = t.btnAvis;
    }
  }

  if (page === 'pack') {
    document.querySelector('.contenu-banniere h1').textContent = t.banniereTitre;
    document.querySelector('.contenu-banniere p em').textContent = t.banniereDesc;
    document.querySelector('.btn-principal').textContent = t.btnVoirPack;
    document.querySelector('section h2').textContent = t.packApercuTitre;
    const ps = document.querySelectorAll('section p');
    if (ps[0]) ps[0].textContent = t.packDesc;
    if (ps[1]) ps[1].textContent = t.packDesc2;
    const btnAcheter = document.querySelector('.btn-principal');
    if (btnAcheter) btnAcheter.textContent = t.btnAcheter;
  }

  if (page === 'avis') {
    document.querySelector('.avis h1').textContent = t.avisTitre;
    document.querySelector('.avis p em').textContent = t.avisDesc;
    document.querySelector('.btn-secondaire').textContent = t.btnDonnerAvis;
    const listeAvis = document.getElementById('listeAvis');
    if (listeAvis) {
      listeAvis.innerHTML = '';
      t.avisListe.forEach(a => {
        const carte = document.createElement('div');
        carte.className = 'carte-avis effet-apparition-init';
        carte.innerHTML = `<p>"${a.texte}"</p><p class="auteur">- ${a.auteur}</p>`;
        listeAvis.appendChild(carte);
      });
      const elementsApparition = document.querySelectorAll('.effet-apparition-init');
      elementsApparition.forEach(el => observateur.observe(el));
    }
  }

  if (page === 'contact') {
    document.querySelector('.contact h1').textContent = t.contactTitre;
    const ps = document.querySelectorAll('.contact p');
    if (ps[0]) ps[0].textContent = t.contactDesc;
    const btnForm = document.querySelector('.btn-principal');
    if (btnForm) btnForm.textContent = t.btnEnvoyer;
  }
}

// =====================
// Section livres mini
// =====================
const conteneurLivresMini = document.querySelector('.livres-mini');
if (conteneurLivresMini) {
  for (let i = 1; i <= 3; i++) {
    const livreMini = document.createElement('div');
    livreMini.className = 'livre-mini effet-apparition-init';
    livreMini.innerHTML = `
      <img src="assets/Livres_3${i}.jpg" alt="Livre ${i}">
      <div class="titre-livre-mini"><strong>Livre ${i}</strong></div>
    `;
    conteneurLivresMini.appendChild(livreMini);
  }
}

// =====================
// Section pack de livres (20 livres FR/EN)
// =====================
const sectionLivresPack = document.getElementById('livresPack');
if (sectionLivresPack) {
  for (let i = 1; i <= 20; i++) {
    const carteLivre = document.createElement('div');
    carteLivre.className = 'carte-livre-pack effet-apparition-init';
    carteLivre.innerHTML = `
      <img src="assets/Livres${i}.jpg" alt="Livres ${i}">
      <div class="titre-livre-pack"><strong>Book ${i}</strong></div>
    `;
    sectionLivresPack.appendChild(carteLivre);
  }
}

// =====================
// Animation d’apparition
// =====================
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

// =====================
// Menu actif
// =====================
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

// =====================
// Initialiser texte
// =====================
mettreAJourTexte();
