<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Id Gerencia"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-label>Tipo de Empleado</v-label>
      <v-select
        :items="tipoEmpleados"
        label=""
        outlined
        class="mt-3"
      ></v-select>

      <div class="align-center">
        <v-btn color="light-green" @click="confirmUser"> Confirmar </v-btn>
        <v-btn color="red accent-4" @click="exit" class="ml-5">Cancelar</v-btn>
      </div>
    </v-form>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      tipoEmpleados: ["Empleado", "Gerente"],
    };
  },
  methods: {
    exit() {
      console.log("Click en cancelar");
      this.$router.replace({ name: "gerency" });
    },
    confirmUser() {
      console.log("Click en confirmar Usuario");
    },
  },
};
</script>

</script>
