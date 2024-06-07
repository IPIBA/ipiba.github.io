function aula_user(){
	"use strict";
	sst.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		//var titulo = document.getElementById("sst").value;
		let titulo = document.getElementById("sst").innerHTML;
		nombre.innerHTML = titulo;
		//var vervideo = document.getElementById("vervideo");
		//vervideo.setAttribute("src", "https://www.youtube.com/watch?v=n16JoIz5FQs");
		//vervideo.setAttribute("src", "https://drive.google.com/file/d/1gieePR3bFRRqzvvlSNY1uO5z3ApWIIfc/preview");
		//document.getElementById("vervideo").src = "https://drive.google.com/file/d/1gieePR3bFRRqzvvlSNY1uO5z3ApWIIfc/preview";
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXZ3BkQVdxck81b1U/preview";
		//document.getElementById("vervideo").src="https://www.youtube.com/watch?v=n16JoIz5FQs";

		// MOSTRANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'flex';

		// INSERTANDO LOS ENLACES A LOS ARCHIVOS RESPECTIVOS DEL PDF Y PPT
		document.getElementById("pdf").href = "https://drive.google.com/uc?export=download&id=1o2KEo-_xi-XeH3zDbaiLERtpnliaAy8s";
		document.getElementById("ppt").href = "https://drive.google.com/uc?export=download&id=1o2KEo-_xi-XeH3zDbaiLERtpnliaAy8s";
	});

	ssomam1.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam1").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/1B4T7RAzsXZNC3ta8uOcYuHcs49pBExWx/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam2.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam2").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXSTNPd25vLWZXWTA/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam3.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam3").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/1Yciard-zwBtESjFhTazMuoeWC4HnLydc/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam4.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam4").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/1yYOwe8LGpNx0qO3R_F4brMClQowYH-36/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam5.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam5").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/1xO-xi7ULyJRSUToH6SLvwTUcgDUEsKHH/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam6.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam6").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXb1BKSVdjbVNqalE/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam7.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam7").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/1KA2qSwCSgh9dTJv9wPgxktlZ5gZhN9XE/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam8.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam8").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXSmxndndodjYyUlU/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});

	ssomam9.addEventListener("click", function(){
		// AGREGANDO EL VIDEO RESPECTIVO
		let titulo = document.getElementById("ssomam9").innerHTML;
		nombre.innerHTML = titulo;
		document.getElementById("vervideo").src = "https://drive.google.com/file/d/0B2EsL-JaXOMXcVp1MFdiUHp0NDA/preview";

		// OCULTANDO LOS ICONOS PARA LA DESCARGA DE LOS PDF Y PPT (CON DISPLAY FLEX COMO EN SU ORIGEN)
		document.getElementById('descarga').style.display = 'none';
	});
}
window.onload=aula_user();