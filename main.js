name_list_array = [];

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('birthdayimage.jpg', function(Img) {
        block_image_object = Img;
    
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
        top:0,
        left:0
        });
        canvas.add(block_image_object);
        });
        
	
}

function yes(){
    add_name();
	//window.location = "Yes.html";

}

function no() {
    window.location = "no.html";
}
 
function info() {
    window.location = "information.html";
}

function back() {
    window.location = "index.html";
}

function add_name(){
    var htmldata;
    var item = document.getElementById("name").value;
    name_list_array.push(item);
    name_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<name_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + name_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
      document.getElementById("names_div").innerHTML = htmldata;
}