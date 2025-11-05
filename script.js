// =====================
// Variables globales
// =====================

// Menu burger
const menuBurger = document.querySelector('.menu-burger');
const menuNav = document.querySelector('.menu-nav');
if (menuBurger) {
  menuBurger.addEventListener('click', () => menuNav.classList.toggle('active'));
}

// =====================
// Textes bilingues (FR/EN)
// =====================
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
      btnAcheter: "Acheter le pack maintenant - 500 FCFA"
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
      btnDonnerAvis: "Donner mon avis"
    },
    en: {
      avisTitre: "Reviews from our satisfied customers",
      avisDesc: "Discover what our users think about the AubinPack. Their success is our greatest pride.",
      btnDonnerAvis: "Give my review"
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
// Gestion de la langue
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
// Mini-livres (3 images accueil)
// =====================
const conteneurLivresMini = document.querySelector('.livres-mini');
if (conteneurLivresMini) {
  const livresMini = [
    {
      src: "assets/Livres/Les Secrets d'un Esprit Millionaire.jpg",
      fr: "Développement personnel",
      en: "Personal development"
    },
    {
      src: "assets/Livres/70-Questions-Pour-Enfin-Se-Demarquer.jpg",
      fr: "Marketing Digital",
      en: "Digital Marketing"
    },
    {
      src: "assets/Livres/Les-hommes-viennent-de-Mars-les-femmes-viennent-de-Venus.jpg",
      fr: "Relations & communication",
      en: "Relationships & communication"
    }
  ];

  livresMini.forEach((livre, i) => {
    const livreMini = document.createElement('div');
    livreMini.className = 'livre-mini effet-apparition-init';
    livreMini.innerHTML = `
      <img src="${livre.src}" alt="Livre ${i + 1}">
      <div class="titre-livre-mini"><strong>Livre ${i + 1} :</strong> ${livre[langueActuelle]}</div>
    `;
    conteneurLivresMini.appendChild(livreMini);
  });
}

// =====================
// Section Pack (20 images complètes)
// =====================
const sectionLivresPack = document.getElementById('livresPack');
if (sectionLivresPack) {
  const livresPack = [
    "Les Secrets d'un Esprit Millionaire",
    "70-Questions-Pour-Enfin-Se-Demarquer",
    "Les-hommes-viennent-de-Mars-les-femmes-viennent-de-Venus",
    "Tout le monde merite d'etre riche _ Ou tout ce que vous n'avez jamais appris a l'ecole a propos de votre argent",
    "The Book of Mistakes_ 9 Secrets to Creating a Successful Future",
    "The 4 Disciplines of Execution",
    "Shoe Dog",
    "ScientificAdvertising",
    "Père riche Père pauvre",
    "L'homme le plus riche de Babylone",
    "Les liaisons dangereuses",
    "L'Art de la Séduction pour les Adolescents",
    "La Loi de l'attraction - Les clés du secret pour obtenir ce que vous désirez",
    "Comment-développer-lautodiscipline",
    "Comment devenir un mâle dominant",
    "Ce que les femmes attendent des hommes _ (mais ne leur diront jamais)",
    "Augmenter votre intelligence financiere",
    "Anthony Robbins THE POWER TO INFLUENCE",
    "The Secret Code of Seduction",
    "50 exercices pour développer son influence"
  ];

  livresPack.forEach((titre, i) => {
    const carteLivre = document.createElement('div');
    carteLivre.className = 'carte-livre-pack effet-apparition-init';
    carteLivre.innerHTML = `
      <img src="assets/Livres/${titre}.jpg" alt="${titre}">
      <div class="titre-livre-pack"><strong>${i + 1}.</strong> ${titre}</div>
    `;
    sectionLivresPack.appendChild(carteLivre);
  });
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
// Initialisation
// =====================
mettreAJourTexte();


// =====================
// Avis dynamiques (10 FR + 10 EN)
// =====================
const conteneurAvis = document.querySelector('#listeAvis');
if (conteneurAvis) {
  const avis = {
    fr: [
      "Pack incroyable, les ebooks sont très bien choisis !",
      "J’ai appris énormément sur la gestion financière.",
      "Les livres sur le leadership sont super inspirants.",
      "Une vraie mine d’or pour qui veut progresser.",
      "Service rapide et pack complet. Bravo !",
      "Je recommande à 100%. Très enrichissant.",
      "Des livres utiles et faciles à lire.",
      "Ce pack a changé ma manière de penser.",
      "Très bon rapport qualité-prix.",
      "Simplement parfait ! Merci AubinPack."
    ],
    en: [
      "Amazing pack, the ebooks are perfectly chosen!",
      "I learned a lot about financial management.",
      "The leadership books are very inspiring.",
      "A real goldmine for those who want to grow.",
      "Fast service and complete pack. Well done!",
      "Highly recommended. Very valuable.",
      "Useful and easy-to-read books.",
      "This pack changed my mindset completely.",
      "Excellent value for money.",
      "Simply perfect! Thanks AubinPack."
    ]
  };

}