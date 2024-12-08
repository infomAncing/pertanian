document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'NPK Mutiara 16-16-16',
            description: 'Pupuk dengan komposisi seimbang untuk berbagai jenis tanaman',
            image: '/api/placeholder/250/250',
            price: 'Rp 250.000 / 50kg'
        },
        {
            name: 'Pupuk Organik Super',
            description: 'Pupuk ramah lingkungan dengan nutrisi lengkap',
            image: '/api/placeholder/250/250',
            price: 'Rp 150.000 / 40kg'
        },
        {
            name: 'Pupuk Nitrogen Cair',
            description: 'Pupuk cair untuk pertumbuhan daun dan batang optimal',
            image: '/api/placeholder/250/250',
            price: 'Rp 100.000 / 20L'
        },
        {
            name: 'Pupuk Kalium Khusus',
            description: 'Pupuk khusus untuk meningkatkan ketahanan dan kualitas buah',
            image: '/api/placeholder/250/250',
            price: 'Rp 300.000 / 50kg'
        }
    ];

    const productContainer = document.getElementById('productContainer');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('item');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="item-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button onclick="orderProduct('${product.name}')">Pesan Sekarang</button>
            </div>
        `;
        return card;
    }

    // Populate product container
    products.forEach(product => {
        productContainer.appendChild(createProductCard(product));
    });

    // Simple order function (would typically integrate with backend)
    window.orderProduct = function(productName) {
        alert(`Anda akan memesan: ${productName}. Silakan hubungi tim sales kami.`);
    };

    // Scroll animations
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation (for potential contact form)
    function validateContactForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Harap isi semua kolom formulir');
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Harap masukkan alamat email yang valid');
            return false;
        }

        return true;
    }

    // Attach form validation if contact form exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateContactForm()) {
                e.preventDefault();
            }
        });
    }
});