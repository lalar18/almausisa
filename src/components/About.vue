<script setup>
const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: '30+', label: 'Projects delivered' },
  { value: '10+', label: 'Happy clients' },
  { value: '24/7', label: 'Support mindset' },
]
</script>

<template>
  <section id="about" class="alt">
    <div class="container about">
      <div class="about__text">
        <p class="eyebrow">About Me</p>
        <h2 class="section-title">
          Turning ideas into clean, scalable web applications
        </h2>
        <p class="about__p">
          I'm a web designer &amp; full-stack developer who enjoys every stage
          of building a product — from planning and design to development and
          launch. I've worked extensively with Laravel, CodeIgniter and CakePHP
          to build dynamic, database-driven applications.
        </p>
        <p class="about__p">
          On the front end I'm comfortable with Bootstrap, jQuery, JavaScript
          and Vue, creating responsive, user-friendly interfaces. While I enjoy
          both sides, I gravitate toward the back end — fetching, processing and
          structuring data for efficient, scalable performance.
        </p>
        <p class="about__p">
          Have a project in mind, or need help enhancing, fixing or building a
          feature? I'm always open to collaborating and helping bring ideas to
          life.
        </p>
      </div>

      <div class="about__stats">
        <div v-for="s in stats" :key="s.label" class="stat">
          <span class="stat__value">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
}
.about__p {
  color: var(--text-muted);
  margin: 18px 0 0;
}
.about__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.stat {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 22px;
  text-align: center;
}
.stat__value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
}
.stat__label {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 820px) {
  .about {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
