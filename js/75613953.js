function aula_user(){
	"use strict";
	// CURSO: Uroanálisis: Examen general de orina (uego)
	uego.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("uego").innerHTML;
		nombre.innerHTML = titulo;
		// document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXZ3BkQVdxck81b1U/preview";
		// USANDO VARIABLES GLOBALES PARA EL VIDEO
		document.getElementById("vervideo").src = uego_video;
		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = uego_display;
		// USANDO VARIABLES GLOBALES PARA EL PDF, PPT Y EXAMEN DE CORRESPONDER
		document.getElementById("pdf").href = uego_pdf;
		document.getElementById("ppt").href = uego_ppt;
		document.getElementById("examen").href = uego_examen;

	});
}
window.onload=aula_user();