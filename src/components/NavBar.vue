<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const scrolled = ref(false)
const open = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const close = () => (open.value = false)
</script>

<template>
  <header :class="['nav', { 'nav--scrolled': scrolled }]">
    <div class="container nav__inner">
      <a href="#home" class="nav__brand" @click="close">
        Al<span>Mausisa</span>
      </a>

      <nav :class="['nav__links', { 'nav__links--open': open }]">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="nav__link"
          @click="close"
          >{{ l.label }}</a
        >
        <a
          href="./files/Al_Mausisa.pdf"
          download
          class="btn btn-primary nav__cv"
          @click="close"
          >Download CV</a
        >
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(11, 15, 23, 0.82);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.nav__brand {
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}
.nav__brand span {
  color: var(--primary);
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__link {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}
.nav__link:hover {
  color: var(--text);
}
.nav__cv {
  padding: 9px 18px;
}
.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 8px;
}
.nav__toggle span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

@media (max-width: 820px) {
  .nav__toggle {
    display: flex;
  }
  .nav__links {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 18px;
    padding: 24px 20px 30px;
    background: var(--bg-soft);
    border-bottom: 1px solid var(--border);
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .nav__links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .nav__cv {
    width: 100%;
    justify-content: center;
  }
}
</style>
