function limpiar(){
	"use strict";
	user.addEventListener("click", function(){
		document.getElementById("user").value="";
		//document.getElementById('verificar').style.display = 'none';
		//document.getElementById("verificar").value="";
		//verificar.innerHTML = "¡Datos Incorrectos!";
		verificar.innerHTML = "";
	});
	password.addEventListener("click", function(){
		document.getElementById("password").value="";
		//document.getElementById('verificar').style.display = 'none';
		//document.getElementById("verificar").value="";
		//verificar.innerHTML = "¡Datos Incorrectos!";
		verificar.innerHTML = "";
	});
}
window.onload=limpiar();
