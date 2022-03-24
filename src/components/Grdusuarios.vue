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
          <button class="dropdown-item" type="button">Id Usuario</button>
          <button class="dropdown-item" type="button">Nombre Usuario</button>
        </div>
      </div>
    </div>

    <!-- FIN COMBO PARA ORDENAR -->
    <table class="table mt-5 flex-wrap">
      <thead>
        <tr>
          <th id="idusuario" scope="col">Id Usuario</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Categoria</th>
          <th scope="col">Gerencia</th>
          <th scope="col">Acción</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <!-- <td id="idgerencia">{{ usuario.idgerencia }}</td> -->
          <td id="idusuario">{{ index + 1 }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td v-if="tipodeEmpleado(index)">Empleado</td>
          <td v-else="tipodeEmpleado(index)">Gerente</td>
          <td class="color: red;">----Aca va la gerencia----</td>
          <td>
            <v-btn color="green" class="ma-2" @click="addUser"> Agregar </v-btn>
            <v-btn color="amber" @click="editUser(usuario.id)">Editar</v-btn>
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
    resul2: null,
    usuarios: [],
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
    addUser() {
      console.log("Hizo click en agregar");
      this.$router.replace({ name: "useradd" });
    },
    editUser(iduser) {
      console.log("Hizo click en editar");
      console.log(iduser);
      // ACA TENGO QUE CONSUMIR LA API PARA QUE ME TRAIGA LOS DATOS DEL USUARIO DONDE ESTOY PARADO
      axios.get("http://127.0.0.1:8000/Usuario/" + iduser).then((result) => {
        this.result = result.data;
        console.log(this.result);
        this.$router.push({ name: "/edit-user/:id'" });
      });
      //  this.usuarios = this.result;
    },
  },
  created() {
    axios.get("http://127.0.0.1:8000/Usuario").then((result) => {
      this.result = result.data;
      // console.log(this.result);
      this.usuarios = this.result;
    });
  },
};
</script>

<style>
#idusuario {
  text-align: center;
}
</style>