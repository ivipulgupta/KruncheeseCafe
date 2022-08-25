/**
@author  Damanpreet Singh Grewal  <dgrewal2500@conestogac.on.ca>
@student id : 8752500
@Group Number : 9
*/


"use strict";


  
$(document).ready(() => {

 
  //After DOM is loaded

/****************** Slide Show on Home Page ******************/
 
  var counter = 1;

  //Create an array for Slide Show Text
  var slideShowText = [];
  slideShowText[1] =  "<p><span>HUNGRY?!</span><br>GOOD,we are here<br> to <span>serve</span> you.</p>";
  slideShowText[2] =  "<p><span>QUALITY</span><br>Food,is Waiting...<br>for<span>You.</span></p>";
  slideShowText[3] =  "<p><span>WE</span><br>Have Range of<br> <span>Varities</span> for you.</p>";
  slideShowText[4] =  "<p><span>HUNGRY?!</span><br>GOOD,we are here<br> to <span>serve</span> you.</p>";
  slideShowText[5] =  "<p><span>QUALITY</span><br>Food,is Waiting...<br>for<span>You.</span></p>";
  slideShowText[6] =  "<p><span>WE</span><br>Have Range of<br> <span>Varities</span> for you.</p>";
  slideShowText[7] =  "<p><span>HUNGRY?!</span><br>GOOD,we are here<br> to <span>serve</span> you.</p>";
  slideShowText[8] =  "<p><span>QUALITY</span><br>Food,is Waiting...<br>for<span>You.</span></p>";

  //Function that performs the Slide Show
  var slideShow = function () {
    if (counter < 8) {
      counter++;
    } else {
      counter = 1;
    }

    //Hide the Current Slide and replace it with the next Slide
    $("#banner-slide-show").fadeOut("300", function () {
      $(this).css(
        "background-image",
        "url('images/slide-0" + counter + ".jpg')"
      );
      $(this).fadeIn();
    });
    //Hide the Banner Text and replace it with the next element stored in slideShowText Array
    $("#banner-text").fadeOut("300", function () {
      $(this).html(slideShowText[counter]);
      $(this).fadeIn();
    });
  };

  //Run the Slide Show after every 3 secs
  setInterval(slideShow, 3000);

  
  /****************** Home Page About Us Image Swap ******************/
  $("#about_image_list a").each((index, link) => {
    const image = new Image();
    image.src = link.href;
  });
  // attach event handlers for links
  $("#about_image_list a").click((evt) => {
    // get clicked <a> tag
    const link = evt.currentTarget;
    // swap image
    $("#about_us_image").attr("src", link.href); 
    // cancel the default action of the link
    evt.preventDefault(); 
  });
  // move focus to first thumbnail
  $("li:first-child a").focus();

  

  /****************** Best Selling Items Pagination ******************/

  const galleryItems = document.querySelector(".tm-gallery").children;   //Get all the Child Divs of the main div of Best Selling Items
  const itemsPerPage = 12;  //User defined value - how many items you want to have on the page
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage); //Calculate how many total no of pages will be there 
  const pageAttribute = "data-page";    //Attribute to set in anchor tag to show which Page# it is in a tag

  //This Function will create the anchor Tags 
  function setPagination(currentPage) {
    for (let i = 1; i <= totalPages; i++) {
      var pager = "";

      if (currentPage == i) {
        pager = $(
          '<a href="javascript:void(0);" class="active tm-paging-link" ' +
            pageAttribute +
            '="' +
            i +
            '"></a>'
        );
      } else {
        pager = $(
          '<a href="javascript:void(0);" class="tm-paging-link" ' +
            pageAttribute +
            '="' +
            i +
            '"></a>'
        );
      }

      //Set the Page Number 1,2,3 etc
      pager.html(i);

      //if that a link is clicked , remove the active class from the others and add only to <a> tag that was clicked
      pager.click(function () {
        $(".tm-paging-link").removeClass("active");
        $(this).addClass("active");
        var page = $(this).attr(pageAttribute);
        showItems(page);
      });

      //Append the updated anchor tags to the document
      pager.appendTo($(".tm-paging"));
    }
  }

  //This Function will show the items on the page when any anchor tag is clicked
  function showItems(currentPage) {
    for (let i = 0; i < galleryItems.length; i++) {
      galleryItems[i].classList.remove("show");
      galleryItems[i].classList.add("hide");

      if (
        i >= currentPage * itemsPerPage - itemsPerPage &&
        i < currentPage * itemsPerPage
      ) {
        galleryItems[i].classList.remove("hide");
        galleryItems[i].classList.add("show");
      }
    }
  }

  //For Initial load call this function to create anchor tags and keep the focus on the first anchor tag
  setPagination(1);

  //On Initial load show the items as they would be shown when the first anchor tag is clicked
  showItems(1);

  /****************** Banner Text using IIFE Starts ******************/

  (function bannerHeading2() {
    var iife1 = document.createElement("h2"); //create an h2 element
    iife1.classList.add("banner-iffe-h2");    //Add a class to the newly created h2 element 
    iife1.innerHTML = "Food For Good Mood!";  //set the html test of the new h2 element 
    document
      .getElementsByClassName("section-large-text-inner")[0]    
      .appendChild(iife1);          //append it to the empty div 
  })(); /*IIFE function*/

  (function bannerHeading3() {
    var iife2 = document.createElement("h3");  //create an h3 element
    iife2.classList.add("banner-iffe-h3");    //Add a class to the newly created h3 element 
    iife2.innerHTML = "Did someone say pizza?"; //set the html test of the new h3 element 
    document
      .getElementsByClassName("section-large-text-inner")[0]
      .appendChild(iife2);         //append it to the parent div 
  })(); /*IIFE function*/

  (function bannerParagraph() {
    var iife3 = document.createElement("p");  //create an p element
    iife3.classList.add("banner-iffe-p");   //Add a class to the newly created p element 
    iife3.innerHTML =
    "Our food brings people together on many different levels. It’s nourishment of the soul and body it's truly LOVE <3."; //set the html test of the new p element 
    document
      .getElementsByClassName("section-large-text-inner")[0]
      .appendChild(iife3);     //append it to the parent div 
  })(); /*IIFE function*/

  /****************** Restaraunt Timings ******************/

  var restaurantTimings = function () {

    //Using Date Object get the date, month , year , hours and the day
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var clock = today.getHours();
    var day = today.getDay();
    console.log("Today's Date is: " + today);

    //Append the date and the static content to the empty div
    $("#openingtimecontent").append(
      "<h3>Restaurant Timings for :&nbsp;&nbsp;" + date + "/" + month + "/" + year + "</h3>"
    );
    $("#openingtimecontent").append(
      "<p>For Monday to Friday - 10AM to 10PM</p><p>For Saturday and Sunday - 10AM to 11PM</p>"
    );

    
    //check if the restaurant is closed or open based on the time and day of the week then display the same on the GUI
    if (day == 6 || day == 0) {
      if (clock > 23 || clock < 10) {
        $("#openingtimecontent").append(
          "<p>The restaurant is <span><b>CLOSED NOW</b></span></p>"
        );
      } else {
        $("#openingtimecontent").append(
          "<p>The restaurant is <span><b>OPEN NOW</b></span></p>"
        );
      }
    } else {
      if (clock > 22 || clock < 10) {
        $("#openingtimecontent").append(
          "<p>The restaurant is <span><b>CLOSED NOW</b></span></p>"
        );
      } else {
        $("#openingtimecontent").append(
          "<p>The restaurant is <span><b>OPEN NOW</b></span></p>"
        );
      }
    }
  };

  //Run the Above Function
  restaurantTimings();

  /****************** Testimonials using a Carousel ******************/

  const delay = 3000; //ms

  const slides = document.querySelector(".slides");   //get the parent element class="slides" that holds all the testimonial Images
  const slidesCount = slides.childElementCount;   //get the no of the child elements of the parent 
  const maxLeft = (slidesCount - 1) * 100 * -1;   //maxLeft was calculated on hit and trial basis and eventually this formula was derived

  let current = 0;

  //FUnction that will change the slide to the next or the previous one if you pass true or false as input 
  function changeSlide(next = true) {
    if (next) {
      current += current > maxLeft ? -100 : current * -1; //find how many pixels the slides left Property needs to move if we want to go the next slide
    } else {
      current = current < 0 ? current + 100 : maxLeft;  //find how many pixels the slides left Property needs to move if we want to go to the previous slide
    }

    slides.style.left = current + "%";  //set the value of the left property in the css for the slides element 
  }

  //Run the slide show of testimonials using a timer by calling the above fn after a delay of 3 secs
  let autoChange = setInterval(changeSlide, delay);

  //On restart just reset the setInterval and start the timer again
  const restart = function () {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
  };

  //Event Handler for the next Slide Button
  document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();
    restart();
  });

   //Event Handler for the previous Slide Button
  document.querySelector(".prev-slide").addEventListener("click", function () {
    changeSlide(false);
    restart();
  });

  /****************** Menu Specials ******************/

  const specialDivs = $(".specials").children(); //Get all the special menu child items (includes all divs - breakfast , Lunch and dinner)

  //Event handler for the click event of the breakfast <a> tag
  $("#select_breakfast").click(function (evt) {
    var divId = "";

    //Iterate over the array of elements 
    for (let i = 0; i < specialDivs.length; i++) {

      //get the value of the id attribute
      divId = specialDivs[i].getAttribute("id");

      //check if its not equal to breakfast
      if (divId != "breakfast") {
        //Add the class 'Hide'
        specialDivs[i].classList.add("hide");
      } else {
         //remove the class 'Hide'
        specialDivs[i].classList.remove("hide");
      }
    }
    evt.preventDefault();
  });

  //Event handler for the click event of the Lunch <a> tag
  $("#select_lunch").click(function (evt) {
    
    var divId = "";

    //Iterate over the array of elements 
    for (let i = 0; i < specialDivs.length; i++) {
       //get the value of the id attribute
      divId = specialDivs[i].getAttribute("id");

      //check if its not equal to lunch
      if (divId != "lunch") {
        //Add the class 'Hide'
        specialDivs[i].classList.add("hide");
      } else {
         //remove the class 'Hide'
        specialDivs[i].classList.remove("hide");
      }
    }
    evt.preventDefault();
  });
  //Event handler for the click event of the Dinner <a> tag
  $("#select_dinner").click(function (evt) {
    var divId = "";

    //Iterate over the array of elements 
    for (let i = 0; i < specialDivs.length; i++) {
      //get the value of the id attribute
      divId = specialDivs[i].getAttribute("id");

      //check if its not equal to lunch
      if (divId != "dinner") {
         //Add the class 'Hide'
        specialDivs[i].classList.add("hide");
      } else {
         //remove the class 'Hide'
        specialDivs[i].classList.remove("hide");
      }
    }
    evt.preventDefault();
  });

  /****************** Newsletter Popup in Footer ******************/

  const newsBtn = $(".btn-news");
  //Event handler for the click event of the Submit Button in the newsletter
  $(newsBtn).click(function (evt) {

    //get the user input email and validate using RegEx
    const emailNews = $("#email_news").val();
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (emailNews == "" || !emailPattern.test(emailNews)) {
      //if validations fails display an error message 
      alert("Pleasse enter a Valid Email Address.");
    } else {
      //Dipslay the pop up by changing its css - display property to block
      $("#pop-email").text(emailNews);  //display the email entered by user in the pop up
      $("#popup").css("display", "block");
    }

    evt.preventDefault();
  });

  const closePopup = $("#close");

  $(closePopup).click(function (evt) {
    $("#popup").css("display", "none");
    evt.preventDefault();
  });

  /****************** Clock in Footer ******************/

  //Using the Date object get the Date and Time 
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = dd + "-" + mm + "-" + yyyy;

  document.getElementById("myDateDisplay").innerHTML = today;

  /****** Scroll to Top Button ******/


  //Event handler on the scroll event of the window Object 
  $(window).scroll(function () {

    //Check if the user has scrolled more than 300px from the top of the page 
    if ($(this).scrollTop() >= 300) {

      //Then display the to-top fragment identifier 
      $(".to-top").fadeIn(200);
    } else {
      //else hide the to-top fragment identifier 
      $(".to-top").fadeOut(200);
    }
  });

  //Animate the body and html to display the scroll to top movement with a delay of 3 secs 
  $(".to-top").click(function () {
    $(".body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

 
 

  /****************** jQuery UI Widget For Feedback Button in Footer ******************/
  $(function () {
    $("#nonmodal2").dialog({
      minWidth: 600,
      minHeight: "auto",
      autoOpen: false,
      dialogClass: "custom-ui-widget",
      position: {
        my: "center",
        at: "left+900",
      },
    });

    //Open or close the dialog Box when the button is clicked 
    $("#dialog2").click(function () {
      if ($("#nonmodal2").dialog("isOpen") === true) {
        $("#nonmodal2").dialog("close");
      } else {
        $("#nonmodal2")
          .dialog("open")
          .prev()
          .css("background", "#337AB7")
          .css("color", "#eee");
      }
    });
  });

  /* code for the character count textarea */
  $(document).ready(function () {
    var myMaxLength = 100, // textarea maxlength     
      characterCounter = $("#characterCounter"); //the current character count

    /* initialise the character count area */
    $("#the-textarea").attr("maxlength", myMaxLength);
    $("#characterCounter").text(myMaxLength);
    $("#maximum").text(myMaxLength);

    /* respond to each keydown by incrementing or decrementing the current character count */
    $("textarea").keydown(function () {
      var characterCount = $(this).val().length,
        charactersRemaining = 0;
      charactersRemaining = myMaxLength - characterCount;
      characterCounter.text(charactersRemaining);    
      
    });
  });

  /****************** Recipe Generator API ******************/
  const recipeBtn = $("#recipe"); 

  //Event Handler for the generate Recipe Button
  $(recipeBtn).click(function (evt) {

    $("#display").remove();  //remove the exiting div element below the generate button 
    var divDisplay = document.createElement("div"); //create new div element 
    divDisplay.classList.add("display");  //add the class display to it 
    divDisplay.setAttribute("id","display");  //set the value of id of the new div to display

    document.getElementById("box-with-image").appendChild(divDisplay);  //append to a parent div that holds the image 

    var url = "https://www.themealdb.com/api/json/v1/1/random.php"; //3rd party API to get diff recipes 

    //get the data from the json
    $.getJSON(url, function (data) {
    
      //Store the object literal in the json in a new object 
      var output = data.meals;

      //Iterate over the objec to access its properties which are the various values of random recipes and print them on the UI using innerHtml
      for (var i = 0; i < output.length; i++) {
        divDisplay.innerHTML += `<img src="${output[i].strMealThumb}" alt="${output[i].strMeal}"> <br> 
        <p>Dish Name: <span><b>${output[i].strMeal}</b></span></p> <br>
        <p>Category: <span> ${output[i].strCategory}</span></p> <br>
        <p>Source:   <a href="${output[i].strSource}">${output[i].strSource}</a><p>`;
      }
    });
  });

  /****************** NAV Bar Toggle Menu ******************/    //Coded by Zhoha Damani

  const navToggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".links");

  navToggle.addEventListener("click", function () {
  console.log(links.classList);
  links.classList.toggle("show-links");
  
}); 



}); //Ready End
