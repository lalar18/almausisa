<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const profile = `${import.meta.env.BASE_URL}images/profile.jpg`

const roles = ['Web Developer', 'PHP Backend Developer', 'Full-Stack Developer']
const current = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false
let timer

const tick = () => {
  const word = roles[roleIndex]
  if (!deleting) {
    current.value = word.slice(0, ++charIndex)
    if (charIndex === word.length) {
      deleting = true
      timer = setTimeout(tick, 1600)
      return
    }
  } else {
    current.value = word.slice(0, --charIndex)
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  timer = setTimeout(tick, deleting ? 55 : 95)
}

onMounted(tick)
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section id="home" class="hero">
    <div class="hero__glow"></div>
    <div class="container hero__inner">
      <div class="hero__text">
        <p class="hero__hi">👋 Hi there, I'm Al Mausisa</p>
        <h1 class="hero__title">
          I'm a <span class="hero__role">{{ current }}</span
          ><span class="hero__caret">|</span>
        </h1>
        <p class="hero__lead">
          A passionate full-stack web developer with 5+ years of experience,
          specializing in PHP frameworks like Laravel, CodeIgniter and CakePHP —
          building dynamic, database-driven applications with clean, scalable
          back-ends.
        </p>
        <div class="hero__actions">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-ghost">Get in Touch</a>
        </div>
        <ul class="hero__meta">
          <li><strong>Email</strong>lalar317@gmail.com</li>
          <li><strong>Languages</strong>English · Tagalog · Bisaya</li>
          <li><strong>Based in</strong>Cebu City, Philippines</li>
        </ul>
      </div>

      <div class="hero__photo">
        <div class="hero__ring"></div>
        <img :src="profile" alt="Al Mausisa" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 150px 0 110px;
  overflow: hidden;
}
.hero__glow {
  position: absolute;
  top: -180px;
  right: -120px;
  width: 560px;
  height: 560px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.28),
    transparent 62%
  );
  filter: blur(10px);
  pointer-events: none;
}
.hero__inner {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 56px;
  align-items: center;
  position: relative;
}
.hero__hi {
  color: var(--text-muted);
  font-weight: 600;
  margin: 0 0 14px;
}
.hero__title {
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
}
.hero__role {
  color: var(--primary);
}
.hero__caret {
  color: var(--accent);
  font-weight: 400;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.hero__lead {
  color: var(--text-muted);
  max-width: 560px;
  margin: 22px 0 30px;
  font-size: 1.05rem;
}
.hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.hero__meta {
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  display: grid;
  gap: 10px;
}
.hero__meta li {
  display: flex;
  gap: 14px;
  color: var(--text);
  font-size: 0.95rem;
}
.hero__meta strong {
  min-width: 96px;
  color: var(--text-muted);
  font-weight: 600;
}
.hero__photo {
  position: relative;
  justify-self: center;
}
.hero__photo img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--bg-card);
  box-shadow: var(--shadow);
  position: relative;
  z-index: 1;
}
.hero__ring {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    var(--primary),
    var(--accent),
    var(--primary)
  );
  filter: blur(2px);
  opacity: 0.6;
  animation: spin 9s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 820px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero__lead {
    margin-left: auto;
    margin-right: auto;
  }
  .hero__actions {
    justify-content: center;
  }
  .hero__meta {
    justify-items: center;
  }
  .hero__meta li {
    flex-direction: column;
    gap: 2px;
    align-items: center;
  }
  .hero__photo {
    order: -1;
  }
  .hero__photo img {
    width: 220px;
    height: 220px;
  }
}
</style>
