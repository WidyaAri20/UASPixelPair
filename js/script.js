/* ============================================================
    PixelPair — app.js
    JavaScript utama: Cart, Katalog Filter, Pemesanan, Riwayat
   ============================================================ */

'use strict';

/* ========================
    DATA PRODUK MASTER
   ======================== */
const PRODUK_DATA = {
    'iphone-15': {
        nama: 'iPhone 15 Pro Max 256GB', harga: 22490000, gambar: 'gambar/Iphone 15 Pro.jpeg',
        kategori: 'smartphone', brand: 'apple', sku: 'PP-IP15PM-256', rating: 5, jumlahUlasan: 312,
        badge: 'HOT', deskripsiSingkat: 'iPhone 15 Pro Max menghadirkan chip A17 Pro, kamera 48MP dengan zoom optik 5x, dan bodi titanium yang ringan namun kokoh.',
        deskripsiPanjang: 'Dirancang untuk para profesional dan pecinta teknologi, iPhone 15 Pro Max dilengkapi layar Super Retina XDR 6.7" dengan ProMotion 120Hz yang membuat setiap gerakan terasa sangat halus. Chip A17 Pro berbasis 3nm memberikan performa grafis kelas konsol, ideal untuk gaming maupun editing video 4K ProRes langsung dari genggaman. Sistem kamera Pro mencakup lensa utama 48MP, ultrawide, dan telephoto 5x optical zoom — sempurna untuk fotografi malam hari maupun potret jarak jauh. Konektor USB-C mempercepat transfer data hingga 10x lebih cepat dibanding model sebelumnya.',
        spek: { 'Layar':'6.7" Super Retina XDR, 120Hz', 'Chipset':'Apple A17 Pro', 'RAM':'8GB', 'Penyimpanan':'256GB', 'Kamera Utama':'48MP + 12MP + 12MP', 'Baterai':'4441 mAh', 'Sistem Operasi':'iOS 17', 'Material':'Titanium Grade 5' }
    },
    'rog-g14': {
        nama: 'ASUS ROG Zephyrus G14 2024', harga: 27490000, gambar: 'gambar/ASUS ROG Zephyrus G14 2024.jpg',
        kategori: 'laptop', brand: 'asus', sku: 'PP-ROGG14-24', rating: 5, jumlahUlasan: 189,
        badge: 'BARU', deskripsiSingkat: 'Laptop gaming ultra-portable dengan AMD Ryzen 9 dan RTX 4060, dibungkus desain AniMe Matrix yang khas ROG.',
        deskripsiPanjang: 'ASUS ROG Zephyrus G14 2024 membawa kekuatan gaming kelas atas ke dalam bodi setipis 16mm. Ditenagai prosesor AMD Ryzen 9 generasi terbaru berpadu GPU NVIDIA RTX 4060, laptop ini sanggup menjalankan game AAA maupun rendering berat tanpa kompromi. Layar 14" QHD+ 165Hz dengan color gamut 100% DCI-P3 memberikan visual yang tajam dan akurat, baik untuk gaming maupun pekerjaan kreatif. Sistem pendingin ROG Intelligent Cooling memastikan performa tetap stabil meski digunakan dalam sesi panjang. Desain AniMe Matrix di punggung laptop bisa dikustomisasi menampilkan animasi maupun teks pribadi.',
        spek: { 'Layar':'14" QHD+ 165Hz, 100% DCI-P3', 'Prosesor':'AMD Ryzen 9 8945HS', 'GPU':'NVIDIA RTX 4060 8GB', 'RAM':'16GB DDR5', 'Penyimpanan':'1TB NVMe SSD', 'Baterai':'73WHrs', 'Sistem Operasi':'Windows 11 Home', 'Berat':'1.7 kg' }
    },
    'sony-wh': {
        nama: 'Sony WH-1000XM5 Headphone', harga: 4290000, gambar: 'gambar/Sony-WH1000XM5-2.png',
        kategori: 'audio', brand: 'sony', sku: 'PP-SNWH1XM5', rating: 5, jumlahUlasan: 421,
        badge: 'DISKON', deskripsiSingkat: 'Headphone flagship Sony dengan noise cancelling terbaik di kelasnya dan kualitas suara Hi-Res Audio.',
        deskripsiPanjang: 'Sony WH-1000XM5 menyempurnakan teknologi peredam bising aktif (ANC) dengan delapan mikrofon dan dua prosesor khusus yang bekerja sama meredam suara sekitar secara presisi. Driver 30mm baru menghadirkan reproduksi suara yang jernih di seluruh rentang frekuensi, didukung Sony LDAC untuk streaming audio kualitas Hi-Res secara nirkabel. Desain ringan dengan bantalan telinga lembut membuatnya nyaman dipakai sepanjang hari, sementara baterai tahan hingga 30 jam dengan fitur fast-charging 3 menit untuk pemakaian 3 jam. Cocok untuk perjalanan, kerja fokus, maupun menikmati musik dengan detail maksimal.',
        spek: { 'Tipe':'Over-ear, Wireless', 'Driver':'30mm', 'Noise Cancelling':'Dual Processor ANC', 'Baterai':'Hingga 30 jam', 'Konektivitas':'Bluetooth 5.2, LDAC', 'Berat':'250g', 'Fast Charging':'3 menit = 3 jam', 'Garansi':'1 Tahun Resmi' }
    },
    'applewatch': {
        nama: 'Apple Watch Series 9 GPS 45mm', harga: 7490000, gambar: 'gambar/Apple Watch Series 9 GPS 45mm.webp',
        kategori: 'wearable', brand: 'apple', sku: 'PP-AWS9-45', rating: 4.5, jumlahUlasan: 98,
        badge: 'TERBATAS', deskripsiSingkat: 'Smartwatch terbaru Apple dengan chip S9, fitur Double Tap, dan layar yang 2x lebih terang dari seri sebelumnya.',
        deskripsiPanjang: 'Apple Watch Series 9 menghadirkan chip S9 SiP yang membuat Siri bisa diproses langsung di perangkat tanpa koneksi internet, serta gestur baru Double Tap untuk mengontrol jam tangan hanya dengan menyentuhkan jari telunjuk dan jempol. Layar Retina LTPO OLED kini bisa mencapai kecerahan 2000 nits, tetap jelas terbaca di bawah sinar matahari langsung. Fitur kesehatan lengkap meliputi pelacakan detak jantung, kadar oksigen darah, siklus menstruasi, dan deteksi jatuh otomatis. Material casing aluminium daur ulang membuatnya lebih ramah lingkungan tanpa mengurangi kekuatan.',
        spek: { 'Layar':'45mm LTPO OLED, 2000 nits', 'Chip':'Apple S9 SiP', 'Konektivitas':'GPS, Bluetooth 5.3, WiFi', 'Baterai':'Hingga 18 jam', 'Tahan Air':'50 meter (WR50)', 'Sensor':'Detak Jantung, SpO2, Kompas', 'Material':'Aluminium', 'Kompatibilitas':'iPhone XS atau lebih baru' }
    },
    'samsung-s24': {
        nama: 'Samsung Galaxy S24 Ultra', harga: 19990000, gambar: 'gambar/Samsung S24 Ultra.jpeg',
        kategori: 'smartphone', brand: 'samsung', sku: 'PP-SGS24U', rating: 5, jumlahUlasan: 276,
        badge: 'BESTSELLER', deskripsiSingkat: 'Flagship Samsung dengan S Pen terintegrasi, kamera 200MP, dan fitur AI Galaxy yang revolusioner.',
        deskripsiPanjang: 'Samsung Galaxy S24 Ultra membawa rangka titanium yang lebih kuat dan ringan, dipadu layar Dynamic AMOLED 2X 6.8" dengan kecerahan puncak 2600 nits untuk visibilitas optimal di segala kondisi cahaya. Kamera utama 200MP dengan AI ProVisual Engine menghasilkan foto detail tinggi bahkan saat zoom jauh, didukung Space Zoom hingga 100x. Fitur Galaxy AI memungkinkan terjemahan panggilan real-time, Circle to Search, dan Note Assist untuk merangkum catatan secara otomatis. S Pen terintegrasi di dalam bodi memberikan fleksibilitas menulis dan menggambar tanpa perlu aksesoris tambahan.',
        spek: { 'Layar':'6.8" Dynamic AMOLED 2X, 2600 nits', 'Chipset':'Snapdragon 8 Gen 3', 'RAM':'12GB', 'Penyimpanan':'256GB', 'Kamera Utama':'200MP + 50MP + 12MP + 10MP', 'Baterai':'5000 mAh', 'S Pen':'Terintegrasi', 'Sistem Operasi':'Android 14, One UI 6.1' }
    },
    'rog-strix': {
        nama: 'ASUS ROG Strix G513 Gaming', harga: 22990000, gambar: 'gambar/ASUS ROG Strix G513 Gaming.jpeg',
        kategori: 'gaming', brand: 'asus', sku: 'PP-ROGSTRIX513', rating: 5, jumlahUlasan: 144,
        badge: 'BARU', deskripsiSingkat: 'Laptop gaming bertenaga dengan layar refresh rate tinggi dan sistem pendingin ROG Intelligent Cooling.',
        deskripsiPanjang: 'ASUS ROG Strix G513 dirancang untuk gamer yang menginginkan performa maksimal tanpa kompromi pada portabilitas. Kombinasi prosesor AMD Ryzen kelas tinggi dengan GPU NVIDIA RTX seri terbaru memastikan frame rate tinggi dan stabil di berbagai judul game AAA maupun esport. Layar 15.6" dengan refresh rate hingga 144Hz membuat pergerakan visual terasa sangat responsif, ideal untuk game kompetitif. Keyboard RGB per-key dengan travel key yang nyaman mendukung sesi gaming maupun mengetik dalam waktu lama. Sistem pendingin dual-fan dengan teknologi Arc Flow memastikan suhu komponen tetap terkendali bahkan dalam beban kerja berat.',
        spek: { 'Layar':'15.6" FHD 144Hz', 'Prosesor':'AMD Ryzen 7 7735HS', 'GPU':'NVIDIA RTX 4050 6GB', 'RAM':'16GB DDR5', 'Penyimpanan':'512GB NVMe SSD', 'Keyboard':'RGB Per-Key Backlit', 'Sistem Operasi':'Windows 11 Home', 'Berat':'2.25 kg' }
    },
    'macbook-m2': {
        nama: 'MacBook Air M2 13" 256GB', harga: 17490000, gambar: 'gambar/Macbook Air.jpeg',
        kategori: 'laptop', brand: 'apple', sku: 'PP-MBAM2-256', rating: 5, jumlahUlasan: 534,
        badge: 'DISKON', deskripsiSingkat: 'Laptop tipis dan ringan bertenaga chip M2, baterai tahan hingga 18 jam tanpa kipas pendingin.',
        deskripsiPanjang: 'MacBook Air M2 menghadirkan performa luar biasa dalam bodi yang sangat tipis hanya 11.3mm, berkat chip Apple M2 8-core CPU dan hingga 10-core GPU yang efisien tanpa membutuhkan kipas pendingin sama sekali — sehingga benar-benar senyap saat digunakan. Layar Liquid Retina 13.6" mendukung 1 miliar warna dan kecerahan 500 nits, nyaman untuk bekerja maupun menikmati konten multimedia. Baterai mampu bertahan hingga 18 jam dalam satu kali pengisian, cocok untuk aktivitas sehari penuh tanpa perlu charger. Desain unibody aluminium daur ulang memberikan kesan premium sekaligus ringan dibawa kemana saja.',
        spek: { 'Layar':'13.6" Liquid Retina, 500 nits', 'Chip':'Apple M2 (8-core CPU, 10-core GPU)', 'RAM':'8GB Unified Memory', 'Penyimpanan':'256GB SSD', 'Baterai':'Hingga 18 jam', 'Berat':'1.24 kg', 'Port':'2x Thunderbolt/USB4, MagSafe 3', 'Sistem Operasi':'macOS Sonoma' }
    },
    'magic-mouse': {
        nama: 'Magic Mouse Apple', harga: 1290000, gambar: 'gambar/Magic Mouse Apple.jpg',
        kategori: 'aksesoris', brand: 'apple', sku: 'PP-MGCMOUSE', rating: 5, jumlahUlasan: 210,
        deskripsiSingkat: 'Mouse nirkabel Apple dengan permukaan multi-touch dan desain minimalis yang ikonik.',
        deskripsiPanjang: 'Magic Mouse menghadirkan pengalaman scrolling dan navigasi yang mulus berkat permukaan multi-touch yang mendukung gestur seperti swipe antar halaman dan zoom. Bentuknya yang rendah dan melengkung pas mengikuti lekukan tangan, membuatnya nyaman digenggam dalam waktu lama. Konektivitas Bluetooth memastikan koneksi stabil dengan Mac, iPad, maupun perangkat lain yang mendukung Bluetooth standar. Baterai internal dapat diisi ulang melalui port Lightning dan mampu bertahan hingga satu bulan penuh dengan satu kali pengisian.',
        spek: { 'Tipe':'Wireless, Multi-touch', 'Konektivitas':'Bluetooth', 'Baterai':'Rechargeable, hingga 1 bulan', 'Kompatibilitas':'macOS, iPadOS', 'Port Pengisian':'Lightning', 'Berat':'99g', 'Garansi':'1 Tahun Resmi', 'Warna':'White' }
    },
    'xiaomi-14': {
        nama: 'Xiaomi 14 Ultra 512GB', harga: 15490000, gambar: 'gambar/Xiaomi 14 Ultra 512GB.jpg',
        kategori: 'smartphone', brand: 'xiaomi', sku: 'PP-XM14U-512', rating: 4.5, jumlahUlasan: 167,
        badge: 'VALUE', deskripsiSingkat: 'Smartphone flagship dengan sistem kamera Leica quad-camera dan chip Snapdragon 8 Gen 3.',
        deskripsiPanjang: 'Xiaomi 14 Ultra hadir dengan kerja sama optik bersama Leica, menghasilkan sistem kamera quad 50MP yang mencakup lensa utama, ultrawide, telephoto, dan periscope zoom — masing-masing didesain untuk hasil foto profesional di berbagai kondisi. Chip Snapdragon 8 Gen 3 memberikan performa kelas atas untuk multitasking berat maupun gaming grafis tinggi. Layar AMOLED 6.73" dengan refresh rate 120Hz dan kecerahan hingga 3000 nits membuat tampilan tetap jernih meski di bawah terik matahari. Pengisian cepat 90W membuat baterai penuh hanya dalam waktu sekitar 30 menit.',
        spek: { 'Layar':'6.73" AMOLED 120Hz, 3000 nits', 'Chipset':'Snapdragon 8 Gen 3', 'RAM':'16GB', 'Penyimpanan':'512GB', 'Kamera Utama':'50MP Quad Leica', 'Baterai':'5300 mAh', 'Pengisian':'90W Wired, 80W Wireless', 'Sistem Operasi':'Android 14, HyperOS' }
    },
    'sony-spk': {
        nama: 'Sony SRS-XB43 Speaker', harga: 2290000, gambar: 'gambar/Sony SRS-XB43 Speaker.avif',
        kategori: 'audio', brand: 'sony', sku: 'PP-SNXB43', rating: 5, jumlahUlasan: 89,
        deskripsiSingkat: 'Speaker portabel tahan air dengan bass kuat (Extra Bass) dan lighting LED yang sinkron dengan musik.',
        deskripsiPanjang: 'Sony SRS-XB43 dirancang untuk pesta dan aktivitas outdoor dengan teknologi Extra Bass yang menghasilkan suara bass dalam dan menggelegar tanpa distorsi. Sertifikasi IP67 membuatnya tahan terhadap air dan debu, aman digunakan di kolam renang maupun pantai. Lampu LED Line Light di sekeliling speaker menyala mengikuti irama musik, menambah suasana pesta semakin hidup. Baterai tahan hingga 24 jam pemakaian terus-menerus, serta dapat dipasangkan dengan speaker Sony lain melalui fitur Party Connect untuk suara yang lebih besar.',
        spek: { 'Tipe':'Portable Wireless Speaker', 'Daya':'Extra Bass 2-way Speaker', 'Tahan Air/Debu':'IP67', 'Baterai':'Hingga 24 jam', 'Konektivitas':'Bluetooth 5.0, NFC', 'Fitur':'Party Connect, Party Light', 'Berat':'2.9 kg', 'Garansi':'1 Tahun Resmi' }
    },
    'thinkpad': {
        nama: 'Lenovo ThinkPad X1 Carbon G12', harga: 31990000, gambar: 'gambar/Lenovo ThinkPad X1 Carbon G12.jpeg',
        kategori: 'laptop', brand: 'lenovo', sku: 'PP-TPX1CG12', rating: 5, jumlahUlasan: 73,
        badge: 'BARU', deskripsiSingkat: 'Laptop bisnis premium dengan bodi carbon fiber super ringan dan keamanan kelas enterprise.',
        deskripsiPanjang: 'Lenovo ThinkPad X1 Carbon Gen 12 melanjutkan reputasi seri ThinkPad sebagai laptop bisnis paling tepercaya, dengan bodi carbon fiber yang hanya seberat 1.12 kg namun lolos uji ketahanan militer MIL-STD-810H. Prosesor Intel Core Ultra generasi terbaru memberikan efisiensi daya sekaligus performa AI on-device yang signifikan untuk produktivitas kantor. Layar 14" dengan opsi hingga 2.8K OLED menghasilkan warna akurat untuk presentasi maupun analisis data. Fitur keamanan seperti ThinkShutter (penutup kamera fisik), fingerprint reader, dan dTPM 2.0 menjadikannya pilihan utama bagi profesional yang mengutamakan privasi data.',
        spek: { 'Layar':'14" WUXGA / 2.8K OLED opsional', 'Prosesor':'Intel Core Ultra 7', 'RAM':'32GB LPDDR5x', 'Penyimpanan':'1TB NVMe SSD', 'Berat':'1.12 kg', 'Keamanan':'ThinkShutter, Fingerprint, dTPM 2.0', 'Ketahanan':'MIL-STD-810H', 'Sistem Operasi':'Windows 11 Pro' }
    },
    'airpods': {
        nama: 'AirPods Pro 2nd Generation', harga: 3990000, gambar: 'gambar/AirPods Pro 2nd Generation.jpeg',
        kategori: 'aksesoris', brand: 'apple', sku: 'PP-APP2GEN', rating: 5, jumlahUlasan: 388,
        badge: 'POPULER', deskripsiSingkat: 'Earbud premium Apple dengan Active Noise Cancellation 2x lebih baik dan Adaptive Audio.',
        deskripsiPanjang: 'AirPods Pro generasi kedua dibekali chip H2 yang meningkatkan kemampuan Active Noise Cancellation hingga dua kali lebih efektif dibanding generasi sebelumnya, sekaligus menghadirkan mode Transparency yang lebih natural. Fitur Adaptive Audio secara otomatis menyesuaikan tingkat peredam bising berdasarkan kondisi lingkungan sekitar pengguna secara real-time. Casing pengisian kini dilengkapi speaker bawaan untuk fitur Find My dan tahan debu/air dengan rating IP54, baik casing maupun earbud-nya. Kontrol sentuh pada tangkai memungkinkan pengaturan volume hanya dengan menggeser jari, menambah kemudahan penggunaan sehari-hari.',
        spek: { 'Tipe':'In-ear, True Wireless', 'Chip':'Apple H2', 'Noise Cancelling':'Active (2x lebih baik)', 'Baterai':'6 jam (ANC on), 30 jam dengan case', 'Tahan Air/Debu':'IP54', 'Konektivitas':'Bluetooth 5.3', 'Fitur':'Adaptive Audio, Find My, USB-C', 'Garansi':'1 Tahun Resmi' }
    },
};

