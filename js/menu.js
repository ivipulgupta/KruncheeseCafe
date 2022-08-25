
/**
@author Zhoha Damani <zdamani0121@conestogac.on.ca>
@student id : 8730121
@Group Number : 9
*/



 /********* Custom function with a parameter to implement tab functionality for menu page**************/

function ShowMenus(req) {
    try {
        
        $(".divLinks a").removeClass("lnkActive"); // remove the active link from the anchor tag
        $(".menus").hide(); // hide all the menu items


        // from the anchor link, we get the value called.
        switch (req) {
        
            case "divBreakfast":
                $("." + req).fadeIn(1000);
                $("#lnkBreakfast").attr("class", "lnkActive");
                break;
            case "divLunch":
                $("." + req).slideDown(1000);
                $("#lnkLunch").attr("class", "lnkActive");
                break;
            case "divDesserts":
                $("." + req).fadeIn(1000);
                $("#lnkDesserts").attr("class", "lnkActive");
                break;
            default:
                $(".menus").show(1000);
                $("#lnkAll").attr("class", "lnkActive");
        }
    }
    catch (err) {
        alert("Opps, something went wrong, please contact the admin for more information. ",err.message);
    }
}


 /****************** reservation form validation ******************/

// when the document is ready
$(document).ready(function () {


// add a datepicker
    $("#datepicker").datepicker({});


 
    // the handler for the click event of a submit button
    $("#reservation-form").submit(
        
        function (event) {
            var isValidValue = true;
            var errorsArray = []; //to store all the errors in an array

            // validating name field
            var nameValue = $("#name").val().trim();
            if (nameValue == "") {
                errorsArray.push("name is required");
                isValidValue = false;
            }
            $("#name").val(nameValue);
            localStorage.setItem("name", nameValue);


        //    validating textbox
            var message = $("#message").val().trim();
            if (message == "") {
                errorsArray.push("message is required");
                isValidValue = false;
            }
            $("#message").val(message);

            // validating email field
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/; //regex validation
            var emailValue = $("#email").val().trim();
            if (emailValue == "") {
                errorsArray.push("email is required");
                isValidValue = false;
            } else if (!emailPattern.test(emailValue)) {
                errorsArray.push("Must be a valid email address");
                isValidValue = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(emailValue);




            var guestsNumber = $("#number-guests");
            if (guestsNumber.val() == "") {
                //If the "Please Select" option is selected display error.
                errorsArray.push("Please select number of guests");
                isValidValue = false;
            }
        




            // validating phone number field
            var phoneNumberPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
            var phoneValue = $("#phone").val().trim();
            if (phoneValue == "") {
                errorsArray.push("phone number is required");
                isValidValue = false;
            } else if (!phoneNumberPattern.test(phoneValue)) {
                errorsArray.push("Must be a valid Phone Number");
                isValidValue = false;
            } else {
                $("#phone").next().text("");
            }
            $("#phone").val(phoneValue);


            // making date a requirement using props
            $("#datepicker").prop('required', true);

            // making textbox a requirement using props
            $("#message").prop('required', true);



            // throw errrors if any
            if (!jQuery.isEmptyObject(errorsArray)) { // check if errrors array is not empty, if so, then throw the error
                alert(errorsArray);
            }

            
            // prevent default action
            if (isValidValue == false) {
                event.preventDefault(); // prevent default action
            }

     
        }
    );
});
