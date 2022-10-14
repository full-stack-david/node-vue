<template>
  <v-app>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
  #app {
    background: #ffffff !important;
    background-color: #ffffff !important;
  }
</style>