/* =======================
    UTILITAS & KONSTANTA
   ======================= */
const PROMOS = { PIXELNEW10: 0.10, HEMAT20: 0.20, GRATISONGKIR: 'free' };
const fmt = (n) => 'Rp ' + n.toLocaleString('id-ID');

function showToast(msg, type = 'success') {
    const existing = document.getElementById('pp-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'pp-toast';
    toast.textContent = msg;
    
    // MENGGUNAKAN CSS VARIABLES AGAR OTOMATIS BERUBAH SAAT KLIK TEMA
    const bgColor = type === 'error' ? '#EF4444' : 'var(--clr-surf)'; 
    const textColor = type === 'error' ? '#fff' : 'var(--txt)';
    const borderColor = type === 'error' ? '#EF4444' : 'var(--clr-cyan)';

    toast.style.cssText = `
        position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
        background: ${bgColor};
        color: ${textColor}; 
        padding: 12px 20px; border-radius:12px;
        font-size:.85rem; font-weight:600; z-index:99999;
        border: 1px solid ${borderColor};
        box-shadow: var(--sh-md);
        animation:ppToastIn .25s ease;
        
        /* Pengaturan responsif mobile */
        width: calc(100% - 32px);  
        max-width: 380px;          
        text-align: center;        
        white-space: normal;       
        box-sizing: border-box;
    `;

    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .3s'; setTimeout(() => toast.remove(), 300); }, 2500);
}

/* =============================
    CART MODULE (LocalStorage)
   ============================= */
const Cart = {
    KEY: 'pixelpair_cart',

    get() {
        try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
        catch { return {}; }
    },

    save(data) {
        localStorage.setItem(this.KEY, JSON.stringify(data));
        this.updateBadge();
    },

    add(id) {
        if (!Auth.requireLogin()) return;
        if (!PRODUK_DATA[id]) return;
        const cart = this.get();
        cart[id] = (cart[id] || 0) + 1;
        this.save(cart);
        showToast('✅ ' + PRODUK_DATA[id].nama + ' ditambahkan ke keranjang!');
    },

    remove(id) {
        const cart = this.get();
        delete cart[id];
        this.save(cart);
    },

    updateQty(id, qty) {
        const q = parseInt(qty);
        if (isNaN(q) || q < 1) return;
        const cart = this.get();
        cart[id] = q;
        this.save(cart);
    },

    clear() {
        localStorage.removeItem(this.KEY);
        this.updateBadge();
    },

    total() {
        const cart = this.get();
        return Object.entries(cart).reduce((s, [id, qty]) => {
            return s + (PRODUK_DATA[id] ? PRODUK_DATA[id].harga * qty : 0);
        }, 0);
    },

    count() {
        return Object.values(this.get()).reduce((s, q) => s + q, 0);
    },

    updateBadge() {
        document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = this.count();
        });
    },
};

