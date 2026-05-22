<script setup lang="ts">
import type { LanguageInfo } from "../utils/interfaces";

defineProps<{
  languages: LanguageInfo[];
}>();
</script>

<template>
  <div class="languages">
    <div v-for="language in languages" :key="language.name" class="language-row">
      <div class="language-bar">
        <div class="language-fill" :style="{ width: language.percentage }">
          <span class="language-name">{{ language.name }}</span>
        </div>
        <span class="percentage">{{ language.percentage }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.languages {
  width: 100%;
}

.language-row {
  display: flex;
  justify-content: center;
  width: 100%;
}

.language-bar {
  position: relative;
  margin: 5px 10px;
  max-width: 600px;
  width: 100%;
  min-height: 24px;
  background-color: #181818;
  overflow: hidden;
}

.language-fill {
  height: 100%;
  min-height: 24px;
  background-color: #ffffff;
}

.language-name {
  display: block;
  width: 100px;
  min-height: 24px;
  color: var(--text-primary);
  background-color: #404040;
  font-weight: bold;
  line-height: 24px;
}

.percentage {
  position: absolute;
  top: 0;
  right: 10px;
  min-height: 24px;
  color: var(--text-primary);
  font-weight: bold;
  line-height: 24px;
}
</style>
