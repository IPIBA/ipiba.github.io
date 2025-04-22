function login(){
	"use strict";
	enviar.addEventListener("click", function(){
		// TOMAR EL VALOR DEL INPUT #user
		var usuario = document.getElementById("user").value;
		// TOMAR EL VALOR DEL INPUT #password
		var contrasena = document.getElementById("password").value;


		// ESTABLECIENDO USUARIO Y CONTRASEÑA PARA CADA PARTICIPANTE
		if (usuario == "42427517" && contrasena == "42427517"){
			// verificar.innerHTML = "¡Datos Correctos!";
			verificar.innerHTML = "¡Datos Correctos!";
			event.preventDefault()
			window.location.href = "../html/aula_user.html"
		}
		else if (usuario == "48381898" && contrasena == "48381898"){
			// verificar.innerHTML = "¡Datos Correctos!";
			verificar.innerHTML = "¡Datos Correctos!";
			event.preventDefault()
			window.location.href = "../html/48381898.html"
		}
		else if (usuario == "74773995" && contrasena == "74773995"){
			// verificar.innerHTML = "¡Datos Correctos!";
			verificar.innerHTML = "¡Datos Correctos!";
			event.preventDefault()
			window.location.href = "../html/74773995.html"
		}
		else if (usuario == "75613953" && contrasena == "75613953"){
			// verificar.innerHTML = "¡Datos Correctos!";
			verificar.innerHTML = "¡Datos Correctos!";
			event.preventDefault()
			window.location.href = "../html/75613953.html"
		}
		else {
			//document.getElementById('verificar').style.display = 'block';
			document.getElementById("user").value="";
			document.getElementById("password").value="";
			verificar.innerHTML = "¡Datos Incorrectos!";
			// alert("Error");
		}
	});
}
window.onload=login();