/* ======================================================
BUY NOW MODULE — untuk tombol "Beli" satuan
Terpisah dari Cart agar produk yang ditekan "Beli"
TIDAK ikut tercampur dengan isi keranjang yang lain.
========================================================= */
const BuyNow = {
    KEY: 'pixelpair_buynow',

    /* Set produk tunggal yang akan dibeli langsung */
    set(id, qty = 1) {
        sessionStorage.setItem(this.KEY, JSON.stringify({ id, qty }));
    },

    get() {
        try { return JSON.parse(sessionStorage.getItem(this.KEY)); }
        catch { return null; }
    },

    clear() {
        sessionStorage.removeItem(this.KEY);
    }
};

/* ===================================
    RIWAYAT MODULE (LocalStorage)
=================================== */
const Riwayat = {
    KEY: 'pixelpair_riwayat',

    get() {
        try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
        catch { return []; }
    },

    save(data) {
        localStorage.setItem(this.KEY, JSON.stringify(data));
    },

    add(order) {
        const list = this.get();
        list.unshift(order); // terbaru di atas
        this.save(list);
    },

    generateId() {
        return 'PP-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 9000) + 1000);
    }
};

/* ================================================
    AUTH MODULE (LocalStorage — simulasi login)
================================================ */
const Auth = {
    KEY: 'pixelpair_auth',

    isLoggedIn() {
        return localStorage.getItem(this.KEY) === 'true';
    },

    login(email, nama) {
        localStorage.setItem(this.KEY, 'true');
        localStorage.setItem('pixelpair_auth_email', email || '');
        if (nama) {
        // Simpan nama ke "database" akun lokal agar bisa dipakai lagi saat login biasa
        const akun = this.getAkunDB();
        akun[email] = nama;
        localStorage.setItem('pixelpair_akun_db', JSON.stringify(akun));
        localStorage.setItem('pixelpair_auth_nama', nama);
        } else {
        // Login biasa (tanpa daftar) — cari nama dari akun DB berdasarkan email
        const akun = this.getAkunDB();
        const namaTersimpan = akun[email];
        localStorage.setItem('pixelpair_auth_nama', namaTersimpan || (email ? email.split('@')[0] : 'Pengguna'));
        }
    },

    getAkunDB() {
        try { return JSON.parse(localStorage.getItem('pixelpair_akun_db')) || {}; }
        catch { return {}; }
    },

    logout() {
        localStorage.removeItem(this.KEY);
        localStorage.removeItem('pixelpair_auth_email');
        localStorage.removeItem('pixelpair_auth_nama');
    },

    getEmail() {
        return localStorage.getItem('pixelpair_auth_email') || '';
    },

    getNama() {
        return localStorage.getItem('pixelpair_auth_nama') || 'Pengguna';
    },

    /* Tampilkan modal "harap login" jika belum login.
        Return true jika sudah login (boleh lanjut), false jika belum (modal ditampilkan). */
    requireLogin() {
        if (this.isLoggedIn()) return true;
        sessionStorage.setItem('pp_redirect_after_login', window.location.pathname.split('/').pop() || 'index.html');
        const modal = document.getElementById('modal-login-required');
        if (modal) modal.style.display = 'flex';
        return false;
    },

    /* Tampilkan ikon profil di navbar-actions jika sudah login, sembunyikan tombol Login.
        Pakai elemen TERPISAH (.profile-icon) supaya tidak ketimpa rule CSS yang
        menyembunyikan .btn-outline di mobile (itu rule untuk tombol Login saja). */
    updateUI() {
        const loggedIn = this.isLoggedIn();
        
        document.querySelectorAll('.navbar-actions').forEach(actions => {
            // 1. Cari atau buat kontainer untuk tombol aksi
            const loginBtn = actions.querySelector('a[href="login.html"]');
            let profileBtn = actions.querySelector('.profile-icon');

            if (loggedIn) {
                // Sembunyikan tombol Login asli
                if (loginBtn) loginBtn.style.display = 'none';

                // Jika profileBtn belum ada, buat baru
                if (!profileBtn) {
                    profileBtn = document.createElement('a');
                    profileBtn.href = '#';
                    profileBtn.className = 'btn-icon profile-icon';
                    profileBtn.title = 'Akun: ' + this.getNama();
                
                    // Sisipkan sebelum tombol hamburger
                    const hamburger = actions.querySelector('.hamburger-label');
                    if (hamburger) {
                        actions.insertBefore(profileBtn, hamburger);
                    } else {
                        actions.appendChild(profileBtn);
                    }
                }
                
                // Update ikon
                profileBtn.textContent = '👤';
                profileBtn.onclick = (e) => {
                    e.preventDefault();
                    if (confirm('Keluar dari akun ' + this.getNama().split(' ')[0] + '?')) {
                        Auth.logout();
                        location.reload();
                    }
                };
            } else {
                // Tampilkan kembali tombol Login, hapus ikon profil
                if (loginBtn) loginBtn.style.display = 'flex'; // atau ''
                if (profileBtn) profileBtn.remove();
            }
        });

        // Perbarui menu hamburger untuk mobile
        document.querySelectorAll('.nav-links').forEach(nav => {
            // Hapus bagian pembuatan logoutLi yang menambahkan teks "Keluar"
            const logoutLi = nav.querySelector('.nav-mobile-logout');
            if (logoutLi) logoutLi.remove(); 
            
            if (loggedIn) {
                // Sembunyikan link Login di mobile jika sudah login
                const loginLink = nav.querySelector('a[href="login.html"]');
                if (loginLink) loginLink.parentElement.style.display = 'none';
            } else {
                // Tampilkan kembali link Login jika belum login
                const loginLink = nav.querySelector('a[href="login.html"]');
                if (loginLink) loginLink.parentElement.style.display = '';
            }
        });
    }
};

