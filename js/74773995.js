function aula_user(){
	"use strict";
	// CURSO DE IDIOMA: Inglés Intermedio (ii)
	// Módulo 1: Inglés Intermedio I
	iim1.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim1").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA EL VIDEO
		document.getElementById("vervideo").src = ii_m1_video;
		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m1_display;
		// USANDO VARIABLES GLOBALES PARA EL PDF, PPT Y EXAMEN DE CORRESPONDER
		document.getElementById("pdf").href = ii_m1_pdf;
		document.getElementById("ppt").href = ii_m1_ppt;
		document.getElementById("examen").href = ii_m1_examen;
	});

	// Módulo 2: Inglés Intermedio II
	iim2.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim2").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXSTNPd25vLWZXWTA/preview";
		// USANDO VARIABLES GLOBALES PARA EL VIDEO
		document.getElementById("vervideo").src = ii_m2_video;
		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m2_display;
		// USANDO VARIABLES GLOBALES PARA EL PDF, PPT Y EXAMEN DE CORRESPONDER
		document.getElementById("pdf").href = ii_m2_pdf;
		document.getElementById("ppt").href = ii_m2_ppt;
		document.getElementById("examen").href = ii_m2_examen;
	});

	// Módulo 3: Inglés Intermedio III
	iim3.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim3").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1Yciard-zwBtESjFhTazMuoeWC4HnLydc/preview";
		// USANDO VARIABLES GLOBALES PARA EL VIDEO
		document.getElementById("vervideo").src = ii_m3_video;
		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m3_display;
		// USANDO VARIABLES GLOBALES PARA EL PDF, PPT Y EXAMEN DE CORRESPONDER
		document.getElementById("pdf").href = ii_m3_pdf;
		document.getElementById("ppt").href = ii_m3_ppt;
		document.getElementById("examen").href = ii_m3_examen;
	});

	// Módulo 4: Inglés Intermedio IV
	iim4.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim4").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1yYOwe8LGpNx0qO3R_F4brMClQowYH-36/preview";
		// USANDO VARIABLES GLOBALES PARA EL VIDEO
		document.getElementById("vervideo").src = ii_m4_video;
		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m4_display;
		// USANDO VARIABLES GLOBALES PARA EL PDF, PPT Y EXAMEN DE CORRESPONDER
		document.getElementById("pdf").href = ii_m4_pdf;
		document.getElementById("ppt").href = ii_m4_ppt;
		document.getElementById("examen").href = ii_m4_examen;
	});

	// Módulo 5: Inglés Intermedio V
	iim5.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim5").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1xO-xi7ULyJRSUToH6SLvwTUcgDUEsKHH/preview";
		// USANDO VARIABLES GLOBALES PARA EL VIDEO
		document.getElementById("vervideo").src = ii_m5_video;
		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m5_display;
		// USANDO VARIABLES GLOBALES PARA EL PDF, PPT Y EXAMEN DE CORRESPONDER
		document.getElementById("pdf").href = ii_m5_pdf;
		document.getElementById("ppt").href = ii_m5_ppt;
		document.getElementById("examen").href = ii_m5_examen;
	});
}
window.onload=aula_user();