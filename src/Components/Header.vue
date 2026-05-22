<script setup lang="ts">
import Egypt from "../Images/egypt.jpg";
</script>

<template>
  <header class="header">
    <h1>Peter S Portfolio</h1>
    <img :src="Egypt" alt="Egypt" />
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 45px 0 0;
}

.header h1 {
  margin: 0.67em 0;
  color: var(--text-primary);
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1.2;
}

.header img {
  height: 90px;
  max-width: 300px;
  margin: 5px;
}

@media only screen and (max-width: 500px) {
  .header {
    margin-top: 50px;
  }

  .header h1 {
    font-size: 2.5rem;
  }
}
</style>