/* ==============================================
    MODAL LOGIN REQUIRED — close handler global
   ============================================== */
function initLoginModal() {
    const modal   = document.getElementById('modal-login-required');
    if (!modal) return;
    const closeBtn = document.getElementById('btn-modal-login-close');
    closeBtn?.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
}


function initKeranjang() {
    const listEl    = document.getElementById('keranjang-list');
    const countEl   = document.getElementById('cart-item-count');
    const itemsEl   = document.getElementById('ringkasan-items');
    const subEl     = document.getElementById('ringkasan-subtotal');
    const ongkirEl  = document.getElementById('ringkasan-ongkir');
    const ppnEl     = document.getElementById('ringkasan-ppn');
    const totalEl   = document.getElementById('ringkasan-total');
    const promoInput= document.getElementById('promo-input-cart');

    if (!listEl) return;

    let diskon = 0;
    let freeOngkir = false;

    function render() {
        const cart = Cart.get();
        const ids = Object.keys(cart);

        countEl.textContent = ids.length + ' produk di keranjang';

        if (ids.length === 0) {
            listEl.innerHTML = `
                <div class="cart-empty">
                    <div style="font-size:3.5rem;margin-bottom:16px">🛒</div>
                    <h3>Keranjang Masih Kosong</h3>
                    <p style="color:var(--txt2);margin-bottom:24px">Yuk, pilih produk favoritmu dari katalog kami!</p>
                    <a href="katalog.html" class="btn btn-primary">Mulai Belanja →</a>
                </div>`;
            if (itemsEl) itemsEl.innerHTML = '';
            [subEl, ongkirEl, ppnEl, totalEl].forEach(el => { if (el) el.textContent = 'Rp 0'; });
            return;
        }

        listEl.innerHTML = ids.map(id => {
            const p = PRODUK_DATA[id];
            if (!p) return '';
            const qty = cart[id];
            return `
                <div class="keranjang-item" data-id="${id}">
                    <img src="${p.gambar}" alt="${p.nama}" class="keranjang-img" />
                
                    <div class="keranjang-detail">
                        <div>
                            <p class="keranjang-kategori">${p.kategori}</p>
                            <h3 class="keranjang-nama">${p.nama}</h3>
                        </div>
                        <p class="keranjang-harga">${fmt(p.harga)}</p>
                    </div>

                    <div class="keranjang-actions-right">
                        <button class="keranjang-hapus" data-id="${id}" title="Hapus">✕</button>
                        <div class="keranjang-qty-wrap">
                            <button class="qty-btn" data-act="minus" data-id="${id}">−</button>
                            <input type="number" class="qty-input" value="${qty}" min="1" max="99" data-id="${id}" />
                            <button class="qty-btn" data-act="plus" data-id="${id}">+</button>
                        </div>
                    </div>
                </div>`;
        }).join('');

        // Kalkulasi
        const subtotal = Cart.total();
        const ongkir   = freeOngkir ? 0 : 25000;
        const afterDiskon = subtotal * (1 - diskon);
        const ppn      = Math.round(afterDiskon * 0.11);
        const total    = afterDiskon + ongkir + ppn;

        if (subEl)    subEl.textContent    = fmt(subtotal);
        if (ongkirEl) ongkirEl.textContent = freeOngkir ? 'GRATIS 🎉' : fmt(ongkir);
        if (ppnEl)    ppnEl.textContent    = fmt(ppn);
        if (totalEl)  totalEl.textContent  = fmt(Math.round(total));

        // Ringkasan items
        if (itemsEl) {
            itemsEl.innerHTML = ids.map(id => {
                const p = PRODUK_DATA[id]; if (!p) return '';
                return `
                    <div class="hitung-row ringkasan-item-row">
                        <span class="nama-qty">${p.nama} &times;${cart[id]}</span>
                        <span class="harga-sub">${fmt(p.harga * cart[id])}</span>
                    </div>`;
            }).join('');
        }

        // Event listeners
        listEl.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const c = Cart.get();
                if (btn.dataset.act === 'plus') c[id] = (c[id] || 1) + 1;
                else c[id] = Math.max(1, (c[id] || 1) - 1);
                Cart.save(c);
                render();
            });
        });

        listEl.querySelectorAll('.qty-input').forEach(inp => {
            inp.addEventListener('change', () => {
                Cart.updateQty(inp.dataset.id, inp.value);
                render();
            });
        });

        listEl.querySelectorAll('.keranjang-hapus').forEach(btn => {
            btn.addEventListener('click', () => {
                Cart.remove(btn.dataset.id);
                showToast('🗑 Produk dihapus dari keranjang');
                render();
            });
        });
    }

    // Promo
    document.querySelector('[data-action="apply-promo"]')?.addEventListener('click', () => {
        const kode = promoInput?.value.trim().toUpperCase();
        if (!kode) { showToast('Masukkan kode promo terlebih dahulu', 'error'); return; }
        if (PROMOS[kode] === undefined) { showToast('❌ Kode promo tidak valid', 'error'); return; }
        if (PROMOS[kode] === 'free') { freeOngkir = true; diskon = 0; showToast('🎉 Ongkos kirim GRATIS!'); }
        else { diskon = PROMOS[kode]; freeOngkir = false; showToast(`🎉 Diskon ${diskon * 100}% berhasil diterapkan!`); }
        render();
    });

    // Hapus semua
    document.querySelector('[data-action="hapus-semua"]')?.addEventListener('click', () => {
        if (Cart.count() === 0) return;
        if (!confirm('Kosongkan semua produk dari keranjang?')) return;
        Cart.clear();
        showToast('🗑 Keranjang dikosongkan');
        render();
    });

    // Lanjut ke pemesanan — wajib login
    document.getElementById('btn-lanjut-pemesanan')?.addEventListener('click', e => {
        if (!Auth.requireLogin()) { e.preventDefault(); return; }
        if (Cart.count() === 0) { e.preventDefault(); showToast('⚠️ Keranjang masih kosong', 'error'); return; }
    });

    render();
}

