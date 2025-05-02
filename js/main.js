// Cargar el navbar dinámicamente
function loadNavbar() {
    fetch("partials/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        updateNavbar();
      });
  }
  
  // Función para actualizar el estado del navbar
  function updateNavbar() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    const loginLogoutButton = document.getElementById("login-logout");
  
    if (usuario) {
      loginLogoutButton.innerHTML = `<a href="logout.html">Cerrar sesión</a>`;
    } else {
      loginLogoutButton.innerHTML = `
        <a href="login.html">Iniciar sesión</a> |
        <a href="registro.html">Registro</a>
      `;
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadNavbar);
  