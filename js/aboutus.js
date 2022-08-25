
/**
@author Yashkumar Patel <ypatel9620@conestogac.on.ca>
@student id : 8739620
@Group Number : 9
*/

$(document).ready(function () { //Document ready function


    //accessing XMLHttpRequest using a variable
    var XHR = new XMLHttpRequest();
    //function calling on state change
    XHR.onreadystatechange = function () {

        //checking the state and status. Here readystate 4 is representation of Completetion of operation similarly for status 200.
        if (XHR.readyState == 4 && XHR.status == 200) {
            //Accessing XML data
            var xmlDoc = XHR.responseXML;
            var title = xmlDoc.getElementsByTagName("title")[0].innerHTML;
            var heading = xmlDoc.getElementsByTagName("heading")[0].innerHTML;
            var bio = xmlDoc.getElementsByTagName("bio")[0].innerHTML;
            var data = xmlDoc.getElementsByTagName("data")[0].innerHTML;

            //Appending the data retrived from XML to HTML,
            $("#title").append(title);
            $("#heading").append(heading);
            $("#p1").append(bio);
            $("#p2").append(data);
        }
    }

    //Providing the path for XML file
    XHR.open("GET", "aboutus.xml");
    XHR.send();

    //onLoad animation using Js
    $("#chef-heading").show()
        .css({ 'opacity': 0, 'bottom': '-200px' })
        .animate({ 'opacity': '1', 'bottom': 0 }, 2000);

    $(".fadeIn").addClass("animated animatedFadeInUp fadeInUp");

    //Hover on image and sliding of Text and hyperlink.
    $(".chef-name").mouseenter(function () {
        $(".chef-name .teamlist").show();
    });




});