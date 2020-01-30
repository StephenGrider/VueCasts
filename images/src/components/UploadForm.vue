<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
export default {
  name: 'UploadForm'
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
}
</style>
