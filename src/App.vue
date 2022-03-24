<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="APA Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-apa.png"
          transition="scale-transition"
          width="70"
        />
        <h3>Administración Provincial del Agua - Sistema de Compras</h3>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
