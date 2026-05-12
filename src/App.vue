    <template>
      <div id="app">
        <transition name="fade">
          <div v-if="isLoading" class="global-loader">
            <div class="spinner"></div>
          </div>
        </transition>

        <AppNavbar v-if="$route.path === '/'" />
        <main v-if="$route.path === '/'">
          <HomeSection />
          <AboutMe />
          <ProjectMe />
          <CertificateSection />
          <ContactSection />
        </main>
        <router-view v-else />
      </div>
    </template>

  <script>
  import AppNavbar         from './components/AppNavbar.vue'
  import HomeSection       from './components/HomeSection.vue'
  import AboutMe           from './components/AboutMe.vue'
  import ContactSection    from './components/ContactSection.vue'
  import ProjectMe         from './components/ProjectMe.vue'
  import CertificateSection from './components/CertificateSection.vue'

  export default {
    name: 'App',
    components: {
      AppNavbar,
      HomeSection,
      AboutMe,
      ContactSection,
      ProjectMe,
      CertificateSection,
    },
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      // Simulate light loading delay
      setTimeout(() => {
        this.isLoading = false;
        
        // Trigger intersection observer for scroll animations
        this.initScrollReveal();
      }, 1000);
    },
    methods: {
      initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in, .slide-up').forEach((el) => {
          el.style.animationPlayState = 'paused';
          observer.observe(el);
        });
      }
    }
  }
  </script>

    <style>
    /* ── Global Reset & Base ── */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      background: var(--bg-primary, #0a0a0a);
      color: var(--text-primary, #ffffff);
      font-family: 'Poppins', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--bg-primary, #0a0a0a);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--bg-tertiary, #1e1e1e);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--text-secondary, #a3a3a3);
    }

    img {
      max-width: 100%;
      display: block;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* Global Loader */
    .global-loader {
      position: fixed;
      inset: 0;
      background: var(--bg-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      border-top-color: var(--text-primary);
      animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s ease;
    }
    .fade-enter-from, .fade-leave-to {
      opacity: 0;
    }

    /* Shared Animations & Utility Classes */
    .fade-in {
      animation: fadeIn 0.8s ease-out forwards;
      opacity: 0;
    }
    .slide-up {
      animation: slideUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    </style>