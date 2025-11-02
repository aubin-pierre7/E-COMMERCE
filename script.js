import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let allBooks = [];

document.addEventListener('DOMContentLoaded', async () => {
    await loadBooks();
    initializeApp();
});

async function loadBooks() {
    try {
        const { data, error } = await supabase
            .from('books')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        allBooks = data || [];
        displayBooks('fr', 'all');
        displayBooks('en', 'all');
    } catch (error) {
        console.error('Error loading books:', error);
        document.getElementById('booksFr').innerHTML = '<p class="loading">Erreur de chargement des livres</p>';
        document.getElementById('booksEn').innerHTML = '<p class="loading">Error loading books</p>';
    }
}

function displayBooks(language, category) {
    const containerId = language === 'fr' ? 'booksFr' : 'booksEn';
    const container = document.getElementById(containerId);

    let filteredBooks = allBooks.filter(book => book.language === language);

    if (category !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === category);
    }

    if (filteredBooks.length === 0) {
        container.innerHTML = `<p class="loading">${language === 'fr' ? 'Aucun livre disponible' : 'No books available'}</p>`;
        return;
    }

    container.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');

    container.querySelectorAll('.book-card').forEach((card, index) => {
        card.classList.add('fade-up-init');
        setTimeout(() => card.classList.add('visible'), index * 50);
    });

    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const bookId = btn.dataset.bookId;
            addToCart(bookId);
        });
    });

    container.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', () => {
            const bookId = card.dataset.bookId;
            showBookDetails(bookId);
        });
    });
}

function createBookCard(book) {
    const categoryLabels = {
        finance: { fr: 'Finance', en: 'Finance' },
        dev_personnel: { fr: 'Dév. Personnel', en: 'Personal Dev' },
        entrepreneuriat: { fr: 'Entrepreneuriat', en: 'Entrepreneurship' }
    };

    const stars = '⭐'.repeat(Math.floor(book.rating));

    return `
        <div class="book-card" data-book-id="${book.id}">
            <img src="${book.cover_image}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <span class="book-category">${categoryLabels[book.category][book.language]}</span>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-value">${book.rating}</span>
                </div>
                <div class="book-footer">
                    <span class="book-price">${book.price} FCFA</span>
                    <button class="add-to-cart" data-book-id="${book.id}">
                        ${book.language === 'fr' ? 'Ajouter' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showBookDetails(bookId) {
    const book = allBooks.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const detailsContainer = document.getElementById('bookDetails');

    const categoryLabels = {
        finance: { fr: 'Éducation Financière', en: 'Financial Education' },
        dev_personnel: { fr: 'Développement Personnel', en: 'Personal Development' },
        entrepreneuriat: { fr: 'Entrepreneuriat', en: 'Entrepreneurship' }
    };

    const stars = '⭐'.repeat(Math.floor(book.rating));

    detailsContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start;">
            <div>
                <img src="${book.cover_image}" alt="${book.title}" style="width: 100%; border-radius: 16px;">
            </div>
            <div>
                <span class="book-category">${categoryLabels[book.category][book.language]}</span>
                <h2 style="margin: 16px 0;">${book.title}</h2>
                <p style="color: var(--gray-text); margin-bottom: 16px;">${book.language === 'fr' ? 'Par' : 'By'} ${book.author}</p>
                <div class="book-rating" style="margin-bottom: 24px;">
                    <span class="stars">${stars}</span>
                    <span class="rating-value">${book.rating}</span>
                </div>
                <p style="line-height: 1.8; margin-bottom: 32px;">${book.description}</p>
                <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                    <span class="book-price">${book.price} FCFA</span>
                    <button class="btn-primary btn-large" onclick="addToCart('${book.id}')">
                        ${book.language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function addToCart(bookId) {
    const book = allBooks.find(b => b.id === bookId);
    if (!book) return;

    if (cart.find(item => item.id === bookId)) {
        alert(book.language === 'fr' ? 'Ce livre est déjà dans votre panier' : 'This book is already in your cart');
        return;
    }

    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    const message = book.language === 'fr'
        ? `"${book.title}" ajouté au panier!`
        : `"${book.title}" added to cart!`;

    showNotification(message);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: var(--primary-blue);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function initializeApp() {
    updateCartCount();

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const animatedElements = document.querySelectorAll(
        '.hero-content, .about-content, .feature-card, .contact-form, .stat-item'
    );

    const fadeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 100);
                fadeUpObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('fade-up-init');
        fadeUpObserver.observe(el);
    });

    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(element) {
        const targetText = element.textContent;
        const target = parseInt(targetText);
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, 400);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = targetText;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            contactForm.classList.add('form-sent');
            setTimeout(() => {
                alert(`Merci ${name} ! Votre message a bien été envoyé.`);
                contactForm.reset();
                contactForm.classList.remove('form-sent');
            }, 800);
        } else {
            alert('Veuillez remplir tous les champs requis.');
        }
    });

    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    cartBtn.addEventListener('click', () => {
        displayCart();
        cartModal.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    const bookModal = document.getElementById('bookModal');
    const closeBook = document.getElementById('closeBook');

    closeBook.addEventListener('click', () => {
        bookModal.classList.remove('active');
    });

    bookModal.addEventListener('click', (e) => {
        if (e.target === bookModal) {
            bookModal.classList.remove('active');
        }
    });

    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const lang = tab.dataset.lang;
            const category = tab.dataset.category;

            const siblingTabs = tab.parentElement.querySelectorAll('.filter-tab');
            siblingTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            displayBooks(lang, category);
        });
    });

    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Votre panier est vide');
            return;
        }
        alert('Fonctionnalité de paiement à venir. Total: ' + calculateTotal() + ' FCFA');
    });
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        cartTotal.textContent = '0 FCFA';
        return;
    }

    cartItems.innerHTML = cart.map((book, index) => `
        <div style="display: flex; gap: 16px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--gray-bg);">
            <img src="${book.cover_image}" alt="${book.title}" style="width: 80px; height: 120px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
                <h4 style="margin-bottom: 8px;">${book.title}</h4>
                <p style="color: var(--gray-text); margin-bottom: 8px;">${book.author}</p>
                <p style="font-weight: 700; color: var(--primary-blue);">${book.price} FCFA</p>
            </div>
            <button onclick="removeFromCart(${index})" style="background: transparent; border: none; color: var(--gray-text); cursor: pointer; font-size: 24px; padding: 0; width: 32px; height: 32px;">×</button>
        </div>
    `).join('');

    cartTotal.textContent = calculateTotal() + ' FCFA';
}

function calculateTotal() {
    return cart.reduce((total, book) => total + book.price, 0);
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    showNotification('Livre retiré du panier');
};

window.addToCart = addToCart;

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
