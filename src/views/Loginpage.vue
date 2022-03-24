<template>
  <div id="login">
    <h1 id="titulo">Login Sistema APA</h1>
    <input
      class="margin-top: 60px"
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Ingrese nombre de Usuario...."
    />
    <br />
    <hr />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Ingrese Contraseña..."
    />
    <br />
    <button
      name="btnentrar"
      type="button"
      class="btn btn-primary mt-10 d-block mx-auto"
      v-on:click="login()"
    >
      Entrar
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          // this.input.username == this.$parent.mockAccount.username &&
          // this.input.password == this.$parent.mockAccount.password
          this.input.username == "ramirotule@gmail.com" &&
          this.input.password == "Miba1216"
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "home" });
        } else {
          alert("El usuario o contraseña ingresada es incorrecta");
        }
      } else {
        alert("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  align-content: center;
}
h1 {
  color: red;
  text-align: center;
}
input {
  margin-top: 20px;
  width: 100%;
}
.btnentrar {
  align-content: center;
}
</style>