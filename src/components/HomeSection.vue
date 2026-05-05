<template>
  <section class="home" id="home">
    <div class="home-inner">
      <div class="profile-area" ref="profileArea">
        <div class="geo-canvas">
          <div class="geo-shape geo-blue"></div>
          <div class="geo-shape geo-coral"></div>
          <div class="geo-white-card">
            <img
              src="/src/public/Assets/profile-photo.jpg"
              alt="Profile Photo"
              class="profile-photo"
              @mouseenter="photoHovered = true"
              @mouseleave="photoHovered = false"
              :class="{ 'photo-hovered': photoHovered }"
            />
          </div>
        </div>
      </div>
      <div class="hero-text" ref="heroText">
        <p class="greeting">
          <span class="wave-emoji">👋</span> Hi there, I'm Muhamad Rizal Mutakin
        </p>
        <h1 class="hero-title">Junior Mobile &<br />Frontend Developer</h1>

        <div class="cta-row">
          <button class="btn btn-coral glow-btn" @click="goDownloadCV"> Download CV </button>
          <button class="btn btn-coral glow-btn" @click="scrollTo('contact')">
            Contact Me
          </button>
        </div>
        <div class="stats-row">
          <div class="stat" v-for="stat in stats" :key="stat.label">
            <span class="stat-num">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section-divider">
      <span class="divider-line"></span>
      <span class="divider-text">What I do</span>
      <span class="divider-line"></span>
    </div>

    <div class="services-row" id="services">
      <div
        class="service-item"
        v-for="(service, i) in services"
        :key="i"
        @mouseenter="hovered = i"
        @mouseleave="hovered = null"
        :class="{ 'is-hovered': hovered === i }"
      >
        <span class="service-icon">{{ service.icon }}</span>
        <span class="service-name">{{ service.name }}</span>
        <p class="service-desc">{{ service.desc }}</p>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "HomeSection",
  data() {
    return {
      hovered: null,
      photoHovered: false,
      services: [
        {
          name: "UX Experience Design",
          desc: "Beautiful, user-centered interfaces that convert and delight.",
        },
        {
          name: "Frontend Development",
          desc: "Vue.js & React apps — fast, responsive, pixel-perfect.",
        },
        {
          name: "Mobile Development Design",
          desc: "Clean mobile experiences for iOS and Android.",
        },
      ],

    };
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    goDownloadCV() {
      this.$router.push('/download-cv');
    },
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #ffffff;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
}

.home-inner {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 80px 48px;
  opacity: 0;
  transform: translateY(16px);
  animation: fadeInSection 0.8s forwards 0.3s ease-out;
}

@keyframes fadeInSection {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-photo {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: grayscale(100%) contrast(1.05);
}

.photo-hovered {
  filter: grayscale(0%) contrast(1.05) brightness(1.02);
  transform: scale(1.04) rotate(1.5deg);
  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.18);
}

.greeting {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 0.7s forwards 0.5s;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 12px;
}

.wave-emoji {
  display: inline-block;
  animation: wave 2.4s infinite ease-in-out;
  transform-origin: 60% 80%;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(16deg);
  }
  30% {
    transform: rotate(-8deg);
  }
  45% {
    transform: rotate(14deg);
  }
  60% {
    transform: rotate(-4deg);
  }
  75% {
    transform: rotate(10deg);
  }
}

.hero-title {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards 0.6s;
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: -0.03em;
}

.glow-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}

.glow-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.glow-btn:hover::after {
  transform: translateX(100%);
}

.glow-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.btn-navy.glow-btn:hover {
  background: #1e293b;
  box-shadow: 0 4px 20px rgba(30, 41, 59, 0.25);
}

.btn-coral.glow-btn:hover {
  background: #1d4ed8;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
}

.service-item {
  transition: all 0.25s ease;
  position: relative;
  background: white;
}

.service-item.is-hovered {
  background: #ffffff;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.service-item.is-hovered .service-icon {
  transform: scale(1.15);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.service-item::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  border-radius: 1px;
}

.service-item.is-hovered::before {
  transform: scaleX(1);
}

.stats-row .stat {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 0.6s forwards;
}

.stats-row .stat:nth-child(1) {
  animation-delay: 0.9s;
}
.stats-row .stat:nth-child(2) {
  animation-delay: 1.05s;
}
.stats-row .stat:nth-child(3) {
  animation-delay: 1.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.geo-canvas {
  position: relative;
  width: 210px;
  height: 240px;
}

.geo-shape {
  position: absolute;
  border-radius: 4px;
}

.geo-blue {
  width: 140px;
  height: 140px;
  background: #1e293b;
  top: 0;
  right: 0;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
}

.geo-coral {
  width: 140px;
  height: 140px;
  background: #2563eb;
  bottom: 0;
  right: 0;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.geo-white-card {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.08);
}

.hero-text {
  flex: 1;
}

.cta-row {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 0.7s forwards 0.75s;
}

.btn {
  padding: 12px 28px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
  text-decoration: none;
}

.btn-navy {
  background: #1e293b;
  color: #fff;
}

.btn-coral {
  background: #2563eb;
  color: #fff;
}

.stats-row {
  display: flex;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-num {
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: #2563eb;
  line-height: 1;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.section-divider {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 48px;
  margin-bottom: 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.divider-text {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
}

.services-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 48px 80px;
  margin-top: 36px;
}

.service-item {
  padding: 32px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  cursor: default;
}

.service-icon {
  display: block;
  font-size: 28px;
  margin-bottom: 16px;
}

.service-name {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.service-desc {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #64748b;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 900px) {
  .services-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .home-inner {
    flex-direction: column;
    padding: 48px 24px;
    gap: 40px;
    text-align: center;
  }

  .greeting {
    justify-content: center;
  }

  .hero-title {
    font-size: 34px;
  }

  .cta-row {
    justify-content: center;
  }

  .stats-row {
    justify-content: center;
  }

  .section-divider {
    padding: 0 24px;
  }

  .services-row {
    padding: 0 24px 48px;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}

@media (max-width: 480px) {
  .services-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

</style>
