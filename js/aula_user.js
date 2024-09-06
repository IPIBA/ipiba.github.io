function aula_user(){
	"use strict";
	// CURSO: Seguridad y Salud en el Trabajo (sst)
	sst.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		//var titulo = document.getElementById("sst").value;
		let titulo = document.getElementById("sst").innerHTML;
		nombre.innerHTML = titulo;
		//var vervideo = document.getElementById("vervideo");
		//vervideo.setAttribute("src", "https://www.youtube.com/watch?v=n16JoIz5FQs");
		//vervideo.setAttribute("src", "https://drive.google.com/file/d/1gieePR3bFRRqzvvlSNY1uO5z3ApWIIfc/preview");
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1gieePR3bFRRqzvvlSNY1uO5z3ApWIIfc/preview";

		// INSERTANDO EL ENLACE PARA EL VIDEO
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXZ3BkQVdxck81b1U/preview";
		// USANDO VARIABLES GLOBALES PARA EL ENLACE PARA EL VIDEO
		document.getElementById("vervideo").src = sst_video;
		//document.getElementById("vervideo").src="https://www.youtube.com/watch?v=n16JoIz5FQs";

		// MOSTRANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'flex';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = sst_display;

		// INSERTANDO LOS ENLACES A LOS ARCHIVOS RESPECTIVOS DEL PDF Y PPT
		//document.getElementById("pdf").href = "https://drive.google.com/uc?export=download&id=1o2KEo-_xi-XeH3zDbaiLERtpnliaAy8s";
		//document.getElementById("ppt").href = "https://drive.google.com/uc?export=download&id=1o2KEo-_xi-XeH3zDbaiLERtpnliaAy8s";
		// USANDO VARIABLES GLOBALES PARA LOS ENLACES A LOS ARCHIVOS RESPECTIVOS DEL PDF Y PPT
		document.getElementById("pdf").href = sst_pdf;
		document.getElementById("ppt").href = sst_ppt;

		// INSERTANDO EL ENLACE PARA EL EXAMEN
		//document.getElementById("examen").href = "https://docs.google.com/forms/d/e/1FAIpQLSeseG6omFPArSiUI0k0ZDW-nO1McyRx08EFGSil99XJc_Ko0w/viewform?usp=sharing";
		// USANDO VARIABLES GLOBALES PARA EL ENLACE PARA EL EXAMEN
		document.getElementById("examen").href = sst_examen;
	});

	// CURSO DE IDIOMA: Inglés Intermedio (ii)
	// Módulo 1: Inglés Intermedio I
	iim1.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim1").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ii_m1_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m1_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ii_m1_pdf;
		document.getElementById("ppt").href = ii_m1_ppt;
		document.getElementById("examen").href = ii_m1_examen;
	});

	// Módulo 2: Inglés Intermedio II
	iim2.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim2").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ii_m2_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m2_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ii_m2_pdf;
		document.getElementById("ppt").href = ii_m2_ppt;
		document.getElementById("examen").href = ii_m2_examen;
	});

	// Módulo 3: Inglés Intermedio III
	iim3.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim3").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ii_m3_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m3_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ii_m3_pdf;
		document.getElementById("ppt").href = ii_m3_ppt;
		document.getElementById("examen").href = ii_m3_examen;
	});

	// Módulo 4: Inglés Intermedio IV
	iim4.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim4").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ii_m4_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m4_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ii_m4_pdf;
		document.getElementById("ppt").href = ii_m4_ppt;
		document.getElementById("examen").href = ii_m4_examen;
	});

	// Módulo 5: Inglés Intermedio V
	iim5.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("iim5").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ii_m5_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ii_m5_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ii_m5_pdf;
		document.getElementById("ppt").href = ii_m5_ppt;
		document.getElementById("examen").href = ii_m5_examen;
	});





	// DIPLOMADO: Seguridad, Salud Ocupacional y Medio Ambiente (ssoma)
	// Módulo 1: Normatividad en Seguridad y Salud en el Trabajo
	ssomam1.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam1").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m1_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m1_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m1_pdf;
		document.getElementById("ppt").href = ssoma_m1_ppt;
		document.getElementById("examen").href = ssoma_m1_examen;
	});

	// Módulo 2: Prevención de Riesgos Laborales
	ssomam2.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam2").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXSTNPd25vLWZXWTA/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m2_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m2_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m2_pdf;
		document.getElementById("ppt").href = ssoma_m2_ppt;
		document.getElementById("examen").href = ssoma_m2_examen;
	});

	// Módulo 3: Sistema de Gestión de la Seguridad y Salud en el Trabajo
	ssomam3.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam3").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1Yciard-zwBtESjFhTazMuoeWC4HnLydc/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m3_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m3_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m3_pdf;
		document.getElementById("ppt").href = ssoma_m3_ppt;
		document.getElementById("examen").href = ssoma_m3_examen;
	});

	// Módulo 4: Normatividad Ambiental
	ssomam4.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam4").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1yYOwe8LGpNx0qO3R_F4brMClQowYH-36/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m4_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m4_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m4_pdf;
		document.getElementById("ppt").href = ssoma_m4_ppt;
		document.getElementById("examen").href = ssoma_m4_examen;
	});

	// Módulo 5: Metodología de la Investigación Científica
	ssomam5.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam5").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1xO-xi7ULyJRSUToH6SLvwTUcgDUEsKHH/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m5_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m5_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m5_pdf;
		document.getElementById("ppt").href = ssoma_m5_ppt;
		document.getElementById("examen").href = ssoma_m5_examen;
	});

	// Módulo 6: Evaluación del Impacto Ambiental
	ssomam6.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam6").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXb1BKSVdjbVNqalE/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m6_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m6_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m6_pdf;
		document.getElementById("ppt").href = ssoma_m6_ppt;
		document.getElementById("examen").href = ssoma_m6_examen;
	});

	// Módulo 7: Sistema de Gestión Ambiental (ISO 14001:2015)
	ssomam7.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam7").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1KA2qSwCSgh9dTJv9wPgxktlZ5gZhN9XE/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m7_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m7_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m7_pdf;
		document.getElementById("ppt").href = ssoma_m7_ppt;
		document.getElementById("examen").href = ssoma_m7_examen;
	});

	// Módulo 8: Implementación y Auditoria de Sistemas Integrados de Gestión de la Seguridad, Salud Ocupacional y Medio Ambiente
	ssomam8.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam8").innerHTML;
		nombre.innerHTML = titulo;
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXSmxndndodjYyUlU/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m8_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m8_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m8_pdf;
		document.getElementById("ppt").href = ssoma_m8_ppt;
		document.getElementById("examen").href = ssoma_m8_examen;
	});

	// Módulo 9: Salud Ocupacional
	ssomam9.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam9").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXcVp1MFdiUHp0NDA/preview";
		// USANDO VARIABLES GLOBALES PARA AGREGAR EL VIDEO RESPECTIVO
		document.getElementById("vervideo").src = ssoma_m9_video;

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		//document.getElementById('descarga').style.display = 'none';
		// USANDO VARIABLES GLOBALES PARA OCULTAR O MOSTRAR LOS ICONOS
		document.getElementById('descarga').style.display = ssoma_m9_display;

		// USANDO VARIABLES GLOBALES PARA AGREGAR EL PDF, PPT Y EXAMEN CUANDO SE REQUIERA Y MUESTRE EL DISPLAY FLEX ANTERIOR
		document.getElementById("pdf").href = ssoma_m9_pdf;
		document.getElementById("ppt").href = ssoma_m9_ppt;
		document.getElementById("examen").href = ssoma_m9_examen;
	});
}
window.onload=aula_user();