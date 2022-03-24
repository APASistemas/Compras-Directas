<template>
  <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-color: #e3f2fd;"">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home"
              >Inicio</a
            >
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Archivos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="/users">Usuarios</a></li>
              <li>
                <a class="dropdown-item" href="/gerency">Gerencias</a>
              </li>
              <li><a class="dropdown-item" href="/purchase">Compras</a></li>
              <li>
                <a class="dropdown-item" href="/providers">Proveedores</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/informes">Informes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>