/* ===========================================
    HALAMAN: KATALOG — Filter & Search
   =========================================== */
function initKatalog() {
    const grid = document.getElementById('galeri-produk');
    if (!grid) return;

    const cards       = Array.from(grid.querySelectorAll('.produk-card'));
    const countEl     = document.querySelector('.katalog-count strong');
    const searchInput = document.querySelector('.search-wrap input');

    function updateCount(visible) {
        if (countEl) countEl.textContent = visible;
    }

    function filterCards() {
        const katVal = document.querySelector('input[name="kategori"]:checked')?.value || 'semua';
        const q      = (searchInput?.value || '').toLowerCase().trim();

        let visible = 0;
        cards.forEach(card => {
            const kat  = card.dataset.kategori || '';
            const name = card.querySelector('.produk-name')?.textContent.toLowerCase() || '';

            const katMatch    = katVal === 'semua' || kat === katVal;
            const searchMatch = q === '' || name.includes(q);

            const show = katMatch && searchMatch;
            card.style.display = show ? '' : 'none';
            if (show) visible++;
        });
        updateCount(visible);
    }

    // Kategori radio
    document.querySelectorAll('input[name="kategori"]').forEach(r => r.addEventListener('change', filterCards));

    // Search
    searchInput?.addEventListener('input', filterCards);

    // Reset filter
    document.querySelector('[data-action="reset-filter"]')?.addEventListener('click', () => {
        const semua = document.querySelector('input[name="kategori"][value="semua"]');
        if (semua) semua.checked = true;
        if (searchInput) searchInput.value = '';
        filterCards();
        showToast('Filter direset');
    });

    // Tombol + Keranjang & Beli di katalog
    grid.addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const id  = btn.dataset.id;
        if (btn.dataset.action === 'add-cart') {
            Cart.add(id);
        } else if (btn.dataset.action === 'beli') {
            if (!Auth.requireLogin()) return;
            BuyNow.set(id, 1);
            showToast('🛍 Menuju halaman pemesanan...');
            setTimeout(() => window.location.href = 'pemesanan.html?mode=buynow', 800);
        }
    });

    updateCount(cards.length);
}

/* ===========================
    HALAMAN: DETAIL PRODUK
   =========================== */
function initDetail() {
    const imgEl = document.getElementById('detail-img');
    if (!imgEl) return;

    const params = new URLSearchParams(window.location.search);
    const id     = params.get('id');
    const p      = PRODUK_DATA[id];

    if (!p) {
        document.querySelector('.detail-layout').innerHTML =
            `<div style="text-align:center;padding:60px 20px;grid-column:1/-1">
                <h2>Produk Tidak Ditemukan</h2>
                <p style="color:var(--txt2);margin:12px 0 24px">Produk yang kamu cari mungkin sudah tidak tersedia.</p>
                <a href="katalog.html" class="btn btn-primary">← Kembali ke Katalog</a>
            </div>`;
        return;
    }

    // Isi gambar & info dasar
    imgEl.src = p.gambar;
    imgEl.alt = p.nama;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('detail-breadcrumb', p.nama);
    set('detail-kategori', p.kategori.charAt(0).toUpperCase() + p.kategori.slice(1));
    set('detail-nama', p.nama);
    set('detail-harga', fmt(p.harga));
    set('detail-sku', p.sku || '—');
    set('detail-meta-kat', p.kategori.charAt(0).toUpperCase() + p.kategori.slice(1));
    set('detail-meta-brand', p.brand.charAt(0).toUpperCase() + p.brand.slice(1));

    const badgeEl = document.getElementById('detail-badge');
    if (badgeEl) {
        if (p.badge) { badgeEl.textContent = p.badge; badgeEl.style.display = 'inline-block'; }
        else { badgeEl.style.display = 'none'; }
    }

    const ratingEl = document.getElementById('detail-rating');
    if (ratingEl) {
        const full = Math.round(p.rating || 5);
        ratingEl.innerHTML = '★'.repeat(full) + '☆'.repeat(5 - full) + ` <span>(${p.jumlahUlasan || 0} ulasan)</span>`;
    }

    // Deskripsi singkat & panjang
    set('detail-desc-short', p.deskripsiSingkat || '');
    set('detail-desc-extra', p.deskripsiPanjang || '');

    // Tabel spesifikasi
    const spekTable = document.getElementById('detail-spek-table');
    if (spekTable && p.spek) {
        spekTable.innerHTML = Object.entries(p.spek).map(([k, v]) =>
            `<tr><td class="spek-key">${k}</td><td class="spek-val">${v}</td></tr>`
        ).join('');
    }

    // Toggle "Baca Selengkapnya"
    const btnBaca  = document.getElementById('btn-baca-lagi');
    const descFull = document.getElementById('detail-desc-full');
    btnBaca?.addEventListener('click', () => {
        const isHidden = descFull.classList.contains('hidden');
        descFull.classList.toggle('hidden');
        btnBaca.textContent = isHidden ? 'Tutup ▴' : 'Baca Selengkapnya ▾';
    });

    // Tombol Tambah ke Keranjang & Beli Sekarang
    document.getElementById('btn-detail-cart')?.addEventListener('click', () => {
        Cart.add(id);
    });
    document.getElementById('btn-detail-beli')?.addEventListener('click', () => {
        if (!Auth.requireLogin()) return;
        BuyNow.set(id, 1);
        showToast('🛍 Menuju halaman pemesanan...');
        setTimeout(() => window.location.href = 'pemesanan.html?mode=buynow', 800);
    });
}


