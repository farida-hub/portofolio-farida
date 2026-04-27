// Data Proyek dengan Multiple Images
const projectData = {
  simpelsi: {
    title: "Aplikasi Simpelsi",
    role: "Front-end Web & Mobile Developer & Tester",
    period: "Agustus 2025 – Desember 2025",
    images: [
      "img/simpelsi.png",
      "img/simpelsi1.png",
      "img/simpelsi2.jpeg",
      "img/simpelsi3.jpeg"
    ],
    description: "Simpelsi (Sistem Informasi Pelaporan Sampah Ilegal) adalah aplikasi berbasis web dan mobile yang memungkinkan masyarakat melaporkan lokasi sampah ilegal untuk membantu pemerintah daerah dalam pengelolaan lingkungan.",
    responsibilities: [
      "Mengembangkan tampilan antarmuka aplikasi berbasis web dan mobile",
      "Mengimplementasikan desain UI ke dalam kode agar responsif dan sesuai kebutuhan pengguna",
      "Melakukan pengujian aplikasi untuk memastikan kualitas sistem",
      "Mengidentifikasi kesalahan dan membantu proses perbaikan aplikasi"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Java", "Responsive Design", "Testing"]
  },
  
  fortuneWash: {
    title: "Aplikasi Fortune Wash",
    role: "Project Manager & Tester",
    period: "Februari 2025 – Juni 2025",
    images: [
      "img/fortune-wash.jpg",
      "img/fortune-wash2.jpg",
      "img/fortune-wash3.jpg"
    ],
    description: "Fortune Wash adalah aplikasi laundry berbasis mobile dan web yang dirancang untuk memudahkan pelanggan dalam memesan layanan laundry dan memantau status cucian mereka.",
    responsibilities: [
      "Mengelola jalannya proyek menggunakan metode Agile Scrum",
      "Mengatur pembagian tugas tim dan memastikan setiap proses pengembangan berjalan sesuai rencana",
      "Melakukan pengujian sistem untuk memastikan fungsi aplikasi berjalan dengan baik",
      "Mengidentifikasi bug dan mendokumentasikan hasil pengujian"
    ],
    tech: ["Agile Scrum", "Manual Testing", "MySQL", "Jira", "Trello"]
  },
  
  cavi: {
    title: "Aplikasi CAVI",
    role: "UI/UX Designer",
    period: "September 2024 – Desember 2024",
    images: [
      "img/cavi.jpg",
      "img/cavi1.png",
      "img/cavi2.jpg"
    ],
    description: "CAVI adalah aplikasi yang dirancang untuk memudahkan pengguna dalam mengelola dan memantau aktivitas harian. Proyek ini merupakan bagian dari Project Based Learning (PBL) di Politeknik Negeri Jember.",
    responsibilities: [
      "Merancang desain antarmuka aplikasi yang user-friendly",
      "Membuat wireframe, mockup, dan prototype menggunakan Figma",
      "Berkolaborasi dengan tim developer untuk implementasi desain"
    ],
    tech: ["Figma", "UI Design", "UX Research", "Prototyping", "Wireframing"]
  }
};

// Global variables
let currentImageIndex = 0;
let currentProjectData = null;

// Fungsi Modal Utama
function openModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;
  
  currentImageIndex = 0;
  currentProjectData = project;
  
  const modal = document.getElementById('projectModal');
  const content = modal.querySelector('.modal-content');
  
  // Buat HTML Gallery
  const imageGallery = createImageGallery(project);
  
  content.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        ${imageGallery}
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-[#4A628A] mb-2">${project.title}</h2>
        <p class="text-sm text-[#4A628A] italic mb-1">${project.role}</p>
        <p class="text-xs text-gray-600 mb-6">${project.period}</p>
        
        <div class="mb-4">
          <h3 class="font-bold text-[#4A628A] mb-2">📋 Tentang Proyek</h3>
          <p class="text-sm text-gray-700 leading-relaxed">${project.description}</p>
        </div>
        
        <div class="mb-4">
          <h3 class="font-bold text-[#4A628A] mb-2">🎯 Tanggung Jawab</h3>
          <ul class="space-y-1">
            ${project.responsibilities.map(resp => `
              <li class="text-sm text-gray-700 flex items-start">
                <span class="text-[#4A628A] mr-2">✓</span>
                <span>${resp}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold text-[#4A628A] mb-2">🛠️ Teknologi</h3>
          <div class="flex flex-wrap gap-2">
            ${project.tech.map(t => `
              <span class="px-3 py-1 bg-gradient-to-r from-[#D1E9F6] to-[#FFF9D0] text-[#4A628A] rounded-full text-xs font-semibold">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Fungsi Buat Gallery HTML
function createImageGallery(project) {
  const hasMultipleImages = project.images.length > 1;
  
  return `
    <div class="relative w-full">
      <img id="modalMainImage" src="${project.images[0]}" alt="${project.title}" 
           class="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-lg bg-gray-50"
           onerror="this.src='https://via.placeholder.com/800x600/D1E9F6/4A628A?text=${encodeURIComponent(project.title)}'">
      
      ${hasMultipleImages ? `
        <!-- Tombol Prev -->
        <button onclick="prevImage()" 
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110 z-10">
          <svg class="w-6 h-6 text-[#4A628A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <!-- Tombol Next -->
        <button onclick="nextImage()" 
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110 z-10">
          <svg class="w-6 h-6 text-[#4A628A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        
        <!-- Counter -->
        <div class="absolute top-3 right-3 bg-[#4A628A]/80 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          <span id="imageCounter">1/${project.images.length}</span>
        </div>
      ` : ''}
    </div>
    
    ${hasMultipleImages ? `
      <!-- Thumbnail Navigation -->
      <div class="flex gap-2 mt-3 overflow-x-auto pb-2" id="thumbnailContainer">
        ${project.images.map((img, idx) => `
          <button onclick="goToImage(${idx})" 
                  class="thumbnail-btn flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === 0 ? 'border-[#4A628A] opacity-100' : 'border-white/50 opacity-70'}">
            <img src="${img}" alt="Thumbnail ${idx + 1}" 
                 class="w-full h-full object-cover"
                 onerror="this.src='https://via.placeholder.com/100x100/D1E9F6/4A628A?text=${idx + 1}'">
          </button>
        `).join('')}
      </div>
    ` : ''}
  `;
}

// Fungsi Ganti Gambar
function goToImage(index) {
  if (!currentProjectData) return;
  
  currentImageIndex = index;
  const mainImg = document.getElementById('modalMainImage');
  const counter = document.getElementById('imageCounter');
  const thumbnails = document.querySelectorAll('.thumbnail-btn');
  
  // Fade effect
  mainImg.style.opacity = '0';
  
  setTimeout(() => {
    mainImg.src = currentProjectData.images[index];
    mainImg.style.opacity = '1';
  }, 150);
  
  // Update counter
  if (counter) {
    counter.textContent = `${index + 1}/${currentProjectData.images.length}`;
  }
  
  // Update thumbnail border
  thumbnails.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.remove('border-white/50', 'opacity-70');
      thumb.classList.add('border-[#4A628A]', 'opacity-100');
    } else {
      thumb.classList.remove('border-[#4A628A]', 'opacity-100');
      thumb.classList.add('border-white/50', 'opacity-70');
    }
  });
}

function nextImage() {
  if (!currentProjectData) return;
  const nextIndex = (currentImageIndex + 1) % currentProjectData.images.length;
  goToImage(nextIndex);
}

function prevImage() {
  if (!currentProjectData) return;
  const prevIndex = (currentImageIndex - 1 + currentProjectData.images.length) % currentProjectData.images.length;
  goToImage(prevIndex);
}

// Fungsi Close Modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  currentProjectData = null;
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('projectModal');
  const isModalOpen = !modal.classList.contains('hidden');
  
  if (e.key === 'Escape' && isModalOpen) {
    closeModal();
  }
  
  if (isModalOpen && currentProjectData && currentProjectData.images.length > 1) {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  }
});

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this || e.target.classList.contains('modal-backdrop')) {
    closeModal();
  }
});

