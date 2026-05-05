
<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <a href="#home" class="logo" @click.prevent="scrollTo('home')">
      </a>

      <ul class="nav-links">
        <li v-for="(item, index) in navItems" :key="index">
          <a
            :href="item.href"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id)"
          >
            <span class="nav-num"></span>{{ item.label }}
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
          @click.prevent="mobileNav(item.id)"
        >
          <span class="nav-num"></span>{{ item.label }}
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
        { label: 'Services', href: '#services', id: 'services' },
        { label: 'About',   href: '#about',    id: 'about'    },
        { label: 'Project',   href: '#project',id: 'project'},
        { label: 'Contact', href: '#contact',  id: 'contact'  },
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
      const sections = ['home', 'services', 'about', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          this.activeSection = id;
          break;
        }
      }
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
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
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.navbar.scrolled {
  border-bottom-color: #e2e8f0;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  text-decoration: none;
}

.logo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #2563eb;
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  transition: transform 0.25s ease, background 0.25s ease;
}

.logo:hover .logo-box {
  background: #1d4ed8;
  transform: rotate(-3deg) scale(1.05);
}

/* Nav links */
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #64748b;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: color 0.25s ease;
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
  border-radius: 1px;
}

.nav-link:hover,
.nav-link.active {
  color: #0f172a;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

.nav-num {
  color: #2563eb;
  font-weight: 600;
  margin-right: 3px;
}

/* Auth buttons */
.nav-auth {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-login-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.nav-login-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
}

.nav-settings-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  background: #eff6ff;
  color: #2563eb;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid #dbeafe;
}

.nav-settings-btn svg {
  width: 16px;
  height: 16px;
}

.nav-settings-btn:hover {
  background: #dbeafe;
}

.nav-logout-btn {
  padding: 7px 14px;
  background: none;
  color: #dc2626;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #fecaca;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.nav-logout-btn:hover {
  background: #fef2f2;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #334155;
  border-radius: 2px;
  transition: all 0.25s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  border-top: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}

.mobile-link {
  text-decoration: none;
  color: #334155;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 16px 32px;
  border-bottom: 1px solid #f1f5f9;
  transition: background 0.2s ease, color 0.2s ease;
}

.mobile-link:hover {
  background: #f1f5f9;
  color: #2563eb;
}

.mobile-auth {
  border-top: 2px solid #e2e8f0;
}

.mobile-auth-link {
  font-weight: 600;
}

.mobile-logout {
  color: #dc2626;
}

.mobile-logout:hover {
  background: #fef2f2;
  color: #dc2626;
}

/* Slide transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .navbar-inner {
    padding: 0 24px;
  }

  .nav-links {
    display: none;
  }

  .nav-auth {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>