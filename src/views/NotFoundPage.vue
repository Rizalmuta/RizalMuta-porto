<template>
  <div class="not-found">
    <div class="not-found__content">
      <div class="lottie-container" ref="lottieContainer"></div>
      <h1 class="not-found__title">404 Not Found</h1>
      <p class="not-found__desc">
        Oops! The page you're looking for doesn't exist yet.
      </p>
      <button class="not-found__btn" @click="goHome">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </button>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'NotFoundPage',
  mounted() {
    this.loadAnimation()
  },
  beforeUnmount() {
    if (this.anim) {
      this.anim.destroy()
    }
  },
  methods: {
    loadAnimation() {
      const lottieJsonPath = '/src/public/Assets/proces.json'

      this.anim = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: lottieJsonPath,
      })
    },
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  padding: 48px 24px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.not-found__content {
  text-align: center;
  max-width: 480px;
  width: 100%;
  opacity: 0;
  transform: translateY(16px);
  animation: fadeIn 0.6s ease forwards 0.1s;
}

.lottie-container {
  width: 100%;
  max-width: 360px;
  margin: 0 auto 24px;
}

.not-found__title {
  font-size: 64px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.04em;
  margin: 0 0 8px;
  line-height: 1;
}

.not-found__desc {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 32px;
  font-weight: 400;
}

.not-found__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #2563eb;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
}

.not-found__btn:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
}

.not-found__btn:active {
  transform: translateY(0);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .not-found__title {
    font-size: 48px;
  }

  .lottie-container {
    max-width: 280px;
  }
}
</style>
