<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <a href="#" class="logo" @click.prevent="scrollTo('home')">
        <span class="logo-text"><span class="dot"></span></span>
      </a>

      <ul class="nav-links">
        <li v-for="(item, index) in navItems" :key="index">
          <a
            :href="item.href"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="slide-down">
      <div class="mobile-menu" v-if="menuOpen">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.href"
          class="mobile-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="mobileNav(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      activeSection: 'home',
      navItems: [
        { label: 'Home',         href: '#home',         id: 'home'         },
        { label: 'About',        href: '#about',        id: 'about'        },
        { label: 'Projects',     href: '#project',      id: 'project'      },
        { label: 'Certificates', href: '#certificates', id: 'certificates' },
        { label: 'Contact',      href: '#contact',      id: 'contact'      },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 20;

      // Highlight active section
      const sections = ['home', 'about', 'project', 'certificates', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          this.activeSection = id;
          break;
        }
      }
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: 'smooth'
        });
      }
      this.menuOpen = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    mobileNav(id) {
      this.scrollTo(id);
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.4s ease;
  padding: 20px 0;
}

.navbar.scrolled {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  padding: 15px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -1px;
}

.dot {
  color: var(--text-secondary);
}

/* Nav links */
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--text-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: left;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.mobile-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 500;
  padding: 15px 40px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mobile-link:hover, .mobile-link.active {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  padding-left: 50px;
}

/* Slide transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: 768px) {
  .navbar-inner {
    padding: 0 20px;
  }
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>