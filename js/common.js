window.onload=function(){
	var oc1=document.getElementById('c1');
		var ogc1=oc1.getContext('2d');
		ogc1.moveTo(5,0);
		ogc1.bezierCurveTo(0,50,50,80,68,169);
		ogc1.lineWidth=8;
		ogc1.strokeStyle="#FFFFFF";
		ogc1.stroke();
	var oc2=document.getElementById('c2');
		var ogc2=oc2.getContext('2d');
		ogc2.moveTo(5,173);
		ogc2.bezierCurveTo(100,10,200,150,330,0);
		ogc2.lineWidth=8;
		ogc2.strokeStyle="#FFFFFF";
		ogc2.stroke();
	var oc3=document.getElementById('c3');
		var ogc3=oc3.getContext('2d');
		ogc3.moveTo(0,8);
		ogc3.bezierCurveTo(150,0,0,40,378,46);
		ogc3.lineWidth=8;
		ogc3.strokeStyle="#FFFFFF";
		ogc3.stroke();
	var oc4=document.getElementById('c4');
		var ogc4=oc4.getContext('2d');
		ogc4.moveTo(10,12);
		ogc4.bezierCurveTo(10,80,300,0,375,200);
		ogc4.lineWidth=8;
		ogc4.strokeStyle="#FFFFFF";
		ogc4.stroke();
	var oc5=document.getElementById('c5');
		var ogc5=oc5.getContext('2d');
		ogc5.moveTo(155,6);
		ogc5.bezierCurveTo(160,100,30,0,70,243);
		ogc5.lineWidth=8;
		ogc5.strokeStyle="#FFFFFF";
		ogc5.stroke();
	var oc6=document.getElementById('c6');
		var ogc6=oc6.getContext('2d');
		ogc6.moveTo(32,110);
		ogc6.bezierCurveTo(160,100,30,0,300,40);
		ogc6.lineWidth=8;
		ogc6.strokeStyle="#FFFFFF";
		ogc6.stroke();
}