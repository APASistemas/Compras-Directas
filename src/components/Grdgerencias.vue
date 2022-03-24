<template>
  <div>
    <Navbar />

    <div class="input-group mb-3 mt-3 w-25">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Buscar</span
        >
      </div>

      <input
        type="text"
        class="form-control ml-1"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />

      <!-- COMBO PARA ORDENAR -->

      <div class="dropdown ml-1">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ordenar por
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">Id Gerencia</button>
          <button class="dropdown-item" type="button">Nombre Gerencia</button>
        </div>
      </div>
    </div>

    <!-- FIN COMBO PARA ORDENAR -->

    <table class="table mt-5 flex-wrap">
      <thead>
        <tr>
          <th id="idgerencia" scope="col">Id Gerencia</th>
          <th scope="col">Nombre de Gerencia</th>
          <th scope="col">Gerente</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(gerencia, index) in gerencias" :key="index">
          <!-- <td id="idgerencia">{{ gerencia.idgerencia }}</td> -->
          <td id="idgerencia">{{ index + 1 }}</td>
          <td>{{ gerencia.nombre }}</td>
          <td>{{ gerencia.gerente }}</td>
          <td>
            <v-btn color="green" class="ma-2" @click="addGerency">
              Agregar
            </v-btn>
            <v-btn color="amber">Editar</v-btn>
            <v-btn color="red darken" class="ml-3">Eliminar</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 




<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import Adduser from "../components/Adduser.vue";
export default {
  components: {
    Navbar,
    Adduser,
  },
  data: () => ({
    result: null,
    gerencias: [],
  }),
  methods: {
    tipodeEmpleado(indice) {
      // console.log(this.usuarios[indice].categoria);

      if (this.usuarios[indice].categoria == "E") {
        // console.log(this.usuarios[indice].nombre + "es un empleado");
        return true;
      } else {
        // console.log("es un gerente");
        return false;
      }
    },
    addGerency() {
      console.log("Hizo click en agregar");
      this.$router.replace({ name: "gerencyadd" });
    },
  },
  created() {
    // axios.get("http://127.0.0.1:8000/Usuario").then((result) => {
    //   this.result = result.data;
    //   // console.log(this.result);
    //   this.usuarios = this.result;
    // });
    this.gerencias = [
      {
        idgerencia: 1,
        nombre: "Administrativo Contable",
        gerente: "Marcos Dosio",
      },
      {
        idgerencia: 1,
        nombre: "Administrativo Contable",
        gerente: "Marcos Dosio",
      },
      {
        idgerencia: 1,
        nombre: "Administrativo Contable",
        gerente: "Marcos Dosio",
      },
      {
        idgerencia: 1,
        nombre: "Administrativo Contable",
        gerente: "Marcos Dosio",
      },
    ];
  },
};
</script>

<style>
#idgerencia {
  text-align: center;
}
</style>