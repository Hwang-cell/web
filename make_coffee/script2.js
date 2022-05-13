function myFunction() {
  document.getElementById("make_coffee_menu").innerHTML = alert("Hello World!");
}
function myHello() {
  document.getElementById("demo2").innerHTML = "Hello World";
}
function Hello() {
  document.getElementById("demo3").innerHTML="Hello world!";
}
function onoff() {
  if(document.getElementById("mandoo").style.display=='none'){
   document.getElementById("mandoo").style.display='block';
 } else {document.getElementById("mandoo").style.display='none';}
}

function call(){
  for(let i=0; i<cars.length; i++){
    alert(cars[i]);
  }
}

function writecar(){
  for(let i=0; i<cars.length; i++){
    document.write(cars[i]);
  }
}

cars =["saab", "volvo", "BMW"];
//alert(cars[0]);
