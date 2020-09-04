<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div v-if="showExtra">Extra stuff</div>
  </div>
</template>
<script>
export default {
  props: ["showExtra"]
};
</script>