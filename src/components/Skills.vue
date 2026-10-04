<script setup>
const bars = [
  { name: 'PHP / Laravel', level: 90 },
  { name: 'CodeIgniter / CakePHP', level: 85 },
  { name: 'MySQL & Database Design', level: 90 },
  { name: 'JavaScript / jQuery', level: 80 },
  { name: 'Bootstrap & Responsive UI', level: 85 },
  { name: 'Vue 3', level: 75 },
  { name: 'REST APIs & Integrations', level: 80 },
  { name: 'Git & Deployment (Hostinger)', level: 80 },
]

const tech = [
  { name: 'PHP', img: './images/skills/php.png' },
  { name: 'MySQL', img: './images/skills/mysql.png' },
  { name: 'JavaScript', img: './images/skills/JS_icon.webp' },
  { name: 'HTML5', img: './images/skills/HTML_Logo.webp' },
  { name: 'CSS3', img: './images/skills/CSS_icon.png' },
  { name: 'Bootstrap', img: './images/skills/bootstrap.svg' },
  { name: 'jQuery', img: './images/skills/jquery_icon.png' },
  { name: 'Vue', img: './images/skills/react.svg' },
  { name: 'Node.js', img: './images/skills/nodejs-icon.svg' },
  { name: 'MongoDB', img: './images/skills/mongodb.svg' },
  { name: 'PostgreSQL', img: './images/skills/post_gray_sql.svg' },
  { name: 'Hostinger', img: './images/skills/hostinger.png' },
]
</script>

<template>
  <section id="skills" class="alt">
    <div class="container skills">
      <div class="skills__bars">
        <p class="eyebrow">My Expertise</p>
        <h2 class="section-title">Skills &amp; proficiency</h2>
        <p class="section-lead">
          A back-end-leaning full-stack toolkit focused on efficient, clean and
          maintainable web solutions.
        </p>

        <div class="bar" v-for="b in bars" :key="b.name">
          <div class="bar__head">
            <span>{{ b.name }}</span><span>{{ b.level }}%</span>
          </div>
          <div class="bar__track">
            <div class="bar__fill" :style="{ width: b.level + '%' }"></div>
          </div>
        </div>
      </div>

      <div class="skills__tech">
        <div v-for="t in tech" :key="t.name" class="chip" :title="t.name">
          <img :src="t.img" :alt="t.name" loading="lazy" />
          <span>{{ t.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: start;
}
.bar {
  margin-top: 20px;
}
.bar__head {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 8px;
}
.bar__head span:last-child {
  color: var(--primary);
  font-weight: 600;
}
.bar__track {
  height: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  overflow: hidden;
}
.bar__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 999px;
}
.skills__tech {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 70px;
}
.chip {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.chip:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}
.chip img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}
.chip span {
  font-size: 0.78rem;
  color: var(--text-muted);
}

@media (max-width: 820px) {
  .skills {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .skills__tech {
    margin-top: 0;
  }
}
@media (max-width: 420px) {
  .skills__tech {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
