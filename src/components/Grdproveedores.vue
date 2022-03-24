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
          <button class="dropdown-item" type="button">Id Proveedor</button>
          <button class="dropdown-item" type="button">Nombre Proveedor</button>
        </div>
      </div>
    </div>

    <!-- FIN COMBO PARA ORDENAR -->
    <table class="table mt-5 flex-wrap">
      <thead>
        <tr>
          <th id="idproveedor" scope="col">Id Proveedor</th>
          <th scope="col">Nombre</th>
          <th scope="col">Direccion</th>
          <th scope="col">Localidad</th>
          <th scope="col">Télefono</th>
          <th scope="col">E-Mail</th>
          <th scope="col">Cuit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proveedor, index) in proveedores" :key="index">
          <!-- <td id="idproveedor">{{ index.idproveedor }}</td> -->
          <td id="idproveedor">{{ index + 1 }}</td>
          <td>{{ proveedor.nombre }}</td>
          <td>{{ proveedor.direccion }}</td>
          <td>{{ proveedor.localidad }}</td>
          <td>{{ proveedor.telefono }}</td>
          <td>{{ proveedor.email }}</td>
          <td>{{ proveedor.cuit }}</td>
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
import Navbar from "./Navbar.vue";
import axios from "axios";
import Adduser from "./Adduser.vue";
export default {
  components: {
    Navbar,
    Adduser,
  },
  data: () => ({
    result: null,
    proveedores: [],
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
    addProvider() {
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
    this.proveedores = [
      {
        idproveedor: 1,
        nombre: "Marinelli",
        direccion: "Pelegrini 175",
        localidad: "Santa Rosa",
        telefono: "02954-454545",
        email: "info@marinelli.com.ar",
        cuit: "305048587",
      },
      {
        idproveedor: 1,
        nombre: "Marinelli",
        gerente: "Marcos Dosio",
        direccion: "Pelegrini 175",
        localidad: "Santa Rosa",
        telefono: "02954-454545",
        email: "info@marinelli.com.ar",
        cuit: "305048587",
      },
      {
        idproveedor: 1,
        nombre: "Marinelli",
        gerente: "Marcos Dosio",
        direccion: "Pelegrini 175",
        localidad: "Santa Rosa",
        telefono: "02954-454545",
        email: "info@marinelli.com.ar",
        cuit: "305048587",
      },
      {
        idproveedor: 1,
        nombre: "Marinelli",
        gerente: "Marcos Dosio",
        direccion: "Pelegrini 175",
        localidad: "Santa Rosa",
        telefono: "02954-454545",
        email: "info@marinelli.com.ar",
        cuit: "305048587",
      },
    ];
  },
};
</script>

<style>
#idproveedor {
  text-align: center;
}
</style>