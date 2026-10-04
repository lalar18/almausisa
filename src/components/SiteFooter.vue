<script setup>
const year = new Date().getFullYear()
const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/al-mausisa-b963a7144/' },
  { label: 'Facebook', href: 'https://www.facebook.com/diego.madalunot' },
  { label: 'Email', href: 'mailto:lalar317@gmail.com' },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <a href="#home" class="footer__brand">Al<span>Mausisa</span></a>
      <nav class="footer__socials">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener"
          >{{ s.label }}</a
        >
      </nav>
      <p class="footer__copy">
        © {{ year }} Al Mausisa. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 34px 0;
}
.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}
.footer__brand {
  font-weight: 800;
  font-size: 1.1rem;
}
.footer__brand span {
  color: var(--primary);
}
.footer__socials {
  display: flex;
  gap: 22px;
}
.footer__socials a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}
.footer__socials a:hover {
  color: var(--text);
}
.footer__copy {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 0;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
