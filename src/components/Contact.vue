<script setup>
const channels = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'lalar317@gmail.com',
    href: 'mailto:lalar317@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+63 926 225 9587',
    href: 'tel:+639262259587',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Cebu City, Cebu, Philippines',
    href: 'https://www.google.com/maps/place/Cebu+City',
  },
]
</script>

<template>
  <section id="contact" class="alt">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Get in Touch</p>
        <h2 class="section-title">Let's work together</h2>
        <p class="section-lead">
          Interested in working together or have a question? I'm always open to
          new projects, collaborations, or a friendly chat about web
          development.
        </p>
      </div>

      <div class="contact__grid">
        <a
          v-for="c in channels"
          :key="c.label"
          :href="c.href"
          target="_blank"
          rel="noopener"
          class="contact__card"
        >
          <div class="contact__icon">{{ c.icon }}</div>
          <span class="contact__label">{{ c.label }}</span>
          <span class="contact__value">{{ c.value }}</span>
        </a>
      </div>

      <div class="contact__cta">
        <a href="mailto:lalar317@gmail.com" class="btn btn-primary"
          >Say Hello 👋</a
        >
        <a href="./files/Al_Mausisa.pdf" download class="btn btn-ghost"
          >Download CV</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.contact__card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 30px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.contact__card:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
}
.contact__icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  background: var(--primary-soft);
  border-radius: 14px;
  margin-bottom: 8px;
}
.contact__label {
  color: var(--text-muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.contact__value {
  font-weight: 600;
}
.contact__cta {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 40px;
  flex-wrap: wrap;
}

@media (max-width: 760px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
