//Template del navbar
{
  const app = document.querySelector("#main-menu");

  app.innerHTML = `
  <!--Logo-->
  <a class="navbar-brand" href="https://www.phineas-soluciones.com/">
    <img src="features/img/logo-original.svg" alt="" width="120px;">
  </a>
  <!--boton md navbar-->
  <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#menubar"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars text-black"></i>
  </button>
  <!--Inicio - Menu responsive-->
  <div class="collapse navbar-collapse" id="menubar">
    <ul class="navbar-nav me-auto text-start text-lg-center pt-3 pb-5 pt-lg-0 pb-lg-0">
      <!--Lista de navegación-->
      <li class="d-block d-lg-none pt-5">
        <h5 class="">Mapa de navegación</h5>
        <hr>
      </li>
      <li class="nav-item">
        <a class="nav-link navh text-decoration-none" href="acerca-de.html"> Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navh text-decoration-none" href="servicios.html">Productos y servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navh text-decoration-none" href="casos.html">Casos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navh text-decoration-none" href="blog.html">Blog</a>
      </li>
      <!--Fin - Lista de navegación-->

      <!--Inicio - Seleccionar idioma - show md -->
      <li class="d-block d-lg-none pt-5">
        <h5 class="">Seleccionar idioma</h5>
        <hr>
      </li>
      <li>
        <div class="d-block d-lg-none">
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item" role="button">Spanish</li>
            <li class="list-group-item" role="button">US & EU</li>
          </ul>
        </div>
      </li>
      <!--Fin - Seleccionar idioma - show md -->

      <!--Inicio -  Botón contactanos - show md-->
      <li class="d-block d-lg-none pt-5">
        <button class="btn btn-secondary rounded-0 me-2 "
          onclick="location.href='contactanos.html';">Contáctanos</button>
      </li>
      <!--fin -  Botón contactanos - show md-->
    </ul>

    <!-- Inicio - Contactanos y selección de idioma vista web-->
    <ul class="navbar-nav flex-row flex-wrap px-0 px-lg-3 pc-center d-none d-lg-flex">
      <li class="nav-item p-0">
        <button class="btn btn-secondary rounded-0 me-2"
          onclick="location.href='contactanos.html';">Contáctanos</button>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
          Spanish
        </a>
        <ul class="dropdown-menu  border-0">
          <li><a class="dropdown-item" href="#">Spanish</a></li>
          <li><a class="dropdown-item" href="#">US &amp; EU</a></li>
        </ul>
      </li>
    </ul>
    <!-- fin - Contactanos y selección de idioma vista web-->

    <!--Buscar-->
    <form class="d-none d-lg-flex bd-search pt-5 pb-5 pt-lg-0 pb-lg-0" role="search">
      <input class="form-control" type="Buscar" placeholder="Buscar..." aria-label="Search">
    </form>
  </div>

`;
}

//Template del footer
{
  const app = document.querySelector("#phineas-footer");
  
app.innerHTML = `
<!--Logo-->
<div class="row bg-secondary text-white p-3 p-md-5 pt-5 pb-5">
        <div class="col-12 col-lg-3 pb-4 pb-md-0">
          <a class="navbar-brand lh-lg" href="https://www.phineas-soluciones.com/">
            <img src="features/img/logo-negative.svg" alt="" height="35">
          </a>
          <p>Todos los derechos reservados 2022</p>
        </div>
        <div class="col-12 col-lg-4 pb-3 pb-md-0">
          <h6 class="lh-sm">Contáctanos</h6>
          <p class="fs-4 fw-bolder">
            <a href="mailto:someone@example.com" class="text-white">info@phineas-soluciones.com</a>
          </p>
        </div>
        <div class="col-12 col-lg-2 pb-4 pb-md-0">
          <h6>Redes Sociales</h6>
          <div class="row text-white fs-3">
            <div class="container">
              <div class="col-12">
                <ul class="navbar-nav flex-row flex-wrap pc-center">
                  <li class="nav-item col-md-auto pe-4">
                    <i role="button" onclick="window.open('https://twitter.com/PhineasCia', '_blank')" class="fab fa-twitter"></i> 
                  </li>
                  <li class="nav-item col-md-auto pe-4">
                    <i class="fab fa-linkedin"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 ">
          <h6 class="pb-1 pb-md-0">Suscríbete para recibir nuestras noticias, perspectivas e invitaciones a eventos.
          </h6>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Ingrese su email" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <button class="btn btn-primary" type="button" id="button-addon2">Enviar</button>
          </div>
        </div>
      </div>

      <div class="row bg-primary text-white pt-4 pt-md-2 pb-4 pb-md-2 pe-4 ps-4 pe-md-5 ps-md-5">
        <div class="col-12 col-lg-2 lh-lg">
          <small role="button" onclick="location.href='politica-de-privacidad.html'">Políticas de privacidad</small>
        </div>
        <div class="col-12 col-lg-2 lh-lg">
          <small role="button" onclick="location.href='terminos-y-condiciones.html'">Términos del servicios</small>
        </div>
        <div class="col-12 col-lg-2 lh-lg">
          <small>Mapa del sitio</small>
        </div>
        <div class="col-12 col-lg-2 lh-lg">
          <small role="button" onclick="location.href='politica-de-cookies.html'">Políticas de Cookies</small>
        </div>
        <div class="col-12 col-lg-2 lh-lg">
          <small>Preferencias de Cookies</small>
        </div>
        <div class="col-12 col-lg-2 lh-lg">
          <small>Políticas de Vulnerabilidad</small>
        </div>
      </div>
      
`;
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

