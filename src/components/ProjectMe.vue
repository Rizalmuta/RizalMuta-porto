<template>
  <section class="portfolio-section" id="project">
    <div class="portfolio-inner">
      <div class="section-header">
        <h2 class="section-title">Selected Works</h2>
        <div class="section-line"></div>
      </div>

      <!-- Filter -->
      <div class="filter-container fade-in delay-1">
        <button
          v-for="cat in ['All', 'Web', 'Mobile']"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeFilter === cat }"
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <transition-group name="project-list" tag="div" class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card slide-up"
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
              <span v-for="tag in project.tags" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectMe",
  data() {
    return {
      activeFilter: "All",
      projects: [
        {
          id: 1,
          category: "Web",
          title: "Fuel Purchases Website",
          description:
            "A comprehensive website for fuel purchases with pricing, transaction handling, and automated data management features.",
          image: "/Assets/shell.jpg",
          demo: "#",
          github: "#",
          tags: ["PHP", "OOP", "HTML", "CSS"],
        },
        {
          id: 2,
          category: "Web",
          title: "Motorbike Rental website",
          description:
            "An organized system for renting motorbikes online, managing availability, pricing, and seamless rental transactions.",
          image: "/Assets/RentalMotor.jpg",
          demo: "#",
          github: "#",
          tags: ["PHP", "OOP", "HTML", "CSS"],
        },
        {
          id: 3,
          category: "Web",
          title: "IndoJune cashier website",
          description:
            "A functional point-of-sale system for stores featuring product management, transactions, and automated reporting.",
          image: "/Assets/kasir-app.jpg",
          demo: "#",
          github: "#",
          tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
        },
        {
          id: 4,
          category: "Mobile",
          title: "Court Booking App",
          description:
            "A mobile application interface focused on clean, modern aesthetics for a sports court reservation system.",
          image: "/Assets/court-design.jpg",
          demo: "#",
          github: "#",
          tags: ["Flutter", "Figma", "API"],
        },
        {
          id: 5,
          category: "Mobile",
          title: "Haihai Chat Box App",
          description:
            "A social communication app with smooth transitions, modern UI styling, and robust API integration.",
          image: "/Assets/haihai-home.jpg",
          demo: "#",
          github: "#",
          tags: ["Flutter", "Figma", "API"],
        },
        {
          id: 6,
          category: "Mobile",
          title: "WCP Mobile App",
          description:
            "Enterprise mobile solution with intuitive design for streamlined internal operations.",
          image: "/Assets/wcp-slash.jpg",
          demo: "#",
          github: "#",
          tags: ["Flutter", "Figma", "API"],
        },
        {
          id: 7,
          category: "Mobile",
          title: "SnapFlow App",
          description:
            "A fluid and seamless mobile application prototype emphasizing UX flows and fast interactions.",
          image: "/Assets/snap-slash.jpg",
          demo: "#",
          github: "#",
          tags: ["Flutter", "Figma"],
        },
        {
          id: 8,
          category: "Mobile",
          title: "Yantek App",
          description:
            "Technical service management app built for field workers to manage tasks effectively.",
          image: "/Assets/yantek-home.jpg",
          demo: "#",
          github: "#",
          tags: ["Flutter", "Figma", "API"],
        },
        {
          id: 9,
          category: "Mobile",
          title: "Weather App",
          description:
            "A sleek mobile weather application providing real-time data visualization and forecasts.",
          image: "/Assets/Weather-App.jpg",
          demo: "#",
          github: "#",
          tags: ["Flutter", "Figma", "API"],
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === "All") {
        return this.projects;
      }
      return this.projects.filter((p) => p.category === this.activeFilter);
    },
  },
  methods: {},
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

/* Filter */
.filter-container {
  display: flex;
  justify-content: center;
  gap: 16px;
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 30px;
}

.project-card {
  background: var(--bg-secondary);
  border-radius: 16px;
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
  width: 100%;
  padding-top: 60%; /* 16:9 Aspect Ratio Approx */
  overflow: hidden;
  background: var(--bg-tertiary);
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
  background: rgba(10, 10, 10, 0.8);
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
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  padding: 10px 24px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 160px;
}

.action-btn:hover {
  transform: scale(1.05);
  background: var(--accent-hover);
}

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

/* Vue Transition Group */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.4s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.project-list-leave-active {
  position: absolute;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .filter-container {
    flex-wrap: wrap;
  }
}
</style>
