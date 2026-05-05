<template>
  <section class="about" id="about">
    <div class="about-inner">
      <div class="about-body">
        <!-- Bio col -->
        <div class="bio-col">
          <h2 class="about-title">About Me</h2>
          <p class="about-bio">
            My name is Muhamad Rizal Mutakin, a Software and Game Development student with a keen interest in web and mobile application development. 
            Currently, I focus on front-end and mobile development, particularly in creating responsive and user-friendly application displays.
          </p>
          <p class="about-bio">
            I have a good understanding of basic programming concepts and continue to develop my skills by learning the latest technologies. 
            I am committed to writing clean, effective code and ensuring that applications function optimally according to user needs.
          </p>
        </div>

        <!-- Skills col -->
        <div class="skills-col">
          <h4 class="skills-heading">My Expertise</h4>
          <div class="skills-grid">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="skill-pill"
              :style="{ '--accent': skill.color }"
            >
              <font-awesome-icon :icon="skill.icon" class="skill-icon" />
              {{ skill.name }}
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
   skills: [
        { name: 'Html',     color: '#42b883', iconClass: 'devicon-html5-plain colored'          },
        { name: 'Flutter',    color: '#61dafb', iconClass: 'devicon-flutter-plain'        },
        { name: 'Figma',      color: '#f24e1e', iconClass: 'devicon-figma-plain'          },
        { name: 'PHP',        color: '#68a063', iconClass: 'devicon-php-plain'            },
        { name: 'Laravel 12',    color: '#3178c6', iconClass: 'devicon-laravel-plain'        },
        { name: 'Vue.js 3',   color: '#e84855', iconClass: 'devicon-vuejs-plain colored'  },
        { name: 'Postman',    color: '#ff9800', iconClass: 'devicon-postman-plain'        },
        { name: 'MySQL',      color: '#336791', iconClass: 'devicon-mysql-plain'          },
        { name: 'Git',        color: '#f05032', iconClass: 'devicon-git-plain colored'    },
        { name: 'Github',     color: '#38bdf8', iconClass: 'devicon-github-original'      },
        { name: 'Gitlab',     color: '#38bdf8', iconClass: 'devicon-gitlab-plain'      },
        { name: 'Bootstrap 5',  color: '#38bdf8', iconClass: 'devicon-bootstrap-plain'      },
        { name: 'Css',  color: '#38bdf8', iconClass: 'devicon-css3-plain colored'      },
      ],
    }
  },
}
</script>

<style scoped>
.about {
  background: #f8fafc;
  padding: 120px 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
}

.about-title {
  font-size: 40px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 32px;
  letter-spacing: -0.03em;
  position: relative;
  display: inline-block;
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 56px;
  height: 3px;
  background: #2563eb;
  border-radius: 2px;
}

.about-bio {
  font-size: 15px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 20px;
  font-weight: 400;
}

.skills-heading {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #94a3b8;
  margin-bottom: 20px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  background: white;
  border: 1px solid #e2e8f0;
  font-size: 13px;
  font-weight: 500;
  color: #334155;
  transition: all 0.25s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
}

.skill-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border-color: #2563eb;
  color: #2563eb;
}

.skill-icon {
  font-size: 16px;
  color: var(--accent, #2563eb);
  width: 18px;
  text-align: center;
}

/* Responsive */
@media (max-width: 900px) {
  .about-body {
    grid-template-columns: 1fr;
    gap: 56px;
  }
  
  .about-title {
    font-size: 34px;
  }
}

@media (max-width: 480px) {
  .about-inner {
    padding: 0 24px;
  }
  
  .skill-pill {
    padding: 7px 12px;
    font-size: 12px;
  }
  
  .skill-icon {
    font-size: 14px;
  }
}
</style>