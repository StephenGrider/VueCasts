<template>
  <ul>
    <VideoListItem
      v-for="video in videos"
      v-bind:video="video"
    >
    </VideoListItem>
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