function initPemesanan() {
    const produkList   = document.getElementById('pem-produk-list');
    if (!produkList) return;

    // Wajib login untuk mengakses halaman pemesanan
    if (!Auth.requireLogin()) {
        produkList.closest('.pemesanan-layout').style.display = 'none';
        return;
    }

    /* SUMBER PESANAN
        Jika datang dari tombol "Beli" satuan (katalog/index/detail) → ?mode=buynow,
        maka hanya produk itu saja yang diproses, BUKAN seluruh isi keranjang.
        Jika datang dari halaman Keranjang ("Lanjut ke Pemesanan") → pakai semua isi Cart. */
    const params  = new URLSearchParams(window.location.search);
    const isBuyNow = params.get('mode') === 'buynow' && BuyNow.get() !== null;

    function getOrderItems() {
        if (isBuyNow) {
            const bn = BuyNow.get();
            if (!bn || !PRODUK_DATA[bn.id]) return {};
            return { [bn.id]: bn.qty };
        }
        return Cart.get();
    }

    const hpInput = document.getElementById('pem-hp');
    
    if (hpInput) {
        hpInput.addEventListener('input', function() {
            // 1. Pastikan hanya angka
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // 2. Pastikan panjang tidak lebih dari 13 (menangani copy-paste)
            if (this.value.length > 13) {
                this.value = this.value.slice(0, 13);
            }
        });
    }

    function getOrderTotal() {
        const items = getOrderItems();
        return Object.entries(items).reduce((s, [id, qty]) => {
            return s + (PRODUK_DATA[id] ? PRODUK_DATA[id].harga * qty : 0);
        }, 0);
    }

    function getOrderCount() {
        return Object.values(getOrderItems()).reduce((s, q) => s + q, 0);
    }

    const ongkirRadios = document.querySelectorAll('input[name="pengiriman"]');
    const ONGKIR_PRICE = { 'jne-reg': 25000, 'jne-yes': 55000, 'sicepat': 20000, 'jnt': 22000, 'gosend': 35000 };

    let diskon = 0;
    let freeOngkir = false;

    /* ── TWO-WAY BINDING: auto-save & restore form pemesanan ── */
    const FORM_KEY = 'pixelpair_form_pemesanan';
    const formFieldIds = ['pem-nama','pem-nama-belakang','pem-email','pem-hp','pem-alamat','pem-kota','pem-provinsi','pem-kodepos','pem-catatan'];

    function saveFormData() {
        const data = {};
        formFieldIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) data[id] = el.value;
        });
        localStorage.setItem(FORM_KEY, JSON.stringify(data));
    }

    function restoreFormData() {
        try {
            const data = JSON.parse(localStorage.getItem(FORM_KEY)) || {};
            formFieldIds.forEach(id => {
                const el = document.getElementById(id);
                if (el && data[id]) el.value = data[id];
            });
        } catch { /* ignore */ }
    }

    // Pasang listener auto-save pada setiap field (event input = realtime)
    formFieldIds.forEach(id => {
        const el = document.getElementById(id);
        el?.addEventListener('input', saveFormData);
    });
    restoreFormData();

    // Render produk dari sumber pesanan (buy-now satuan ATAU seluruh cart)
    function renderProduk() {
        const items = getOrderItems();
        const ids   = Object.keys(items);

        if (ids.length === 0) {
            produkList.innerHTML = `<p style="color:var(--txt2);font-size:.9rem">Keranjang kosong. <a href="katalog.html" style="color:var(--clr-cyan)">Pilih produk dulu →</a></p>`;
        } else {
            produkList.innerHTML = ids.map(id => {
                const p = PRODUK_DATA[id]; if (!p) return '';
                const qty = items[id];
                return `<div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--clr-border)">
                    <img src="${p.gambar}" alt="${p.nama}" style="width:56px;height:56px;object-fit:contain;border-radius:8px;background:var(--clr-surf2)" />
                    <div style="flex:1"><p style="font-size:.8rem;color:var(--txt2)">${p.kategori}</p><p style="font-weight:600;font-size:.92rem">${p.nama}</p><p style="color:var(--clr-cyan);font-size:.85rem">×${qty}</p></div>
                    <strong>${fmt(p.harga * qty)}</strong>
                </div>`;
            }).join('');
        }
        kalkulasi();
    }

    function getOngkir() {
        const sel = document.querySelector('input[name="pengiriman"]:checked');
        if (freeOngkir) return 0;
        return sel ? (ONGKIR_PRICE[sel.value] || 25000) : 25000;
    }

    function kalkulasi() {
        const subtotal  = getOrderTotal();
        const afterDisk = subtotal * (1 - diskon);
        const ongkir    = getOngkir();
        const ppn       = Math.round(afterDisk * 0.11);
        const total     = afterDisk + ongkir + ppn;

        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('pem-subtotal', fmt(subtotal));
        set('pem-ongkir',   freeOngkir ? 'GRATIS 🎉' : fmt(ongkir));
        set('pem-ppn',      fmt(ppn));
        set('pem-total',    fmt(Math.round(total)));

        // Ringkasan items
        const items = getOrderItems();
        const ri    = document.getElementById('pem-ringkasan-items');
        if (ri) {
            ri.innerHTML = Object.entries(items).map(([id, qty]) => {
                const p = PRODUK_DATA[id]; if (!p) return '';
                return `<div class="hitung-row"><span>${p.nama} ×${qty}</span><span>${fmt(p.harga * qty)}</span></div>`;
            }).join('');
        }
    }

    // Ongkir change
    ongkirRadios.forEach(r => r.addEventListener('change', kalkulasi));

    // Promo
    document.querySelector('[data-action="apply-promo"]')?.addEventListener('click', () => {
        const kode = document.getElementById('pem-promo-input')?.value.trim().toUpperCase();
        if (!kode) { showToast('Masukkan kode promo terlebih dahulu', 'error'); return; }
        if (PROMOS[kode] === undefined) { showToast('❌ Kode promo tidak valid', 'error'); return; }
        if (PROMOS[kode] === 'free') { freeOngkir = true; diskon = 0; showToast('🎉 Ongkos kirim GRATIS!'); }
        else { diskon = PROMOS[kode]; freeOngkir = false; showToast(`🎉 Diskon ${diskon * 100}% berhasil diterapkan!`); }
        kalkulasi();
    });

    // Konfirmasi pesanan
    document.getElementById('btn-konfirmasi')?.addEventListener('click', () => {
        // Validasi form (Tambahkan variabel baru)
        const nama         = document.getElementById('pem-nama')?.value.trim();
        const namaBelakang = document.getElementById('pem-nama-belakang')?.value.trim();
        const email        = document.getElementById('pem-email')?.value.trim();
        const hp           = document.getElementById('pem-hp')?.value.trim();
        const alamat       = document.getElementById('pem-alamat')?.value.trim();
        const kota         = document.getElementById('pem-kota')?.value.trim();
        const provinsi     = document.getElementById('pem-provinsi')?.value.trim();
        const kodepos      = document.getElementById('pem-kodepos')?.value.trim();

        // Cek satu-satu apakah ada yang kosong
        if (!nama)         { showToast('⚠️ Nama depan wajib diisi', 'error'); document.getElementById('pem-nama')?.focus(); return; }
        if (!namaBelakang) { showToast('⚠️ Nama belakang wajib diisi', 'error'); document.getElementById('pem-nama-belakang')?.focus(); return; }
        if (!email || !email.includes('@')) { showToast('⚠️ Email tidak valid', 'error'); document.getElementById('pem-email')?.focus(); return; }
        if (!hp || hp.length < 9)  { showToast('⚠️ Nomor HP tidak valid', 'error'); document.getElementById('pem-hp')?.focus(); return; }
        if (!alamat)       { showToast('⚠️ Alamat pengiriman wajib diisi', 'error'); document.getElementById('pem-alamat')?.focus(); return; }
        if (!kota)         { showToast('⚠️ Kota wajib diisi', 'error'); document.getElementById('pem-kota')?.focus(); return; }
        if (!provinsi)     { showToast('⚠️ Provinsi wajib dipilih', 'error'); document.getElementById('pem-provinsi')?.focus(); return; }
        if (!kodepos)      { showToast('⚠️ Kode pos wajib diisi', 'error'); document.getElementById('pem-kodepos')?.focus(); return; }
        
        if (getOrderCount() === 0) { showToast('⚠️ Tidak ada produk untuk dipesan', 'error'); return; }

        // Generate order
        const orderId = Riwayat.generateId();
        const items   = getOrderItems();
        const produkList = Object.entries(items).map(([id, qty]) => {
            const p = PRODUK_DATA[id]; return p ? `${p.nama} ×${qty}` : '';
        }).filter(Boolean).join('<br>');

        const bayar     = document.querySelector('input[name="bayar"]:checked')?.value || 'bca';
        const bayarLabel = { bca:'Bank BCA', mandiri:'Bank Mandiri', bni:'Bank BNI', gopay:'GoPay', ovo:'OVO', dana:'DANA', qris:'QRIS', cod:'COD', 'cicilan-6':'Cicilan 6 Bln', 'cicilan-12':'Cicilan 12 Bln', 'cicilan-24':'Cicilan 24 Bln' };

        const subtotal  = getOrderTotal();
        const afterDisk = subtotal * (1 - diskon);
        const ongkir    = getOngkir();
        const ppn       = Math.round(afterDisk * 0.11);
        const total     = Math.round(afterDisk + ongkir + ppn);

        const now = new Date();
        const tanggal = now.toLocaleDateString('id-ID', { day:'2-digit', month:'short', year:'numeric' });

        // Simpan ke riwayat
        Riwayat.add({
            id:     orderId,
            tanggal: tanggal,
            produk: produkList,
            qty:    getOrderCount(),
            bayar:  bayarLabel[bayar] || bayar,
            total:  total,
            status: 'proses'
        });

        // Bersihkan sumber pesanan yang relevan SAJA:
        // - Kalau buy-now (beli satuan), hanya hapus BuyNow, Cart yang lain tidak disentuh.
        // - Kalau dari keranjang, baru Cart dikosongkan.
        if (isBuyNow) {
            BuyNow.clear();
        } else {
            Cart.clear();
        }

        // Bersihkan data form yang tersimpan (two-way binding)
        localStorage.removeItem(FORM_KEY);

        // Tampilkan modal
        const modal   = document.getElementById('modal-konfirmasi');
        const orderEl = document.getElementById('modal-order-id');
        if (orderEl) orderEl.textContent = '#' + orderId;
        if (modal) {
            modal.style.display = 'flex';
            modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
        }
    });

    renderProduk();
}

