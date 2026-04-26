const projectData = {
  simpelsi: {
    title: "Aplikasi Simpelsi",
    role: "Front-end Web & Mobile Developer & Tester",
    period: "Agustus 2025 – Desember 2025",
    image: "img/simpelsi.jpg",
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
    image: "img/fortune-wash.jpg",
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
    image: "img/cavi.jpg",
    description: "CAVI adalah aplikasi yang dirancang untuk memudahkan pengguna dalam mengelola dan memantau aktivitas harian. Proyek ini merupakan bagian dari Project Based Learning (PBL) di Politeknik Negeri Jember.",
    responsibilities: [
      "Merancang desain antarmuka aplikasi yang user-friendly",
      "Membuat wireframe, mockup, dan prototype menggunakan Figma",
      "Berkolaborasi dengan tim developer untuk implementasi desain"
    ],
    tech: ["Figma", "UI Design", "UX Research", "Prototyping", "Wireframing"]
  }
};

function openModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;
  
  const modal = document.getElementById('projectModal');
  const content = modal.querySelector('.modal-content');
  
  content.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <img src="${project.image}" alt="${project.title}" 
             class="w-full rounded-2xl shadow-lg"
             onerror="this.src='https://via.placeholder.com/400x300/D1E9F6/4A628A?text=${encodeURIComponent(project.title)}'">
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

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});