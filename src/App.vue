<script setup lang="ts">
import NavBar from "./Components/NavBar.vue";
import Header from "./Components/Header.vue";
import Cards from "./Components/Cards.vue";
import Languages from "./Components/Languages.vue";
import {
  navSections,
  profileCards,
  languages,
  projectCards,
} from "./data/content";
</script>

<template>
  <main class="app">
    <NavBar :sections="navSections" />
    <Header />

    <section id="Profile" class="section">
      <h2>Profile</h2>
      <Cards :cards="profileCards" />
    </section>

    <section id="Languages" class="section">
      <h2>Languages</h2>
      <Languages :languages="languages" />
    </section>

    <section id="Projects" class="section">
      <h2>Projects</h2>
      <Cards :cards="projectCards" />
    </section>
  </main>
</template>

<style scoped>
.app {
  text-align: center;
}

.section {
  width: 100%;
  padding-top: 50px;
  margin-top: -50px;
}

.section h2 {
  margin: 0 0 16px;
  color: var(--text-primary);
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.2;
}

@media only screen and (max-width: 500px) {
  .section {
    padding-top: 70px;
    margin-top: -70px;
  }

  .section h2 {
    font-size: 2.25rem;
  }
}
</style>
