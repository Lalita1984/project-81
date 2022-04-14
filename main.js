canvas = document.getElementById("my_canvas");
 ctx= canvas.getContext("2d");
  

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 143, 430 ,200 , 2*Math.PI);
ctx.stroke();

color="blue"
ctx.beginPath(); 
ctx.strokeStyle = color;  
ctx.lineWidth = 3;
ctx.arc(250,210,40,0,10*Math.PI);
ctx.stroke(); 

color="black"
ctx.beginPath(); 
ctx.strokeStyle = color;  
ctx.lineWidth = 3;
ctx.arc(350,210,40,0,10*Math.PI);
ctx.stroke(); 

color="red"
ctx.beginPath(); 
ctx.strokeStyle = color;  
ctx.lineWidth = 3;
ctx.arc(450,210,40,0,10*Math.PI);
ctx.stroke(); 

color="yellow"
ctx.beginPath(); 
ctx.strokeStyle = color;  
ctx.lineWidth = 3;
ctx.arc(300,260,40,0,10*Math.PI);
ctx.stroke(); 

color="green"
ctx.beginPath(); 
ctx.strokeStyle = color;  
ctx.lineWidth = 3;
ctx.arc(400,260,40,0,10*Math.PI);
ctx.stroke(); 




