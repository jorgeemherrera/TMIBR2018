//Smooth Animation | Author: Jorge Eliecer Munoz Herrera
//Resource: Codepen
var canvas = document.getElementById('canvas'),
    header = document.querySelector('header'),
    content = document.getElementById('content'),
    ctx = canvas.getContext('2d');

function mouseIsOn(event) {

    content.style.transition = 'none';
    content.style.top = -(event.clientY / 20) + 'px';
    content.style.left = -(event.clientX / 20) + 'px';
}

function mouseIsOut(event) {
    content.style.transition = 'all 2s ease-in-out';
    content.style.top = '0px';
    content.style.left = '0px';
}


header.addEventListener('mousemove', mouseIsOn);
header.addEventListener('mouseout', mouseIsOut);


ctx.lineWidth = 3;
ctx.beginPath();
ctx.strokeStyle = '#039BE5';
ctx.moveTo(100, 100);
ctx.lineTo(125, 100);
ctx.lineTo(112, 125);
ctx.closePath();
ctx.stroke();

//Yellow Circle
ctx.beginPath();
ctx.strokeStyle = '#EDDD09';
ctx.arc(200,90,10,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#F57F17';
ctx.moveTo(250, 150);
ctx.lineTo(275, 150);
ctx.lineTo(275, 175);
ctx.lineTo(250, 175);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#E040FB';
ctx.moveTo(500, 300);
ctx.lineTo(525, 300);
ctx.lineTo(512, 325);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#FF80AB';
ctx.moveTo(750, 250);
ctx.lineTo(775, 250);
ctx.lineTo(775, 275);
ctx.lineTo(750, 275);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#00BCD4';
ctx.moveTo(1000, 150);
ctx.lineTo(1025, 150);
ctx.lineTo(1012, 175);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#00BCD4';
ctx.moveTo(500, 250);
ctx.lineTo(525, 250);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#EEFF41';
ctx.moveTo(1100, 250);
ctx.lineTo(1125, 250);
ctx.closePath();
ctx.stroke();

//Pink Circle
ctx.beginPath();
ctx.strokeStyle = '#EDDD09';
ctx.arc(400,150,20,0,2*Math.PI);
ctx.stroke();
