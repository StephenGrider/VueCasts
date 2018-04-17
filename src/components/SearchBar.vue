<template>
  <div>
    <input v-on:input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(event) {
      console.log(event.target.value);
    }
  }
};
</script>

<style>
</style>
