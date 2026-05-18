<template>
  <section class="home" id="home">
    <div class="home-inner">
      <div class="hero-content">
        <h2 class="greeting fade-in">Hello, I'm Muhamad Rizal Mutakin</h2>
        <h1 class="hero-title slide-up">Frontend & Mobile<br />Developer.</h1>
        <p class="hero-desc slide-up delay-1">
          Creating clean, modern, and user-friendly digital experiences.
          <br />Focused on responsive design and smooth user experiences.
        </p>

        <div class="cta-row slide-up delay-2">
          <button class="btn btn-primary" @click="scrollTo('project')">
            <span>View Projects</span>
            <i class="ph ph-arrow-right"></i>
          </button>
          <a href="/Resume.pdf" target="_blank" class="btn btn-secondary">
            <span>Download CV</span>
            <i class="ph ph-download-simple"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator fade-in delay-3">
      <span class="mouse">
        <span class="wheel"></span>
      </span>
      <span class="scroll-text">Scroll Down</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSection",
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 60px; /* Offset for navbar */
}

.home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.03) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.home-inner {
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.greeting {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 72px;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 32px;
  letter-spacing: -2px;
}

.hero-desc {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 600px;
  font-weight: 400;
}

.cta-row {
  display: flex;
  gap: 20px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn i {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.btn-primary {
  background: var(--accent);
  color: var(--bg-primary);
  border: 1px solid var(--accent);
}

.btn-primary:hover {
  background: transparent;
  color: var(--accent);
}

.btn-primary:hover i {
  transform: translateX(4px);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.btn-secondary:hover i {
  transform: translateY(2px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid var(--text-secondary);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--text-secondary);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 1.5s infinite;
}

.scroll-text {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes scrollWheel {
  0% {
    top: 6px;
    opacity: 1;
  }
  100% {
    top: 20px;
    opacity: 0;
  }
}

/* Animations */
.delay-1 {
  animation-delay: 0.2s;
}
.delay-2 {
  animation-delay: 0.4s;
}
.delay-3 {
  animation-delay: 0.8s;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
  .hero-desc {
    font-size: 16px;
  }
  .cta-row {
    flex-direction: column;
    width: 100%;
  }
  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
