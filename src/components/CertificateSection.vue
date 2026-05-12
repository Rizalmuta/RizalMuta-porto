<template>
  <section class="cert-section" id="certificates">
    <div class="cert-inner">
      <div class="section-header">
        <h2 class="section-title">Certifications</h2>
        <div class="section-line"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="cert-filters fade-in">
        <button
          v-for="cat in categories"
          :key="cat.key"
          class="filter-btn"
          :class="{ active: activeFilter === cat.key }"
          @click="activeFilter = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Grid -->
      <transition-group name="cert-list" tag="div" class="cert-grid">
        <div
          v-for="cert in filteredCerts"
          :key="cert.id"
          class="cert-card slide-up"
        >
          <div class="cert-thumbnail">
            <img 
              :src="cert.image" 
              :alt="cert.title"
              class="cert-image"
            >
            <div class="cert-overlay">
              <button class="view-btn" @click="openModal(cert)">
                <i class="ph ph-magnifying-glass-plus"></i> View
              </button>
            </div>
          </div>
          
          <div class="cert-info">
            <div class="cert-meta">
              <span class="cert-issuer"><i class="ph ph-buildings"></i> {{ cert.issuer }}</span>
              <span class="cert-date"><i class="ph ph-calendar-blank"></i> {{ cert.date }}</span>
            </div>
            <h3 class="cert-title">{{ cert.title }}</h3>
          </div>
        </div>
      </transition-group>

      <!-- Empty state -->
      <div class="cert-empty" v-if="filteredCerts.length === 0">
        <span>No certificates found in this category.</span>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div class="modal-overlay" v-if="selectedCert" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">
            <i class="ph ph-x"></i>
          </button>
          
          <div class="modal-image">
            <img 
              :src="selectedCert.image" 
              :alt="selectedCert.title"
              class="modal-cert-image"
            >
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'CertificateSection',
  data() {
    return {
      activeFilter: 'all',
      selectedCert: null,
      categories: [
        { key: 'all', label: 'All' },
      ],
      certificates: [
        {
          id: 1,
          title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
          issuer: 'Dicoding Indonesia',
          categoryKey: 'mobile',
          date: '2026',
          image: "Assets/Certificates/Sertif 1.png",
          link: "#" 
        },
        {
          id: 2,
          title: 'Belajar Dasar Cloud dan Gen Al di AWS',
          issuer: 'Dicoding Indonesia',
          categoryKey: 'design',
          date: '2026',
          image: "/Assets/Certificates/sertif 2.png",
          link: "#"
        },
        {
          id: 3,
          title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang software',
          issuer: 'Dicoding Indonesia',
          categoryKey: 'mobile',
          date: '2026',
          image: "/Assets/Certificates/sertif 3.png",
          link: "#"
        },
        {
          id: 4,
          title: 'Belajar Prinsip Pemrograman SOLID',
          issuer: 'Dicoding Indonesia',
          categoryKey: 'web',
          date: '2024',
          image: "/Assets/Certificates/sertif 4.png",
          link: "#"
        },
        {
          id: 5,
          title: 'Introduction to Financial Literacy',
          issuer: 'Dicoding Indonesia',
          categoryKey: 'web',
          date: '2026',
          image: "/Assets/Certificates/sertif 5.png",
          link: "#"
        },
          {
          id: 6,
          title: 'Belajar Dasar Pemrograman Web',
          issuer: 'Dicoding Indonesia',
          categoryKey: 'web',
          date: '2023',
          image: "/Assets/Certificates/sertif 6.png",
          link: "#"
        },
      ],
    };
  },
  computed: {
    filteredCerts() {
      if (this.activeFilter === 'all') return this.certificates;
      return this.certificates.filter(c => c.categoryKey === this.activeFilter);
    },
  },
  methods: {
    openModal(cert) {
      this.selectedCert = cert;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedCert = null;
      document.body.style.overflow = '';
    }
  }
};
</script>

<style scoped>
.cert-section {
  padding: 100px 0;
  background: var(--bg-primary);
  min-height: 100vh;
}

.cert-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-header {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.section-line {
  width: 60px;
  height: 4px;
  background: var(--text-primary);
  border-radius: 2px;
}

/* Filters */
.cert-filters {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 10px 24px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.filter-btn:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
}

.filter-btn.active {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

/* Grid */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

/* Card */
.cert-card {
  background: var(--bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
}

.cert-card:hover {
  transform: translateY(-8px);
  border-color: var(--text-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.cert-thumbnail {
  position: relative;
  width: 100%;
  padding-top: 65%;
  background: var(--bg-tertiary);
  overflow: hidden;
}

.cert-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #0f0f0f;
}

.cert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.cert-card:hover .cert-overlay {
  opacity: 1;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
}

.view-btn:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
}

/* Info */
.cert-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cert-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.cert-meta i {
  margin-right: 4px;
}

.cert-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  width: 100%;
  max-width: 820px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0,0,0,0.6);
  border: none;
  color: white;
  font-size: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
}

.modal-image {
  width: 100%;
  background: #111;
  padding: 20px 20px 0;
}

.modal-cert-image {
  width: 100%;
  max-height: 420px;
  object-fit: contain;
  border-radius: 8px;
}

.modal-details {
  padding: 32px;
}

.modal-details h3 {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.modal-details p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.verify-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 12px 28px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.verify-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
  .modal-cert-image {
    max-height: 280px;
  }
}
</style>