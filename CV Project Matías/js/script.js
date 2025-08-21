// Mostrar año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Validación de formulario con jQuery
$(document).ready(function() {
  $("#formulario-contacto").submit(function(event) {
    event.preventDefault();
    const nombre = $("#nombre").val();
    alert("¡Gracias por contactarte, " + nombre + "!");
    $(this)[0].reset(); // limpiar formulario
  });

  // Botón de tema oscuro/claro
  $("#themeToggle").click(function() {
    const currentTheme = $("html").attr("data-bs-theme");
    $("html").attr("data-bs-theme", currentTheme === "light" ? "dark" : "light");
    $(this).text(currentTheme === "light" ? "☀️" : "🌙");
  });
});
