//Shapes.js
//Shapes
function circle(context,x,y,r,fillStyle,strokeStyle,lineWidth) {
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.fillStyle = fillStyle;
	context.strokeStyle = strokeStyle;
	context.fill();
	context.lineWidth =lineWidth;
	context.stroke();
}
function line(context,x1,y1,x2,y2,strokeStyle="rgba(255,255,255,1)",lineWidth) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.strokeStyle = strokeStyle;
	context.lineWidth = lineWidth,
	context.stroke();
}
function rectangle(context,x1,y1,width,height,fillStyle,strokeStyle,lineWidth)
{
	context.strokeStyle=strokeStyle;
	context.lineWidth = lineWidth,
	context.strokeRect(x1,y1,width,height);	
	context.fillStyle=fillStyle;
	context.fillRect(x1,y1,width,height);
}