/* =======================================
    HALAMAN: LOGIN — Form Masuk & Daftar
   ======================================= */
function initLogin() {
    if (Auth.isLoggedIn()) {
        alert('Anda sudah login!'); // Memunculkan pop-up
        // Alternatif jika ingin pakai toast: showToast('Anda sudah login!');
        window.location.href = 'index.html'; // Arahkan kembali ke beranda
        return;
    }

    const formMasuk  = document.querySelector('.panel-masuk form');
    const formDaftar = document.querySelector('.panel-daftar form');
    if (!formMasuk && !formDaftar) return;

    function afterLoginSuccess(email, nama) {
        Auth.login(email, nama);
        showToast('✅ Login berhasil! Selamat datang kembali.');
        // Redirect ke halaman sebelumnya jika ada, atau ke katalog
        const redirectTo = sessionStorage.getItem('pp_redirect_after_login') || 'index.html';
        sessionStorage.removeItem('pp_redirect_after_login');
        setTimeout(() => { window.location.href = redirectTo; }, 900);
    }

    formMasuk?.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('login-email')?.value.trim();
        const pass  = document.getElementById('login-pass')?.value.trim();

        if (!email || !email.includes('@')) { showToast('⚠️ Email tidak valid', 'error'); return; }
        if (!pass || pass.length < 6) { showToast('⚠️ Password minimal 6 karakter', 'error'); return; }

        afterLoginSuccess(email); // nama akan diambil otomatis dari akun DB jika pernah daftar
    });

    formDaftar?.addEventListener('submit', e => {
        e.preventDefault();
        const depan   = document.getElementById('reg-depan')?.value.trim();
        const belakang= document.getElementById('reg-belakang')?.value.trim() || '';
        const email   = document.getElementById('reg-email')?.value.trim();
        const pass    = document.getElementById('reg-pass')?.value.trim();
        const confirm = document.getElementById('reg-confirm')?.value.trim();
        const setuju  = document.querySelector('input[name="setuju"]')?.checked;

        if (!depan) { showToast('⚠️ Nama depan wajib diisi', 'error'); return; }
        if (!email || !email.includes('@')) { showToast('⚠️ Email tidak valid', 'error'); return; }
        if (!pass || pass.length < 8) { showToast('⚠️ Password minimal 8 karakter', 'error'); return; }
        if (pass !== confirm) { showToast('⚠️ Konfirmasi password tidak cocok', 'error'); return; }
        if (!setuju) { showToast('⚠️ Harap setujui Syarat & Ketentuan', 'error'); return; }

        const namaLengkap = (depan + ' ' + belakang).trim();
        afterLoginSuccess(email, namaLengkap);
    });
}

