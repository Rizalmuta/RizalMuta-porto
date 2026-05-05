<template>
  <section class="contact" id="contact">
    <div class="contact-info">
      <h2 class="contact-title">Let's Connect!</h2>

      <div class="social-links">
        <!-- Instagram -->
        <a href="https://www.instagram.com/rizzll.__/" class="social-btn" target="_blank" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
        </a>


        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/m-rizal-mutakin-5a0a1428b/" class="social-btn" target="_blank" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.8"/>
            <path d="M7 10v7M7 7.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M11 10v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/Rizalmuta" class="social-btn" target="_blank" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #0f172a;
  padding: 100px 0;
  color: #fff;
  text-align: center;
}

.contact-title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0 0 2.5rem;
  letter-spacing: -0.03em;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
}

.social-btn:hover {
  color: #fff;
  border-color: #2563eb;
  background: rgba(37, 99, 235, 0.15);
  transform: translateY(-2px);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}
</style>