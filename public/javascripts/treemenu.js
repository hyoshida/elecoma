imagefile = new Array("/images/menu_icon_on.gif", "/images/menu_icon.gif");

image = new Array(imagefile.length);
for(count = 0; count < (imagefile.length - 1); count++){
	image[count] = new Image();
	image[count].src = imagefile[count];
}

function ImgC(id){
	if(window.document.images[id].src.indexOf(imagefile[0]) != -1){
		window.document.images[id].src  = imagefile[1];
	}else{
		window.document.images[id].src  = imagefile[0];
	}
}

function Tree(id){
	if(document.all){
		if(document.all(id).style.display == "block"){
			document.all(id).style.display = "none";
		}else if(document.all(id).style.display == "none"){
			document.all(id).style.display = "block";
		}
	}else if(document.getElementById){
		if(document.getElementById(id).style.display == "block"){
			document.getElementById(id).style.display = "none";
		}else if(document.getElementById(id).style.display == "none"){
			document.getElementById(id).style.display = "block";
		}
	}
}
