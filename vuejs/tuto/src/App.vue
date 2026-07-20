<template>
  <h1>Bonjour {{ firstName.toUpperCase() }}</h1>
<p>Count: {{ count }}</p>
<button @click="count++">Increment</button>
<button v-on:click="increment">Increment</button>
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

