<script setup>
const services = [
  {
    icon: '🧩',
    title: 'Custom App Development',
    text: 'Dynamic, database-driven applications tailored to your needs using PHP frameworks — Laravel, CodeIgniter and CakePHP.',
  },
  {
    icon: '🔌',
    title: 'API Development & Integration',
    text: 'Secure RESTful APIs, plus integration of third-party services like payment gateways, maps, chat and social sign-in.',
  },
  {
    icon: '🗄️',
    title: 'Database & Backend Architecture',
    text: 'Efficient MySQL schema design, complex backend logic, secure data handling and robust user authentication.',
  },
  {
    icon: '⚙️',
    title: 'Maintenance & Optimization',
    text: 'Ongoing support, bug fixes, new features, and performance & security improvements for existing PHP apps.',
  },
  {
    icon: '🖥️',
    title: 'CMS Development',
    text: 'Build or customize content management systems — WordPress or a custom PHP CMS built around your workflow.',
  },
  {
    icon: '🚀',
    title: 'Deployment & Automation',
    text: 'Deploy and maintain sites on Hostinger, set up cron jobs, Git workflows and automated build-to-deploy pipelines.',
  },
]
</script>

<template>
  <section id="services">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">What I Do</p>
        <h2 class="section-title">Services I offer</h2>
        <p class="section-lead">
          From planning and design to development and launch — I've got the full
          build covered.
        </p>
      </div>

      <div class="services__grid">
        <article v-for="s in services" :key="s.title" class="service">
          <div class="service__icon">{{ s.icon }}</div>
          <h3 class="service__title">{{ s.title }}</h3>
          <p class="service__text">{{ s.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.service {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 30px 26px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.service:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
}
.service__icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  background: var(--primary-soft);
  border-radius: 14px;
  margin-bottom: 18px;
}
.service__title {
  font-size: 1.12rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.service__text {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 900px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
