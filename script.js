document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: 'NPK Mutiara 16-16-16',
            description:'',
            longDescription: 'Pupuk dengan komposisi seimbang untuk berbagai jenis tanaman. Mengandung nitrogen, fosfor, dan kalium dalam perbandingan yang optimal untuk mendukung pertumbuhan tanaman secara menyeluruh. NPK Mutiara 16-16-16 adalah pupuk majemuk dengan keseimbangan nutrisi yang sempurna. Dengan kandungan Nitrogen, Fosfor, dan Kalium masing-masing 16%, pupuk ini cocok untuk berbagai jenis tanaman pertanian. Nitrogen membantu pertumbuhan daun dan batang, Fosfor mendukung perkembangan akar dan pembungaan, sementara Kalium meningkatkan ketahanan tanaman terhadap penyakit.',
            image: 'gambar pupuk/npk mutiara.jpg',
            price: 'Rp 21.100,00',
            benefits: [
                'Komposisi seimbang',
                'Cocok untuk berbagai tanaman',
                'Meningkatkan pertumbuhan optimal'
            ],
            link: 'https://id.shp.ee/8PggC83'
        },
        {
            id: 2,
            name: 'Mutiara Grower 15-09-20+TE',
            description: '',
            longDescription: 'Pupuk ini mengandung Amonium-Nitrogen NH4 yang secara perlahan tersedia sebagai cadangan. Pertumbuhan tanaman lebih cepat dan hasil panen lebih banyak. Sumber Nitrogen yang efisien dapat mengurangi kehilangan hara ke lingkungan.',
            image: 'gambar pupuk/mutiara grower pupuk.jpg',
            price: 'Rp 20.500,00',
            benefits: [
                'Ramah lingkungan',
                'Menyuburkan tanah',
                'Mengandung mikronutrien lengkap'
            ],
            link: 'https://id.shp.ee/oHF18Kj'
        },
        {
            id: 3,
            name: 'Pupuk Pak tani 16-16-16',
            description: '',
            longDescription: 'Pupuk majemuk berbentuk butiran yang mengandung unsur hara utama Nitrogen (N), Fosfor (P), dan Kalium (K). Cocok digunakan pada berbagai jenis tanaman seperti padi, jagung, sayuran, dan buah-buahan, pupuk ini mudah larut dalam air sehingga cepat diserap oleh tanaman.',
            image: 'gambar pupuk/pak tani pupuk.jpg',
            price: 'Rp 21.000,00',
            benefits: [
                'Meningkatkan pertumbuhan tunas',
                'Menghijaukan daun',
                'Hasil panen meningkat'
            ],
            link: 'https://id.shp.ee/xJ9ZbwZ'
        },
        {
            id: 4,
            name: 'Pupuk cair bio organik',
            description: '',
            longDescription: 'Pupuk ini terbuat dari bahan organik yang diperkaya dengan mikroorganisme aktif. Fungsinya untuk meningkatkan kesuburan tanah, memperbaiki struktur tanah, dan menyediakan nutrisi alami bagi tanaman.',
            image: 'gambar pupuk/pupuk cair bioorganik dinosaurus.jpg',
            price: 'Rp 45.000,00',
            benefits: [
                'memperbaiki kesuburan tanah ',
                'mengandung banyak unsur hara',
            ],
            link: 'https://id.shp.ee/yKZfV1L'
        },
        {
            id: 5,
            name: 'Pupuk Organik POC',
            description: '',
            longDescription: 'Pupuk berbahan dasar organik yang difermentasi menjadi bentuk cair. POC mudah diserap tanaman melalui daun dan akar, meningkatkan pertumbuhan vegetatif dan generatif, serta mempercepat pemulihan tanah.',
            image: 'gambar pupuk/pupuk cair POC.jpg',
            price: 'Rp 24.000,00',
            benefits: [
                'Mengandung unsur hara makro dan mikro',
                'Dapat menyediakan makanan bagi tanah dan tanaman',
                'Dapat menekan organisme penyebab penyakit tanaman'
            ],
            link: 'https://id.shp.ee/6iJLt21'
        },
        {
            id: 6,
            name: 'Pupuk Gandasil B',
            description: '',
            longDescription: 'Pupuk daun yang kaya akan unsur hara makro dan mikro, diformulasikan khusus untuk fase generatif tanaman. Cocok untuk meningkatkan pembungaan dan pembuahan tanaman hortikultura seperti sayuran dan buah-buahan.',
            image: 'gambar pupuk/pupuk gandasil B.jpg',
            price: 'Rp 13.000,00',
            benefits: [
                'Menjaga kesehatan tanaman',
                'Menambah daya tahan tanaman',
                'Meningkatkan pembentukan tunas'
            ],
            link: 'https://id.shp.ee/ZtxyCjv'
        },
        {
            id: 7,
            name: 'Pupuk Kompos Organik Kascing',
            description: '',
            longDescription: 'Dari proses pencernaan organik oleh cacing tanah, pupuk ini kaya akan nutrisi alami. Kompos kascing meningkatkan kesuburan tanah, menstabilkan pH, dan mendukung pertumbuhan akar tanaman.',
            image: 'gambar pupuk/pupuk kompos organik kascing.jpg',
            price: 'Rp 18.300,00',
            benefits: [
                'Memperbaiki sifat tanah seperti strukturnya',
                'Meningkatkan kemampuan untuk menahan air ',
            ],
            link: 'https://id.shp.ee/Cyuq4S2'
        },
        {
            id: 8,
            name: 'Pupuk Grow More',
            description: '',
            longDescription: 'Daun berbentuk kristal dengan kandungan hara seimbang atau spesifik sesuai kebutuhan tanaman. Tersedia dalam berbagai formulasi, cocok untuk mendukung pertumbuhan, pembungaan, dan pembuahan.',
            image: 'gambar pupuk/pupuk npk grow more.jpg',
            price: 'Rp 70.000,00',
            benefits: [
                'Mempercepat pertumbuhan akar ',
                'Mempercepat pertumbuhan bunnga dan buah',
            ],
            link: 'https://id.shp.ee/KM5Uows'
        },
        {
            id: 9,
            name: 'Pupuk NPK Phonska',
            description: '',
            longDescription: 'Pupuk NPK Phonska adalah pupuk majemuk yang mengandung Nitrogen, Fosfor, dan Kalium dengan tambahan unsur belerang (S). Cocok digunakan untuk semua jenis tanaman, membantu meningkatkan pertumbuhan dan hasil panen dengan efisiensi tinggi.',
            image: 'gambar pupuk/pupuk npk phonska.jpg',
            price: 'Rp 19.500,00',
            benefits: [
                'Membantu meningkatkan kandungan klorofil pada daun',
                'Membuat pembentukan gula dan pati',
                'Meningkatkan pertumbuhan'
            ],
            link: 'https://id.shp.ee/Lu7ZsHJ'
        },
        {
            id: 10,
            name: 'Pupuk Organik Super Aktif',
            description: '',
            longDescription: 'Cocok untuk berbagai jenis tanaman, termasuk sayuran, buah-buahan, dan tanaman pangan, pupuk ini mendukung pertanian ramah lingkungan dengan hasil panen yang berkualitas.',
            image: 'gambar pupuk/pupuk organik super akti.jpg',
            price: 'Rp 45.000,00',
            benefits: [
                'Meningkatkan kesuburan tanah',
                'Menyeimbangkan pH tanah',
                'Mengandung unsur hara maksimal'
            ],
            link: 'https://id.shp.ee/btMxRSn'
        },
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
    