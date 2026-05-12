<template>
  <section class="about" id="about">
    <div class="about-inner">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <div class="section-line"></div>
      </div>

      <div class="about-content">
        <div class="bio-section fade-in">
          <p class="bio-text">
            I am <span class="highlight">Muhamad Rizal Mutakin</span>, , a fresh graduate in Software and Game Development with a strong passion for frontend and web development using Vue.js and Laravel, as well as mobile application development using Flutter. I focus on creating responsive, user-centric, and performance-driven digital experiences that combine clean design with functional usability.
          </p>
          <p class="bio-text">
           With a solid foundation in modern web technologies, I continuously explore new frameworks, tools, and best practices to enhance my technical skills and deliver applications that are both visually engaging and structurally reliable.
          </p>
          
          <div class="stats-grid">
            <div class="stat-card">
              <h3 class="stat-num">10+</h3>
              <p class="stat-label">Projects Completed School</p>
            </div>
            <div class="stat-card">
              <h3 class="stat-num">3</h3>
              <p class="stat-label">Years Learning</p>
            </div>
          </div>
        </div>

        <div class="skills-section slide-up">
          <h3 class="skills-title">My Toolkit</h3>
          <div class="skills-container">
            <div class="skill-category" v-for="(category, index) in skillCategories" :key="index">
              <h4 class="category-name">{{ category.name }}</h4>
              <div class="skill-tags">
                <div class="skill-tag" v-for="skill in category.skills" :key="skill.name">
                  <i :class="skill.icon"></i>
                  <span>{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend Development',
          skills: [
            { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
            { name: 'HTML', icon: 'devicon-html5-plain' },
            { name: 'CSS', icon: 'devicon-css3-plain' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
          ]
        },
        {
          name: 'Mobile Development',
          skills: [
            { name: 'Flutter', icon: 'devicon-flutter-plain' },
          ]
        },
        {
          name: 'Backend & Database',
          skills: [
            { name: 'PHP', icon: 'devicon-php-plain' },
            { name: 'Laravel', icon: 'devicon-laravel-original' },
            { name: 'MySQL', icon: 'devicon-mysql-plain' },
          ]
        },
        {
          name: 'Tools & Design',
          skills: [
            { name: 'Figma', icon: 'devicon-figma-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'GitHub', icon: 'devicon-github-original' },
            { name: 'GitLab', icon: 'devicon-gitlab-plain' },
            { name: 'Postman', icon: 'devicon-postman-plain' },
            { name: 'Trello', icon: 'devicon-trello-plain' },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  padding: 100px 0;
  background: var(--bg-primary);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.section-header {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.bio-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.stat-card {
  background: var(--bg-secondary);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--border);
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--text-primary);
}

.stat-num {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.skills-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 30px;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.category-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag i {
  font-size: 18px;
  transition: color 0.3s ease;
}

.skill-tag:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
  transform: translateY(-2px);
}

.skill-tag:hover i {
  color: var(--bg-primary);
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>