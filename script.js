document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: 'NPK Mutiara 16-16-16',
            description: 'Pupuk dengan komposisi seimbang untuk berbagai jenis tanaman. Mengandung nitrogen, fosfor, dan kalium dalam perbandingan yang optimal untuk mendukung pertumbuhan tanaman secara menyeluruh.',
            longDescription: 'NPK Mutiara 16-16-16 adalah pupuk majemuk dengan keseimbangan nutrisi yang sempurna. Dengan kandungan Nitrogen, Fosfor, dan Kalium masing-masing 16%, pupuk ini cocok untuk berbagai jenis tanaman pertanian. Nitrogen membantu pertumbuhan daun dan batang, Fosfor mendukung perkembangan akar dan pembungaan, sementara Kalium meningkatkan ketahanan tanaman terhadap penyakit.',
            image: '/api/placeholder/250/250',
            price: 'Rp 250.000 / 50kg',
            benefits: [
                'Komposisi seimbang',
                'Cocok untuk berbagai tanaman',
                'Meningkatkan pertumbuhan optimal'
            ],
            link: 'https://www.tokopedia.com/pupuk-urea-50-kg'
        },
        {
            id: 2,
            name: 'Pupuk Organik Super',
            description: 'Pupuk ramah lingkungan dengan nutrisi lengkap untuk pertumbuhan tanaman yang sehat.',
            longDescription: 'Pupuk Organik Super merupakan solusi terbaik untuk pertanian berkelanjutan. Diproduksi dari bahan-bahan alami yang telah melalui proses pengolahan khusus, pupuk ini kaya akan mikronutrien dan mikroorganisme yang bermanfaat bagi kesehatan tanah dan tanaman.',
            image: '/api/placeholder/250/250',
            price: 'Rp 150.000 / 40kg',
            benefits: [
                'Ramah lingkungan',
                'Menyuburkan tanah',
                'Mengandung mikronutrien lengkap'
            ],
            link: 'https://www.tokopedia.com/pupuk-organik-super-40-kg'
        },
        {
            id: 3,
            name: 'Pupuk Nitrogen Cair',
            description: 'Pupuk cair untuk pertumbuhan daun dan batang optimal.',
            longDescription: 'Pupuk Nitrogen Cair dirancang khusus untuk mendukung fase pertumbuhan vegetatif tanaman. Dengan konsentrasi nitrogen tinggi, pupuk ini membantu mempercepat pertumbuhan daun hijau, memperkuat batang, dan meningkatkan kemampuan fotosintesis tanaman.',
            image: '/api/placeholder/250/250',
            price: 'Rp 100.000 / 20L',
            benefits: [
                'Cepat diserap tanaman',
                'Meningkatkan pertumbuhan daun',
                'Mudah diaplikasikan'
            ],
            link: 'https://www.tokopedia.com/pupuk-nitrogen-cair-20-liter'
        },
        {
            id: 4,
            name: 'Pupuk Kalium Khusus',
            description: 'Pupuk khusus untuk meningkatkan ketahanan dan kualitas buah.',
            longDescription: 'Pupuk Kalium Khusus dikembangkan untuk fase generatif tanaman. Kandungan kalium tinggi membantu meningkatkan ketahanan tanaman terhadap penyakit, memperbaiki kualitas buah, dan mendukung proses pembentukan bunga dan buah.',
            image: '/api/placeholder/250/250',
            price: 'Rp 300.000 / 50kg',
            benefits: [
                'Meningkatkan kualitas buah',
                'Memperkuat ketahanan tanaman',
                'Optimal untuk fase generatif'
            ],
            link: 'https://www.tokopedia.com/pupuk-kalium-khusus-15-kg'
        }
    ];

    const productContainer = document.getElementById('productContainer');
    const modal = document.getElementById('productModal');
    const modalDetails = document.getElementById('productModalDetails');
    const closeModal = document.querySelector('.close-modal');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p class="product-description">${truncateDescription(product.description)}</p>
                <p class="price">${product.price}</p>
                <div class="product-actions">
                    <button onclick="showProductDetails(${product.id})">Lihat Detail</button>
                </div>
            </div>
        </div>
    `;
        return card;
    }

    function truncateDescription(description, maxLength = 100) {
        if (description.length <= maxLength) return description;
        return description.substr(0, maxLength) + '...';
    }

    // Populate product container
    products.forEach(product => {
        productContainer.appendChild(createProductCard(product));
    });

    // Fungsi untuk menampilkan detail produk di modal
    window.showProductDetails = function (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            modalDetails.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-modal-info">
                    <h2>${product.name}</h2>
                    <p class="product-long-description">${product.longDescription}</p>
                    <h3>Keunggulan Produk:</h3>
                    <ul>
                        ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                    <p class="price">${product.price}</p>
                    <a href="${product.link}">
                    <button onclick="orderProduct('${product.name}')">Pesan Sekarang</button>
                    </a>
                </div>
            `;
            modal.style.display = 'block';  // Menampilkan modal
        }
    };

    // Fungsi untuk menutup modal
    closeModal.onclick = function () {
        modal.style.display = 'none';  // Menutup modal
    };

    // Menutup modal saat klik di luar modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

    // Rest of the existing script remains the same (scroll animations, etc.)
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
    $(document).ready(function () {
        $("#productContainer").owlCarousel({
            items: 3,  // Jumlah produk per slide
            loop: true, // Mengaktifkan loop untuk carousel
            margin: 10, // Margin antar item
            nav: true,  // Menampilkan tombol navigasi
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });
    });
    