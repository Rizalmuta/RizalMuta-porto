    <template>
      <div id="app">
        <AppNavbar v-if="$route.path === '/'" />
        <main v-if="$route.path === '/'">
          <HomeSection />
          <ProjectMe />
          <AboutMe />
          <ContactSection />
        </main>
        <router-view v-else />
      </div>
    </template>

  <script>
  import AppNavbar      from './components/AppNavbar.vue'
  import HomeSection    from './components/HomeSection.vue'
  import AboutMe        from './components/AboutMe.vue'
  import ContactSection from './components/ContactSection.vue'
  import ProjectMe      from './components/ProjectMe.vue'

  export default {
    name: 'App',
    components: {
      AppNavbar,
      HomeSection,
      AboutMe,
      ContactSection,
      ProjectMe,
    },
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
      background: #f8fafc;
      color: #0f172a;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #2563eb;
    }

    img {
      max-width: 100%;
      display: block;
    }

    a {
      color: inherit;
    }
    </style>