// FUNGSI UNTUK PEMESANAN HOME SERVICE
function handleBooking(event) {
    event.preventDefault(); // Mencegah reload halaman

    const kendalaInput = document.getElementById('detail-kendala').value.trim();
    const statusContainer = document.getElementById('status-container');
    const alertSuccess = document.getElementById('alert-success');
    const alertError = document.getElementById('alert-error');

    // Tampilkan container notifikasi utama
    statusContainer.style.display = 'block';

    // Pengecekan Kualifikasi Input Teks
    // Jika keluhan terisi dan minimal 5 karakter (sesuai/lengkap)
    if (kendalaInput !== '' && kendalaInput.length >= 5) {
        alertSuccess.style.display = 'block';
        alertError.style.display = 'none';
        
        // Reset isi input teks keluhan setelah berhasil
        document.getElementById('detail-kendala').value = '';
    } else {
        // Jika keluhan kosong atau terlalu singkat (tidak sesuai)
        alertError.style.display = 'block';
        alertSuccess.style.display = 'none';
    }
}

// FUNGSI GANTI ROLE (KUSTOMER VS ADMIN)
function switchRole(role) {
    const roleStatus = document.getElementById('role-status');
    const adminModule = document.getElementById('admin-module');
    const customerModule = document.getElementById('customer-module');
    const statusContainer = document.getElementById('status-container');

    // Sembunyikan notifikasi status saat berpindah role
    if (statusContainer) {
        statusContainer.style.display = 'none';
    }

    if (role === 'admin') {
        roleStatus.innerText = 'MODE AKTIF: ADMIN BENGKEL';
        roleStatus.className = 'status-badge admin';
        if (adminModule) adminModule.style.display = 'block';
        if (customerModule) customerModule.style.display = 'none';
    } else {
        roleStatus.innerText = 'MODE AKTIF: KUSTEMER (Kota Bekasi)';
        roleStatus.className = 'status-badge customer';
        if (adminModule) adminModule.style.display = 'none';
        if (customerModule) customerModule.style.display = 'block';
    }
}