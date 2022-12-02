//* Configuracion paginado

backButton = document.getElementById("back") ; 
nextButton = document.getElementById("next");


let i = 1;


function ready() {
    backButton.disabled = true;
  }

  function next() {
    i++;
    if (i == 03) {
      nextButton.disabled = true;
    }
    backButton.disabled = false;
  }

  function back() {
    i--;
    if (i == 1) {
      backButton.disabled = true;
    }
    nextButton.disabled = false;
  }

//* Mostrar casos de exito








    












