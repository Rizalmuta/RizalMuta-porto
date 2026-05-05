  <template>
    <section class="portfolio-section" id="project">
      <!-- ── Section Header ── -->
      <div class="section-header">
        <h2 class="section-title">Portfolio Projects</h2>
      </div>

      <div class="category-block">
        <div class="category-label">
          <span class="dot web-dot"></span>
          Web Projects
        </div>

        <div class="web-grid">
          <div
            v-for="(project, i) in webProjects"
            :key="project.id"
            class="web-card"
            :style="{ '--delay': i * 0.12 + 's' }"
          >
            <div class="web-card__image-wrap">
              <img
                :src="project.image"
                :alt="project.title"
                class="web-card__image"
              />
            </div>
            <div class="web-card__body">
              <span class="tag">{{ project.tag }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a :href="project.link" class="card-link">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="category-block">
        <div class="category-label">
          <span class="dot mobile-dot"></span>
          Mobile Projects
        </div>

        <div class="mobile-grid">
          <div
            v-for="(project, i) in mobileProjects"
            :key="project.id"
            class="mobile-card"
            :style="{ '--delay': i * 0.12 + 's' }"
          >
            <div class="mobile-card__image-wrap">
              <img
                :src="project.image"
                :alt="project.title"
                class="mobile-card__image"
              />
            </div>

            <div class="mobile-card__body">
              <div class="mobile-card__tags">
                <span class="tag mobile-tag" v-for="t in project.tags" :key="t">{{
                  t
                }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="mobile-card__actions"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  export default {
    data() {
      return {
        webProjects: [
          {
            id: 1,
            title: "Fuel Purchases Website-School Project",
            description:
              "Creating a website for fuel purchases. It has features to view fuel types, prices, and make purchase transactions. The purchase data is stored in the system so it can be recorded and managed more easily. ",
            image: "/src/public/Assets/shell.jpg",
            link: "#",
            tag: "Php, oriented object programming, Html, Css",
          },
        {
            id: 2,
            title: "Fuel Purchases Website-School Project",
            description:
              "Creating a website for motorbike rentals. Users can see the list of available motorbikes, rental prices, and make rental transactions. The system also stores rental data so it is more organized and easier to manage.",
            image: "/src/public/Assets/RentalMotor.jpg",
            link: "#",
            tag: "Php, oriented object programming, Html, Css",
          },
           {
            id: 3,
            title: " indoJune Kasir website - School Project",
            description:
              "I created this cashier website as part of a Ujikom assignment to simulate a store's transaction system. This application includes features such as product input, transaction processing, automatic calculations, and sales reports. This system makes the bookkeeping process faster, more organized, and more structured.",
            image: "/src/public/Assets/kasir-app.jpg",
            link: "#",
            tag: "Php, Html, Css, Laravel, tailwand Css",
          },
        ],
        mobileProjects: [
          {
            id: 3,
            title: "Court Design Mobile App-School Project",
            image: "/src/public/Assets/court-design.jpg",
            tags: ["Flutter", "Figma", "Slicing Design", "API Integration"],
          },
          {
            id: 4,
            title: "haihai Mobile App- Internship Project",
            image: "/src/public/Assets/haihai-Slash.jpg",
            link: "#",
            github: "#",
            tags: ["Flutter", "Figma", "Slicing Design"],
          },
          {
            id: 5,
            title: "Haihai Mobile App- Internship Project",
            image: "/src/public/Assets/haihai-home.jpg",
            link: "#",
            github: "#",
            tags: ["Flutter", "Figma", "Slicing Design", "API Integration"],
          },
          {
            id: 6,
            title: "Wcp Mobile App- Internship Project",
            image: "/src/public/Assets/wcp-slash.jpg",
            link: "#",  
            github: "#",
            tags: ["Flutter", "Figma", "Slicing Design", "API Integration"],
          },
          {
            id: 7,
            title: "SnapFlow Mobile App- Internship Project",
            image: "/src/public/Assets/snap-slash.jpg",
            link: "#",
            github: "#",
            tags: ["Flutter", "Figma", "Slicing Design",],
          },
          {
            id: 8,
            title: "Yantek Mobile App- Internship Project",
            image: "/src/public/Assets/yantek-home.jpg",
            link: "#",
            github: "#",
            tags: ["Flutter", "Figma", "Slicing Design", "API Integration"],
          },
             {
            id: 9,
            title: "Weather App- School Project",
            image: "/src/public/Assets/Weather-App.jpg",
            link: "#",
            github: "#",
            tags: ["Flutter", "Figma", "Slicing Design", "API Integration"],
          },
        ],
      };
    },
  };
  </script>

  <style scoped>
  /* ── Variables ── */
  :root {
    --accent: #2563eb;
    --accent-dark: #1d4ed8;
  }

  /* ── Base ── */
  .portfolio-section {
    background: #f1f5f9;
    padding: 100px 24px 120px;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
  }

  /* ── Section Header ── */
  .section-header {
    text-align: center;
    max-width: 520px;
    margin: 0 auto 72px;
    animation: fadeUp 0.6s ease both;
  }

  .eyebrow {
    display: inline-block;
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #2563eb;
    background: #eff6ff;
    padding: 5px 14px;
    border-radius: 100px;
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Inter', sans-serif;
    font-size: clamp(30px, 5vw, 42px);
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 12px;
    line-height: 1.12;
    letter-spacing: -0.03em;
  }

  .section-title span {
    color: #2563eb;
    position: relative;
  }

  .section-title span::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2563eb;
    border-radius: 1px;
    opacity: 0.3;
  }

  .section-desc {
    font-size: 14px;
    color: #94a3b8;
    margin: 0;
    line-height: 1.7;
  }

  /* ── Category Block ── */
  .category-block {
    max-width: 1120px;
    margin: 0 auto 64px;
  }

  .category-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #64748b;
    margin-bottom: 24px;
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .web-dot {
    background: #2563eb;
    box-shadow: 0 0 0 3px #dbeafe;
  }
  .mobile-dot {
    background: #2563eb;
    box-shadow: 0 0 0 3px #dbeafe;
  }

  /* ══════════════════
    WEB GRID
  ══════════════════ */
  .web-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }

  .web-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    animation: fadeUp 0.5s ease both;
    animation-delay: var(--delay, 0s);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .web-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.08);
  }

  /* Image wrap */
  .web-card__image-wrap {
    position: relative;
    overflow: hidden;
  }

  .web-card__image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .web-card:hover .web-card__image {
    transform: scale(1.04);
  }

  /* Overlay */
  .web-card__overlay {
    position: absolute;
    inset: 0;
    background: rgba(37, 99, 235, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease;
    backdrop-filter: blur(4px);
  }

  .web-card:hover .web-card__overlay {
    opacity: 1;
  }

  .overlay-btn {
    background: #fff;
    color: #2563eb;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 10px;
    text-decoration: none;
    transform: translateY(6px);
    transition: transform 0.25s ease;
  }

  .web-card:hover .overlay-btn {
    transform: translateY(0);
  }

  /* Body */
  .web-card__body {
    padding: 20px 24px 24px;
  }

  .tag {
    display: inline-block;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #2563eb;
    background: #eff6ff;
    padding: 3px 10px;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  .web-card__body h3 {
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 8px;
  }

  .web-card__body p {
    font-size: 13px;
    line-height: 1.7;
    color: #64748b;
    margin: 0 0 16px;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    font-weight: 600;
    color: #2563eb;
    text-decoration: none;
    transition: gap 0.25s ease;
  }

  .card-link:hover {
    gap: 9px;
  }

  /* ══════════════════
    MOBILE GRID
  ══════════════════ */
  .mobile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 343px));
    gap: 24px;
  }

  .mobile-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    animation: fadeUp 0.5s ease both;
    animation-delay: var(--delay, 0s);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .mobile-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.08);
  }

  /* Image wrap */
  .mobile-card__image-wrap {
    position: relative;
    overflow: hidden;
  }

  .mobile-card__image {
    width: 100%;
    height: 685px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .mobile-card:hover .mobile-card__image {
    transform: scale(1.04);
  }

  /* Overlay */
  .mobile-card__overlay {
    position: absolute;
    inset: 0;
    background: rgba(37, 99, 235, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease;
    backdrop-filter: blur(4px);
  }

  .mobile-card:hover .mobile-card__overlay {
    opacity: 1;
  }

  .overlay-btn-pink {
    background: #fff;
    color: #2563eb;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 10px;
    text-decoration: none;
    transform: translateY(6px);
    transition: transform 0.25s ease;
  }

  .mobile-card:hover .overlay-btn-pink {
    transform: translateY(0);
  }

  /* Body */
  .mobile-card__body {
    padding: 20px 24px 24px;
  }

  .mobile-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }

  .mobile-tag {
    background: #eff6ff;
    color: #2563eb;
  }

  .mobile-card__body h3 {
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 8px;
  }

  .mobile-card__body p {
    font-size: 13px;
    line-height: 1.7;
    color: #64748b;
    margin: 0 0 16px;
  }

  .mobile-card__actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-block;
    background: #2563eb;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 9px 20px;
    border-radius: 10px;
    text-decoration: none;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .btn-primary:hover {
    background: #1d4ed8;
    transform: scale(1.03);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #f1f5f9;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
    padding: 9px 16px;
    border-radius: 10px;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn-ghost:hover {
    background: #e2e8f0;
  }

  /* ── Animation ── */
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .portfolio-section {
      padding: 72px 16px 96px;
    }

    .web-grid,
    .mobile-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
