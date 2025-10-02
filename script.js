// === FUNGSI NAVIGASI ANTAR HALAMAN ===
function showHome() {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('detailScreen').style.display = 'none';
}

function showDetail() {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('detailScreen').style.display = 'block';
}

// === FUNGSI BUKA BERITA (untuk berita utama yang pakai onclick) ===
function openNews(element) {
    // Ambil URL dari atribut data-url
    const url = element.getAttribute('data-url');
    
    // Buka di tab baru
    window.open(url, '_blank');
}

// === FUNGSI BOOKMARK ===
function toggleBookmark(element) {
    // Toggle antara bookmark aktif dan tidak aktif
    if (element.textContent === '📑') {
        element.textContent = '📕';
        console.log('Berita ditambahkan ke bookmark');
    } else {
        element.textContent = '📑';
        console.log('Berita dihapus dari bookmark');
    }
}

// === FUNGSI KATEGORI ===
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// === FUNGSI BOTTOM NAVIGATION ===
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// === FUNGSI ACTION BUTTONS (News/Update) ===
document.querySelectorAll('.btn-news').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-news').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});