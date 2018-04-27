<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>
    {{ isLoggedIn }}
    <div class="right menu">
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login'])
};
</script>
