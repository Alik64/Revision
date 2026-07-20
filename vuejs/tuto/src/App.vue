<template>
  <h1>Bonjour {{ firstName.toUpperCase() }}</h1>
  <p>Count: {{ count }}</p>

  <!-- <div v-show="count>=5">Bravo vous avez cliqué plus de 5 fois</div> -->
  <div v-if="count>=5">Bravo vous avez cliqué plus de 5 fois</div>
  <div v-else>Vous n'avez pas cliqué suffisamment</div>
  <button @click="count++">Increment</button>
  <button v-on:click="decrement">Decrement</button>
</template>

<script setup>
import { ref } from "vue";
const firstName = "John";
const count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
</script>
