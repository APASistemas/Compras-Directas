<template>
  <Navbar />
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",

  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
