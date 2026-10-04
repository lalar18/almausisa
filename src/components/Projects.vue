<script setup>
import { projects } from '../data/projects.js'
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">My Work</p>
        <h2 class="section-title">Featured projects</h2>
        <p class="section-lead">
          A selection of real products I've helped build — from live SaaS
          platforms to internal management systems.
        </p>
      </div>

      <div class="projects__grid">
        <article v-for="p in projects" :key="p.title" class="project">
          <div class="project__media">
            <img :src="p.image" :alt="p.title" loading="lazy" />
            <span v-if="p.live" class="project__badge">● Live</span>
          </div>
          <div class="project__body">
            <p class="project__cat">{{ p.category }}</p>
            <h3 class="project__title">{{ p.title }}</h3>
            <p class="project__desc">{{ p.description }}</p>
            <ul class="project__tags">
              <li v-for="t in p.tags" :key="t">{{ t }}</li>
            </ul>
            <a
              v-if="p.link"
              :href="p.link"
              target="_blank"
              rel="noopener"
              class="project__link"
              >Visit site →</a
            >
            <span v-else class="project__link project__link--muted"
              >Private / internal system</span
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}
.project {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.project:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
}
.project__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-soft);
}
.project__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
}
.project:hover .project__media img {
  transform: scale(1.04);
}
.project__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(16, 185, 129, 0.16);
  color: #34d399;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid rgba(52, 211, 153, 0.35);
  backdrop-filter: blur(4px);
}
.project__body {
  padding: 24px 24px 26px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.project__cat {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 6px;
}
.project__title {
  font-size: 1.25rem;
  font-weight: 700;
}
.project__desc {
  color: var(--text-muted);
  font-size: 0.93rem;
  margin: 12px 0 16px;
}
.project__tags {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.project__tags li {
  font-size: 0.74rem;
  color: var(--text);
  background: var(--primary-soft);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 999px;
}
.project__link {
  margin-top: auto;
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--primary);
}
.project__link--muted {
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 760px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
