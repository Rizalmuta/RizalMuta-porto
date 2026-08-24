<template>
  <section class="experience-section" id="experience">
    <div class="experience-inner">
      <div class="section-header">
        <h2 class="section-title">Experience</h2>
        <div class="section-line"></div>
      </div>

      <div class="timeline">
        <article class="experience-card fade-in" v-for="item in experiences" :key="item.id">
          <div class="experience-period">
            <span class="period-badge">{{ item.period }}</span>
            <p class="period-label">{{ item.timeline }}</p>
          </div>

          <div class="experience-content">
            <div class="company-row">
              <span class="company-dot"></span>
              <h3>{{ item.company }}</h3>
            </div>

            <h4 class="role-title">{{ item.role }}</h4>

            <p class="experience-description">
              {{ item.description }}
            </p>

            <ul class="achievement-list">
              <li v-for="achievement in item.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: 'PT. Berdhaya Gemilang Mandiri',
          role: 'Mobile Developer Intern',
          period: '6 Months, Jan 2025 - Jun 2025',
          timeline: 'Internship Program',
          description:
            'Supported mobile app development and built core features based on team needs:',
          achievements: [
            'Turned UI/UX designs into functional mobile app screens.',
            'Integrated REST APIs to connect frontend features with backend data.',
            'Helped fix bugs and improve existing app features.',
            'Worked closely with senior developers in a team environment.'
          ]
        },
        {
          id: 2,
          company: 'Dicoding DBS Foundation Coding Camp',
          role: 'Full Stack Developer Cohort',
          period: '4 Months, Jan 2025 - Apr 2025',
          timeline: 'Bootcamp Program',
          description:
            'Full Stack Coding Camp Bootcamp:',
          achievements: [
           'Built web applications both individually and in team projects.',
            'Developed backend services using Node.js..',
            'Created responsive frontend interfaces with HTML, CSS, and React.js.',
            'Learned the basics of AWS cloud deployment and architecture.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>


.experience-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.experience-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 28px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 28px 30px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
}

.experience-period {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-right: 1px solid var(--border);
  padding-right: 26px;
}

.period-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
}

.period-label {
  margin-top: 16px;
  font-size: 14px;
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.company-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-primary);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.8);
}

.company-row h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}

.role-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.experience-description {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.achievement-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
  padding: 0;
}

.achievement-list li {
  position: relative;
  padding-left: 20px;
  line-height: 1.7;
  color: var(--text-secondary);
  font-size: 15px;
}

.achievement-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-primary);
}

@media (max-width: 768px) {
  .experience-inner {
    padding: 0 20px;
  }

  .experience-card {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 22px 20px;
  }

  .experience-period {
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding-right: 0;
    padding-bottom: 16px;
  }

  .company-row h3 {
    font-size: 20px;
  }
}
</style>
