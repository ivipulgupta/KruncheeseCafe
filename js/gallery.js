
   /**
 * @author Vipul Gupta <vgupta0629@conestogac.on.ca>
   @student id : 8760629
   @Group Number : 9
 */ 
    
$(document).ready(function(){

	
	try{
		//Array with this function
		var ArrGalleryImages = new Array();
		ArrGalleryImages.push("1.jpg");
		ArrGalleryImages.push("2.jpg");
		ArrGalleryImages.push("3.jpg");
		ArrGalleryImages.push("4.jpg");
		ArrGalleryImages.push("5.jpg");
		ArrGalleryImages.push("6.jpg");
		ArrGalleryImages.push("7.jpg");
		ArrGalleryImages.push("8.jpg");
		ArrGalleryImages.push("9.jpg");
		ArrGalleryImages.push("10.jpg");
		ArrGalleryImages.push("11.jpg");
		ArrGalleryImages.push("12.jpg");
		
		//Logical AND operator
		if(Array.isArray(ArrGalleryImages) && ArrGalleryImages.length > 0){
			var strGalleryImages = "";
			var strGalleryPopupImages = "";
			
			var index=0;
			//Use While Loop
			while(index < ArrGalleryImages.length){
				//Main Gallery Images
				strGalleryImages += "<div class='column'>";
				strGalleryImages += "<img src='galleryimages/" + ArrGalleryImages[index] + "' onclick='openModal();currentSlide(" + (index + 1) + ")' class='hover-shadow cursor'>";
				strGalleryImages += "</div>";
				
				//Gallery Popup Images
				strGalleryPopupImages += "<div class='mySlides'>";
				//Use a built-in method for the string object method
				strGalleryPopupImages += "<div class='numbertext'>" + (index + 1).toString() + " / " + ArrGalleryImages.length.toString() + "</div>";
				strGalleryPopupImages += "<img src='galleryimages/" + ArrGalleryImages[index] + "' />";
				strGalleryPopupImages += "</div>";
				index++;
			}
			$("#divGalleryImages").html(strGalleryImages);
			$("#divGalleryPopupImages").html(strGalleryPopupImages);
		}
		else{
			$("#divGalleryImages").html("No gallery image found");
		}
	}
	catch(err) {
		document.write(err.message);
	} 
});
function openModal() {
	try{
		document.getElementById("myModal").style.display = "block";
	}
	catch(err) {
		document.write(err.message);
	} 
}

function closeModal() {
	try{
		document.getElementById("myModal").style.display = "none";
	}
	catch(err) {
		document.write(err.message);
	} 
}

$(document).keydown(function(e) {
	try{
		//Use an If … Else If statement
		if (e.keyCode == 27) {
			closeModal();
		} 
		else if (e.keyCode == 37) { // left
			plusSlides(-1);
		} 
		else if (e.keyCode == 39) { // right
			plusSlides(1);
		}
	}
	catch(err) {
		document.write(err.message);
	} 
});

//Global Variable
var slideIndex = 1;
//showSlides(slideIndex);

//function to change slide
function plusSlides(n) {
	try{
		showSlides(slideIndex += n);
	}
	catch(err) {
		document.write(err.message);
	} 	
}

//function for current slider
function currentSlide(n) {
	try{
		showSlides(slideIndex = n);
	}
	catch(err) {
		document.write(err.message);
	} 
}

//function for slider
function showSlides(n) {
	try{
		var i;
		//User document object and his properties
		var slides = document.getElementsByClassName("mySlides");
		//alert(slides.length);
		if (slides.length > 0) {
			//Use a built-in method for the document object
			var captionText = document.getElementById("caption");
			if (n > slides.length) {
				slideIndex = 1
			}
			if (n < 1) {
				slideIndex = slides.length
			}
			//Use For loop
			for(i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slides[slideIndex-1].style.display = "block";
		}
		else{
			//Use a built-in method for the window object
			window.alert("Something went wrong.");
		}
	}
	catch(err) {
		document.write(err.message);
	} 
}