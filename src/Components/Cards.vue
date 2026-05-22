<script setup lang="ts">
import type { CardInfo } from "../utils/interfaces";

defineProps<{
  cards: CardInfo[];
}>();
</script>

<template>
  <div class="card-layout">
    <article v-for="card in cards" :key="card.header" class="card">
      <div class="card-content">
        <h3>
          <a
            v-if="card.link"
            :href="card.link"
            target="_blank"
            rel="noreferrer"
          >
            {{ card.header }}
          </a>
          <template v-else>{{ card.header }}</template>
        </h3>
        <p>{{ card.body }}</p>
      </div>

      <p v-if="card.footer" class="card-footer">
        <b>Tech Stack: </b>{{ card.footer }}
      </p>
    </article>
  </div>
</template>

<style scoped>
.card-layout {
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 8px;
}

.card {
  box-sizing: border-box;
  background-color: #212121;
  min-width: 300px;
  max-width: 400px;
  flex: 1 1 300px;
  padding: 16px;
  color: var(--text-primary);
}

.card-content {
  padding: 0 0 8px;
}

.card h3 {
  margin: 0 0 8px;
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.33;
}

.card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}

.card .card-footer {
  color: var(--text-primary);
}
</style>
