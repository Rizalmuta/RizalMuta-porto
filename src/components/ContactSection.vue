<template>
  <section class="contact-section" id="contact">
    <div class="contact-inner">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <div class="section-line"></div>
      </div>

      <!-- Contact Info Only -->
      <div class="contact-info slide-up">
        <h3 class="info-title">Clean design, smooth experience.</h3>
        <p class="info-desc">
          Designing smooth and modern user experiences. Building clean and
          user-friendly digital products.
        </p>

        <div class="info-details">
          <div class="info-item">
            <i class="ph ph-envelope-simple"></i>
            <span>mutakinr114@gmail.com</span>
          </div>
          <div class="info-item">
            <i class="ph ph-map-pin"></i>
            <span>Bogor</span>
          </div>
        </div>

        <div class="social-links">
          <a
            href="https://github.com/Rizalmuta"
            target="_blank"
            class="social-btn"
          >
            <i class="ph ph-github-logo"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/m-rizal-mutakin-5a0a1428b/"
            target="_blank"
            class="social-btn"
          >
            <i class="ph ph-linkedin-logo"></i>
          </a>
          <a
            href="https://www.instagram.com/rizzll.__/"
            target="_blank"
            class="social-btn"
          >
            <i class="ph ph-instagram-logo"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <p class="footer-quote">"Simplicity is the ultimate sophistication."</p>
        <p class="copyright">&copy; 2026 Rizal Mutakin. All rights reserved.</p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.contact-section {
  padding-top: 100px;
  background: var(--bg-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contact-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px 100px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

/* Contact Info */
.contact-info {
  max-width: 600px;
  width: 100%;
}

.info-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
}

.info-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
}

.info-item i {
  font-size: 24px;
  color: var(--text-secondary);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-btn {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 24px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-btn:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
  transform: translateY(-4px);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  padding: 40px 0;
  background: var(--bg-secondary);
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.footer-quote {
  font-size: 14px;
  color: var(--text-secondary);
  font-style: italic;
}

.copyright {
  font-size: 14px;
  color: var(--text-secondary);
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-inner {
    padding: 0 24px 80px;
  }

  .section-title {
    font-size: 36px;
  }

  .info-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .info-item {
    font-size: 15px;
  }

  .social-btn {
    width: 46px;
    height: 46px;
    font-size: 22px;
  }
}
</style>
