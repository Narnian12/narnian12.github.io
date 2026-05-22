<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  sections: string[];
}>();

const activeSection = ref("");
const isOpen = ref(false);
const isMobile = ref(false);
let mediaQuery: MediaQueryList | undefined;

const visibleSections = computed(() =>
  isMobile.value && !isOpen.value ? [] : props.sections
);

function switchMenu(title: string) {
  activeSection.value = title;
  isOpen.value = false;
}

function toggleOpen() {
  isOpen.value = !isOpen.value;
}

function updateIsMobile(event?: MediaQueryListEvent) {
  isMobile.value = event?.matches ?? mediaQuery?.matches ?? false;
  if (!isMobile.value) {
    isOpen.value = false;
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia("(max-width: 500px)");
  updateIsMobile();
  mediaQuery.addEventListener("change", updateIsMobile);
});

onUnmounted(() => {
  mediaQuery?.removeEventListener("change", updateIsMobile);
});
</script>

<template>
  <nav class="navigation" aria-label="Primary navigation">
    <a
      v-if="isMobile"
      class="nav-link menu-button"
      href="#0"
      aria-label="Toggle navigation menu"
      :aria-expanded="isOpen"
      @click.prevent="toggleOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </a>

    <a
      v-for="section in visibleSections"
      :key="section"
      class="nav-link"
      :class="{ active: activeSection === section }"
      :href="`#${section}`"
      @click="switchMenu(section)"
    >
      {{ section }}
    </a>

    <template v-if="!isMobile">
      <a
        class="nav-link social-link"
        href="https://github.com/Narnian12"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        GH
      </a>
      <a
        class="nav-link social-link"
        href="https://www.linkedin.com/in/peterysun/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        in
      </a>
    </template>
  </nav>
</template>

<style scoped>
.navigation {
  background-color: #404040;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
}

.nav-link {
  display: block;
  float: left;
  color: white;
  padding: 14px 16px;
  font-size: 15px;
  line-height: 1.5;
  text-decoration: none;
  background-color: #404040;
  border: 0;
}

.nav-link.active {
  background-color: gray;
}

.nav-link:hover {
  background-color: lightgray;
  color: #ffffff;
}

.social-link {
  float: right;
  min-width: 24px;
  font-weight: 700;
}

.menu-button {
  width: 24px;
  height: 22px;
}

.menu-button span {
  display: block;
  width: 22px;
  height: 2px;
  margin: 4px 0;
  background-color: white;
}

@media only screen and (max-width: 500px) {
  .nav-link {
    float: none;
    text-align: left;
  }
}
</style>
