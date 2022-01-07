<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        {{ appTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :to="item.path"
          :key="item.title"
          text
          plain
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  appTitle = "Lorem ipsum";

  menuItems = [
    { title: "Home", path: "/" },
    { title: "Importacao", path: "/importacao" },
    { title: "Lojas", path: "/lojas" },
  ];
}
</script>

<style lang="css">
html {
  overflow-y: auto !important;
}
</style>
