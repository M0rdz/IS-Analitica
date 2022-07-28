var big_wrapper;
var hamburger_menu;

function declare() {
  big_wrapper = document.querySelector('.big-wrapper');
  hamburger_menu = document.querySelector('.hamburger-menu');
}

declare();

function events() {
  hamburger_menu.addEventListener('click', () => {
    big_wrapper.classList.toggle('active');
  });
}

events();

//Validar Datos del formulario de Contacto

function validate() {
  var text;
  if(document.myForm.nombre.value == ""){
    text = "Rellena este campo obligatorio.";
    document.getElementById("demo").innerHTML = text;
    document.myForm.nombre.focus();
    return false;
  }
  if(document.myForm.email.value == "" ){
    text = "Rellena este campo obligatorio.";
    document.myForm.email.focus() ;
    return false;
  }

  //Validar que el correo contega arrobas y punto
  var emailID = document.myForm.email.value;
  at = emailID.indexOf("@");
  dot = emailID.lastIndexOf(".");
  if (at < 1 || ( dot - at < 2 )) {
  text = "Ingrese un correo valido";
  document.getElementById("demo").innerHTML = text;
  document.myForm.email.focus() ;
  return false;
}
  if(document.myForm.telefono.value == "" || isNaN( document.myForm.telefono.value ) || document.myForm.telefono.value.length != 10 ) { //Validar que se ingresan 10 digitos
    text = "Ingrese un numero valido de 10 digitos";
    document.getElementById("demo").innerHTML = text;
    document.myForm.telefono.focus() ;
    return false;
  }
  if(document.myForm.empresa.value == ""){
    text = "Rellena este campo obligatorio."
    document.getElementById("demo").innerHTML = text;
    document.myForm.empresa.focus();
    return false;
  }
  if(document.myForm.estado.value == ""){
    text = "Rellena este campo obligatorio."
    document.getElementById("demo").innerHTML = text;
    document.myForm.estado.focus();
    return false;
  }
  return( true );
}

// Top Button Function

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Loader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})