function initRiwayat() {
    const tbody  = document.getElementById('riwayat-tbody');
    const cardsWrap = document.getElementById('riwayat-cards');
    if (!tbody) return;

    // Riwayat adalah data pribadi — wajib login
    if (!Auth.requireLogin()) {
        const toolbar = document.querySelector('.riwayat-toolbar');
        const tableWrap = document.querySelector('.table-wrap');
        if (toolbar) toolbar.style.display = 'none';
        if (tableWrap) tableWrap.style.display = 'none';
        if (cardsWrap) cardsWrap.style.display = 'none';
        return;
    }

    const filter = document.getElementById('riwayat-filter');
    const search = document.getElementById('riwayat-search');

    const STATUS_LABEL = {
        proses:    '<span class="status-badge proses">Diproses</span>',
        dikirim:   '<span class="status-badge dikirim">Dikirim</span>',
        selesai:   '<span class="status-badge selesai">Selesai</span>',
        dibatalkan:'<span class="status-badge dibatalkan">Dibatalkan</span>',
    };

    function attachBatalHandlers(root) {
        root.querySelectorAll('.btn-batal-riwayat').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!confirm(`Batalkan pesanan #${btn.dataset.id}?`)) return;
                const list = Riwayat.get();
                const idx  = list.findIndex(r => r.id === btn.dataset.id);
                if (idx > -1) {
                    list[idx].status = 'dibatalkan';
                    Riwayat.save(list);
                    showToast('✅ Pesanan dibatalkan');
                    render();
                }
            });
        });
    }

    function render() {
        const statusVal = filter?.value || 'semua';
        const q         = (search?.value || '').toLowerCase().trim();
        const data      = Riwayat.get();

        if (data.length === 0) {
            const emptyMsg = `Belum ada riwayat pesanan. <a href="katalog.html" style="color:var(--clr-cyan)">Mulai belanja →</a>`;
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--txt2)">${emptyMsg}</td></tr>`;
            if (cardsWrap) cardsWrap.innerHTML = `<div class="riwayat-empty">${emptyMsg}</div>`;
            return;
        }

        const filtered = data.filter(row => {
            const statusMatch = statusVal === 'semua' || row.status === statusVal;
            const searchMatch = q === '' || row.id.toLowerCase().includes(q) || row.produk.toLowerCase().includes(q);
            return statusMatch && searchMatch;
        });

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:40px;color:var(--txt2)">Tidak ada pesanan ditemukan</td></tr>`;
            if (cardsWrap) cardsWrap.innerHTML = `<div class="riwayat-empty">Tidak ada pesanan ditemukan</div>`;
            return;
        }

        // ===== Render TABEL (desktop) =====
        tbody.innerHTML = filtered.map(row => {
            const bisaBatal = row.status === 'proses';
            return `
            <tr>
                <td><strong style="color:var(--clr-cyan);font-size:.85rem">#${row.id}</strong></td>
                <td style="color:var(--txt2);font-size:.83rem">${row.tanggal}</td>
                <td style="text-align:left; font-size:.85rem; white-space:nowrap">${row.produk.split(', ').join('<br>')}</td>
                <td style="text-align:center">${row.qty}</td>
                <td style="font-size:.85rem">${row.bayar}</td>
                <td><strong>${fmt(row.total)}</strong></td>
                <td>${STATUS_LABEL[row.status] || row.status}</td>
                <td>${bisaBatal ? `<button class="btn-batal-riwayat" data-id="${row.id}">Batalkan</button>` : '—'}</td>
            </tr>`;
        }).join('');
        attachBatalHandlers(tbody);

        // ===== Render CARD (mobile) =====
        if (cardsWrap) {
            cardsWrap.innerHTML = filtered.map(row => {
                const bisaBatal = row.status === 'proses';
                return `
                <div class="riwayat-card">
                    <div class="riwayat-card-top">
                        <strong class="riwayat-card-id">#${row.id}</strong>
                        ${STATUS_LABEL[row.status] || row.status}
                    </div>
                    <p class="riwayat-card-produk">${row.produk.split(', ').join('<br>')}</p>
                    <div class="riwayat-card-meta">
                        <span>${row.tanggal}</span>
                        <span>•</span>
                        <span>Qty ${row.qty}</span>
                        <span>•</span>
                        <span>${row.bayar}</span>
                    </div>
                    <div class="riwayat-card-bottom">
                        <strong class="riwayat-card-total">${fmt(row.total)}</strong>
                        ${bisaBatal ? `<button class="btn-batal-riwayat" data-id="${row.id}">Batalkan</button>` : ''}
                    </div>
                </div>`;
            }).join('');
            attachBatalHandlers(cardsWrap);
        }
    }

    filter?.addEventListener('change', render);
    search?.addEventListener('input',  render);

    render();
}

/* =====================================================
    HALAMAN: INDEX — Tombol produk unggulan di beranda
   ===================================================== */
function initIndex() {
    const grid = document.getElementById('galeri-unggulan');
    if (!grid) return;

    grid.addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const id = btn.dataset.id;
        if (btn.dataset.action === 'add-cart') {
            Cart.add(id);
        } else if (btn.dataset.action === 'beli') {
            if (!Auth.requireLogin()) return;
            BuyNow.set(id, 1);
            showToast('🛍 Menuju halaman pemesanan...');
            setTimeout(() => window.location.href = 'pemesanan.html?mode=buynow', 800);
        }
    });
}

function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const DARK_VARS  = {
        '--clr-bg':    '#0A0E1A', '--clr-surf':  '#111827', '--clr-surf2': '#1C2333',
        '--clr-border':'#2A3448', '--txt':       '#F1F5F9', '--txt2':      '#94A3B8',
        '--txt3':      '#4B5563', '--grad-card': 'linear-gradient(145deg,#1C2333,#111827)',
        '--sh-md':     '0 8px 24px rgba(0,0,0,.4)',
    };
    const LIGHT_VARS = {
        '--clr-bg':    '#F8FAFC', '--clr-surf':  '#FFFFFF', '--clr-surf2': '#F1F5F9',
        '--clr-border':'#E2E8F0', '--txt':       '#0F172A', '--txt2':      '#475569',
        '--txt3':      '#94A3B8', '--grad-card': 'linear-gradient(145deg,#F1F5F9,#FFFFFF)',
        '--sh-md':     '0 8px 24px rgba(0,0,0,.08)',
    };

    let isDark = localStorage.getItem('pp_theme') !== 'light';

    function applyTheme() {
        const vars = isDark ? DARK_VARS : LIGHT_VARS;
        const root = document.documentElement;
        Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
        document.body.style.background = isDark ? '#0A0E1A' : '#F8FAFC';
        document.body.style.color      = isDark ? '#F1F5F9' : '#0F172A';

        const header = document.querySelector('header');
        if (header) {
            header.style.background = isDark ? 'rgba(10,14,26,.92)' : 'rgba(255,255,255,0.95)';
            header.style.borderBottomColor = isDark ? '#2A3448' : '#E2E8F0';
        }

        const sunEl  = btn.querySelector('.icon-sun');
        const moonEl = btn.querySelector('.icon-moon');
        if (sunEl)  sunEl.style.display  = isDark ? 'inline' : 'none';
        if (moonEl) moonEl.style.display = isDark ? 'none'   : 'inline';

        localStorage.setItem('pp_theme', isDark ? 'dark' : 'light');
    }

    btn.addEventListener('click', () => { isDark = !isDark; applyTheme(); });
    applyTheme();
}

/* ==================================================== 
    NAV DRAWER MOBILE - tutup otomatis saat klik link
    =================================================== */
function initNavDrawerAutoClose() {
    const navToggle = document.getElementById('nav-toggle');
    if (!navToggle) return;
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });
}

function injectLoginModal() {
    // Mencegah modal disuntikkan dua kali
    if (document.getElementById('modal-login-required')) return;
    
    const modalHTML = `
        <div id="modal-login-required" style="display:none">
            <div class="modal-box">
                <div class="modal-icon">🔐</div>
                <h2>Login Diperlukan</h2>
                <p>Kamu harus login terlebih dahulu untuk menambahkan produk ke keranjang atau melakukan pembelian.</p>
                <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px">
                    <a href="login.html" class="btn btn-primary">Login Sekarang &rarr;</a>
                    <button class="btn btn-ghost" id="btn-modal-login-close">Nanti Saja</button>
                </div>
            </div>
        </div>`;
    
    // Memasukkan modal secara otomatis ke dalam body sebelum tag penutup
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    initLoginModal();
}

/* ==================================================== 
    HERO SLIDER BERANDA
   ==================================================== */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if(slides.length === 0) return;

    let currentIdx = 0;
    let slideInterval;

    function showSlide(index) {
        // Hilangkan kelas active dari semua slide dan dot
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        // Atur perulangan indeks
        if (index >= slides.length) currentIdx = 0;
        else if (index < 0) currentIdx = slides.length - 1;
        else currentIdx = index;

        // Tampilkan slide dan dot saat ini
        slides[currentIdx].classList.add('active');
        dots[currentIdx].classList.add('active');
    }

    function nextSlide() { showSlide(currentIdx + 1); }
    function prevSlide() { showSlide(currentIdx - 1); }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Otomatis pindah setiap 5 detik
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Event listener untuk tombol navigasi
    if(nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    if(prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
    
    // Event listener untuk dots navigasi
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            resetAutoSlide();
        });
    });

    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    // Selalu jalankan di semua halaman
    injectLoginModal();
    Cart.updateBadge();
    initThemeToggle();
    initNavDrawerAutoClose();
    Auth.updateUI();

    // Deteksi halaman berdasarkan ID atau Class unik di masing-masing HTML
    if (document.querySelector('.hero-slider-container')) initHeroSlider();
    if (document.getElementById('keranjang-list'))   initKeranjang();
    if (document.getElementById('galeri-produk'))    initKatalog();
    if (document.getElementById('detail-img'))       initDetail();
    if (document.getElementById('pem-produk-list'))  initPemesanan();
    if (document.getElementById('riwayat-tbody'))    initRiwayat();
    if (document.querySelector('.login-main'))       initLogin();
    if (document.getElementById('galeri-unggulan'))  initIndex();
});
