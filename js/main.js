// Fungsi untuk menampilkan section
function showSection(sectionId) {
  // Sembunyikan semua section
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });
  
  // Tampilkan section yang dipilih
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
  }
  
  // Update tombol navigasi
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-target') === sectionId) {
      btn.classList.add('active');
    }
  });
}

// Inisialisasi: tampilkan Home saat pertama kali load
document.addEventListener('DOMContentLoaded', function() {
  showSection('home');
});