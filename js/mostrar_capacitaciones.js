function mostrar(){
	"use strict";
	ingenieria.addEventListener("click", function(){
		document.getElementById('album_ingenieria').style.display = 'block';
		document.getElementById('album_derecho').style.display = 'none';
		document.getElementById('album_educacion').style.display = 'none';
		document.getElementById('album_salud').style.display = 'none';
		document.getElementById('album_ofimatica').style.display = 'none';
		document.getElementById('album_idiomas').style.display = 'none';
	});
	derecho.addEventListener("click", function(){
		document.getElementById('album_ingenieria').style.display = 'none';
		document.getElementById('album_derecho').style.display = 'block';
		document.getElementById('album_educacion').style.display = 'none';
		document.getElementById('album_salud').style.display = 'none';
		document.getElementById('album_ofimatica').style.display = 'none';
		document.getElementById('album_idiomas').style.display = 'none';
	});
	educacion.addEventListener("click", function(){
		document.getElementById('album_ingenieria').style.display = 'none';
		document.getElementById('album_derecho').style.display = 'none';
		document.getElementById('album_educacion').style.display = 'block';
		document.getElementById('album_salud').style.display = 'none';
		document.getElementById('album_ofimatica').style.display = 'none';
		document.getElementById('album_idiomas').style.display = 'none';
	});
	salud.addEventListener("click", function(){
		document.getElementById('album_ingenieria').style.display = 'none';
		document.getElementById('album_derecho').style.display = 'none';
		document.getElementById('album_educacion').style.display = 'none';
		document.getElementById('album_salud').style.display = 'block';
		document.getElementById('album_ofimatica').style.display = 'none';
		document.getElementById('album_idiomas').style.display = 'none';
	});
	ofimatica.addEventListener("click", function(){
		document.getElementById('album_ingenieria').style.display = 'none';
		document.getElementById('album_derecho').style.display = 'none';
		document.getElementById('album_educacion').style.display = 'none';
		document.getElementById('album_salud').style.display = 'none';
		document.getElementById('album_ofimatica').style.display = 'block';
		document.getElementById('album_idiomas').style.display = 'none';
	});
	idiomas.addEventListener("click", function(){
		document.getElementById('album_ingenieria').style.display = 'none';
		document.getElementById('album_derecho').style.display = 'none';
		document.getElementById('album_educacion').style.display = 'none';
		document.getElementById('album_salud').style.display = 'none';
		document.getElementById('album_ofimatica').style.display = 'none';
		document.getElementById('album_idiomas').style.display = 'block';
	});
}
window.onload=mostrar();