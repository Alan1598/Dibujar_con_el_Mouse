//Dibujar con mouse. 
document.addEventListener("mousedown",dibujarClickPresionado);
document.addEventListener("mouesemove",direccionDibujo);
document.addEventListener("mouseup",detenerDibujo);


// Elementos para poder dibujar en canvas

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var color = document. getElementById("tipo_color"); 
var grosorLinea = document.getElementById("grosor_linea"); 

// variables para inicio de la linea 
 var xi, yi ; 
 var anchoCuadrito = cuadrito.width; 
 var altoCuadrito = cuadrito.height; 

// Contorno del Canvas


dibujarLinea(0, 1, anchoCuadrito, 1, papel);
dibujarLinea(anchoCuadrito-1, 0, anchoCuadrito-1, altoCuadrito, papel);
dibujarLinea(anchoCuadrito, altoCuadrito-1, 0, altoCuadrito-1, papel);
dibujarLinea(1, 0, 1, altoCuadrito, papel);


// Funcion del programa esenario 5 
function dibujarLinea(xInicial, yInicial, xFinal, yFinal, lienzo) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color.value;
    lienzo.lineWidth = grosorLinea.value;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
  }
function dibujarClickPresionado(evento)
{ 
    xi=evento.layerX;
    yi= evento.layerY;
    inicio = 1;

}

function direccionDibujo(evento) 
{
   
    
    if (evento.layerx < anchoCuadrito && evento.layerY < altoCuadrito && inici==1)
    {
        dibujarLinea(xi, yi,evento.layerX, evento.layerY, papel);
        xi=evento.layerX;
        yi= evento.layerY;

    }
}

function detenerDibujo (evento)
 {
    inicio=0; 


 }