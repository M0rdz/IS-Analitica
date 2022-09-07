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

//Boton que regresa al inicio

mybutton = document.getElementById("myBtn");

// mostrarl el boton cuando se hace un scroll de 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// al hacer click regresar al incio
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Loader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})

var getData = function(){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("telefono").value;
  var empresa = document.getElementById("empresa").value;
  var estado = document.getElementById("nombre").value;
  var mensaje = document.getElementById("demo").value;
  console.log(nombre+" "+email+" "+tel+" "+empresa+" "+estado+" "+mensaje);
}