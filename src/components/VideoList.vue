<template>
  <ul>
    VideoList
    {{ videos.length }}
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: ['videos']
};
</script>

<style>
</style>
