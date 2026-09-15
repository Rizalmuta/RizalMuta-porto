<template>
  <section class="portfolio-section" id="project">
    <div class="portfolio-inner">

      <div class="section-header">
        <h2 class="section-title">Selected Works</h2>
        <div class="section-line"></div>
      </div>

      <div class="category-section">
        <h3 class="category-title">Web Development</h3>
        <div class="projects-grid web-grid">
          <div
            v-for="project in webProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="card-image-wrapper">
              <img :src="project.image" :alt="project.title" class="card-image" />
              <div class="card-overlay">
                <div class="overlay-actions">
                  <button class="action-btn" @click="viewDetails(project)">
                    <i class="ph ph-eye"></i> Views Only
                  </button>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-desc">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="category-section">
        <h3 class="category-title">Mobile Applications</h3>
        <div class="projects-grid mobile-grid">
          <div
            v-for="project in mobileProjects"
            :key="project.id"
            class="project-card mobile-card"
          >
            <div class="card-image-wrapper mobile-image-wrapper">
              <img :src="project.image" :alt="project.title" class="card-image" />
              <div class="card-overlay">
                <div class="overlay-actions">
                  <button class="action-btn" @click="viewDetails(project)">
                    <i class="ph ph-eye"></i> Views Only
                  </button>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-desc">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectMe",
  data() {
    return {
      projects: [
        {
          id: 1,
          category: "Web",
          title: "Fuel Purchases Website - School Project",
          description: "A website for buying fuel with easy transactions and fuel price information.",
          image: "/Assets/Bbm-web.jpg",
          tags: ["PHP", "OOP", "HTML", "CSS", "Bootstrap"],
        },
        {
          id: 2,
          category: "Web",
          title: "Motorbike Rental website - School Project",
          description: "An online motorbike rental website with booking and payment features.",
          image: "/Assets/MotoRent.jpg",
          tags: ["PHP", "OOP", "HTML", "CSS", "Bootstrap", "Google Fonts"],
        },
        {
          id: 3,
          category: "Web",
          title: "IndoJune cashier website - School Project",
          description: "A cashier system for managing products, sales transactions, and reports.",
          image: "/Assets/kasir-app.jpg",
          tags: ["PHP", "Laravel", "Bootstrap", "CSS", "MySQL"],
        },
        {
          id: 4,
          category: "Web",
          title: "Secure Coding Website - School Project",
          description: "A website showcasing secure coding practices and best practices for web development.",
          image: "/Assets/SecureCoding.jpg",
          tags: ["Laravel", "Database", "Boostrap","MySQL"],
        },

          {
          id: 5,
          category: "Web",
          title: "Haihai Website - Internship Project",
          description: "Redesigned and implemented the sign-up page interface to improve visual appearance and user experience.",
          image: "/Assets/website-hai.jpg",
          tags: ["Laravel", "Figma", "database", "Ui/UX"],
        },
        // Mobile Projects
        {
          id: 5,
          category: "Mobile",
          title: "Court Booking App - School Project",
          description: "A mobile app for booking sports courts with a clean and modern design.",
          image: "/Assets/Booking-mobile.jpg",
          tags: ["Flutter", "Figma",],
        },
        {
          id: 6,
          category: "Mobile",
          title: "Haihai Chat Box App - Internship Project",
          description: "A chat application with modern design and smooth user experience.",
          image: "/Assets/haihai-mobile.jpg",
          tags: ["Flutter", "Figma", "API", "Postman", "Database", "Rest API"],
        },
        {
          id: 7,
          category: "Mobile",
          title: "WCP Mobile App - Internship Project",
          description: "A mobile app designed to help manage company operations efficiently.",
          image: "/Assets/Wcp-mobile.jpg",
          tags: ["Flutter", "Figma", "API", "Postman", "Database", "Rest API"],
        },

        {
          id: 8,
          category: "Mobile",
          title: "Yantek App - Internship Project",
          description: "A vehicle monitoring app for tracking incoming and outgoing vehicles efficiently.",
          image: "/Assets/yantek-mobile.jpg",
          tags: ["Flutter", "Figma", "API", "Database", "Rest API"],
        },
        {
          id: 9,
          category: "Mobile",
          title: "School Guest Book App - School Project",
          description: "A collaborative school guest book application to manage visitor entries.",
          image: "/Assets/Guest-mobile.jpg",
          tags: ["Flutter", "Figma",],
        },
      ],
    };
  },
  computed: {
    webProjects() {
      return this.projects.filter((p) => p.category === "Web");
    },
    mobileProjects() {
      return this.projects.filter((p) => p.category === "Mobile");
    },
  },
  methods: {
    viewDetails(project) {
      console.log("Views Only", project);
    },
  },
};
</script>

<style scoped>
.portfolio-section {
  padding: 100px 0;
  background: var(--bg-primary);
  min-height: 100vh;
}

.portfolio-inner {
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

/* Category Title */
.category-section {
  margin-bottom: 80px;
}

.category-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 32px;
  padding-left: 8px;
  border-left: 4px solid var(--text-primary);
}

/* Grid */
.projects-grid {
  display: grid;
  gap: 30px;
}

/* Web Grid & Mobile Grid - SAMA ukurannya */
.web-grid,
.mobile-grid {
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}

/* Card Style Umum */
.project-card {
  background: var(--bg-secondary);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--text-primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.card-image-wrapper {
  position: relative;
  width: 100%; /* diperbaiki dari 110% -> 100% agar tidak overflow */
  padding-top: 70%; /* Landscape, dipakai untuk Web & Mobile */
  overflow: hidden;
  background: var(--bg-tertiary);
}

/* mobile-image-wrapper sengaja dikosongkan / disamakan dengan .card-image-wrapper
   supaya rasio gambar Mobile sama persis dengan Web (landscape 70%) */
.mobile-image-wrapper {
  padding-top: 70%;
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-actions {
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.project-card:hover .overlay-actions {
  transform: translateY(0);
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 180px;
}

.action-btn:hover {
  transform: scale(1.05);
}

/* Card Content */
.card-content {
  padding: 24px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--bg-primary);
  background: var(--text-primary);
  padding: 4px 8px;
  border-radius: 4px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.3;
}

.card-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 768px) {
  .portfolio-inner {
    padding: 0 20px;
  }

  .section-title {
    font-size: 34px;
  }

  .category-title {
    font-size: 24px;
  }

  .projects-grid {
    gap: 32px;
  }

  .web-grid,
  .mobile-grid {
    grid-template-columns: 1fr;
  }

  .action-btn {
    width: 100%;
    max-width: none;
    padding: 14px 24px;
  }
}

/* Catatan: override khusus desktop untuk mobile-image-wrapper
   (padding-top: 108%) telah dihapus, karena Web & Mobile
   sekarang menggunakan rasio yang sama (70%) di semua ukuran layar. */

/* Vue Transition (opsional) */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.4s ease;
}
</style>