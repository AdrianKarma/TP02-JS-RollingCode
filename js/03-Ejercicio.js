let texto = "elegi un boton";

  if (confirm(texto) == true) {
    texto = "Apretaste OK!";
  } else {
    texto = "Cancelaste!";
  }
document.write (texto)