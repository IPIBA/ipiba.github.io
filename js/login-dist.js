function login(){"use strict";document.getElementById("seccion").style.display="none",document.getElementById("aside").style.display="none",enviar.addEventListener("click",function(){function e(){document.getElementById("loging").style.display="none",document.getElementById("seccion").style.display="block",document.getElementById("aside").style.display="block"}function t(){saludo.innerHTML="¡FELICIDADES!",def1.innerHTML="Aquí encontrarás los diplomados y cursos que has adquirido para incrementar tus conocimientos y mejorar tus habilidades profesionales.",def2.innerHTML="Disfrútalos y si tienes alguna sugerencia envíanosla a:",correo.innerHTML="ipibacapacitacion@gmail.com"}function n(){document.getElementById("c1").style.display="none"}function i(){document.getElementById("c2").style.display="none"}function d(){document.getElementById("c3").style.display="none"}function o(){document.getElementById("c4").style.display="none"}function c(){document.getElementById("c5").style.display="none"}function r(){c1_m1.innerHTML="Tema 1: Video del Curso de Especialización.",c1_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXNFFpVXNFYXUyZlU/preview")})}function l(){c2_m1.innerHTML="Tema 1: Video del Curso de Especialización.",c2_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXeXF3OFBldDZGalU/preview")})}function a(){c3_m1.innerHTML="Tema 1: Video del Curso de Especialización.",c3_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXZ3BkQVdxck81b1U/preview")})}function s(){c4_m1.innerHTML="Tema 1: Video del Curso de Especialización.",c4_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")})}function u(){c5_m1.innerHTML="Tema 1: Video del Curso de Especialización.",c5_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXa3BQQ0RmVkZBeXM/preview")})}function m(){document.getElementById("d1").style.display="none"}function v(){document.getElementById("d2").style.display="none"}function g(){document.getElementById("d3").style.display="none"}function E(){d1_m1.innerHTML="Módulo 1: Normatividad en Seguridad y Salud en el Trabajo.",d1_m2.innerHTML="Módulo 2: Liderazgo y Motivación.",d1_m3.innerHTML="Módulo 3: Investigación de Accidentes, Reporte de Incidentes y Acciones Correctivas.",d1_m4.innerHTML="Módulo 4: Ergonomía.",d1_m5.innerHTML="Módulo 5: Metodología de la Investigación Científica.",d1_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXZnAtcVFqczRVTEE/preview")}),d1_m2.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXcE9yU0pYS2JySTQ/preview")}),d1_m3.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXa3BQQ0RmVkZBeXM/preview")}),d1_m4.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXUktlQzJOVkU5THM/preview")}),d1_m5.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","https://drive.google.com/file/d/0B2EsL-JaXOMXVWktakNEb0V2M1E/preview")})}function y(){d2_m1.innerHTML="Módulo 1: Normatividad en Educación Ambiental.",d2_m2.innerHTML="Módulo 2: Historia de la Educación Ambiental.",d2_m3.innerHTML="Módulo 3: Tipos de la Educación Ambiental.",d2_m4.innerHTML="Módulo 4: Metodología de la Educación Ambiental.",d2_m5.innerHTML="Módulo 5: Problemática Ambiental.",d2_m6.innerHTML="Módulo 6: Situación Actual y Perspectivas de la Educación Ambiental.",d2_m7.innerHTML="Módulo 7: Elaboración de Programas de Educación Ambiental",d2_m1.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")}),d2_m2.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")}),d2_m3.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")}),d2_m4.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")}),d2_m5.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")}),d2_m6.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")}),d2_m7.addEventListener("click",function(){var e=document.getElementById("ver_video");e.setAttribute("src","/preview")})}var L="",p=document.getElementById("user").value,M=document.getElementById("password").value.toLowerCase();"42427517"==p&&"legem03"==M?(L="Cristian",e(),titulo.innerHTML=L,t(),r(),l(),a(),s(),u(),E(),y(),tercer_diplomado()):"48152607"==p&&"48152607"==M?(L="Tatiana",e(),titulo.innerHTML=L,t(),n(),i(),d(),o(),c(),E(),v(),g()):"29631432"==p&&"29631432"==M?(L="Lic. Jorge",e(),titulo.innerHTML=L,t(),n(),i(),d(),o(),c(),E(),v(),g()):"43380892"==p&&"43380892"==M?(L="José",e(),titulo.innerHTML=L,t(),n(),i(),d(),o(),c(),E(),v(),g()):"18073684"==p&&"18073684"==M?(L="Lic. Isabel",e(),titulo.innerHTML=L,t(),n(),i(),d(),o(),c(),E(),v(),g()):"45823528"==p&&"45823528"==M?(L="Neli",e(),titulo.innerHTML=L,t(),n(),i(),d(),o(),c(),E(),v(),g()):"20549349"==p&&"20549349"==M?(L="Ing. Edmond",e(),titulo.innerHTML=L,t(),n(),i(),d(),o(),c(),E(),v(),g()):"42160732"==p&&"42160732"==M?(L="Blga. Liz",e(),titulo.innerHTML=L,t(),s(),n(),i(),d(),c(),m(),v(),g()):"42565380"==p&&"42565380"==M?(L="Blgo. Glauco",e(),titulo.innerHTML=L,t(),s(),n(),i(),d(),c(),m(),v(),g()):"31667024"==p&&"31667024"==M?(L="Ing. Alan",e(),titulo.innerHTML=L,t(),u(),n(),i(),d(),o(),m(),v(),g()):"123"==p&&"123"==M?(L="Prueba",e(),titulo.innerHTML=L,t(),r(),m(),v()):"40750328"==p&&"40750328"==M?(L="Judith",e(),titulo.innerHTML=L,t(),r(),l(),a(),s(),u(),E(),y(),tercer_diplomado()):(document.getElementById("verificar").style.display="block",verificar.innerHTML="¡Datos Incorrectos!")})}window.onload=login();