$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#mainlogo').css("width", "300");
            $('.quickinfo').fadeOut(250);
            $('.navbarx').css("background", "#14121360");
            $('#footer').fadeIn(250);

        } else {
            $('#mainlogo').css("width","400");
            $('.quickinfo').fadeIn(250);
            $('.navbarx').css("background", "#14121300");
            $('#footer').fadeOut(250);
        }
    });
    if ($(this).scrollTop() > 40) {
        $('#mainlogo').css("width", "300");
        $('.quickinfo').fadeOut(250);
        $('.navbarx').css("background", "#14121360");
        $('#footer').fadeIn(250);

    } else {
        $('#mainlogo').css("width","400");
        $('.quickinfo').fadeIn(250);
        $('.navbarx').css("background", "#14121300");
        $('#footer').fadeOut(250);
    }
    now = new Date
    theYear=now.getYear()
    if (theYear < 1900)
    {
        theYear=theYear+1900
    }
    $("#footer").html("&copy; " + theYear + " ANNDA Damiani GIO");

    
    $('.media, .exhibitions, .collection, .aboutus,.contact').hide();
    /*home*/
    $('.homebtn').on('click',
    function() {
        $('.contact, .media, .exhibitions, .collection, .aboutus').fadeOut(250);
        $('.home').fadeIn(250);
        $('.contactbtn, .mediabtn, .exhibitionsbtn, .collectionbtn, .aboutusbtn').removeClass("active");
        $('.homebtn').addClass("active");
    });
    /*contact*/
    if(window.location.search == "contact")
    {
        $('.home, .media, .exhibitions, .collection, .aboutus').fadeOut(250);
        $('.contact').fadeIn(250);
        $('.homebtn, .mediabtn, .exhibitionsbtn, .collectionbtn, .aboutusbtn').removeClass("active");
        $('.contactbtn').addClass("active");
    }
    $('.contactbtn').on('click',
      function() {
        $('.home, .media, .exhibitions, .collection, .aboutus').fadeOut(250);
        $('.contact').fadeIn(250);
        $('.homebtn, .mediabtn, .exhibitionsbtn, .collectionbtn, .aboutusbtn').removeClass("active");
        $('.contactbtn').addClass("active");
      });

     /*media*/

     $('.mediabtn').on('click',
     function() {
       $('.home, .contact, .exhibitions, .collection, .aboutus').fadeOut(250);
       $('.media').fadeIn(250);
       $('.homebtn, .contactbtn, .exhibitionsbtn, .collectionbtn, .aboutusbtn').removeClass("active");
       $('.mediabtn').addClass("active");
     });

    /*aboutus*/

     $('.aboutusbtn').on('click',
        function() {
           $('.home, .contact, .exhibitions, .collection, .media').fadeOut(250);
           $('.aboutus').fadeIn(250);
           $('.homebtn, .mediabtn, .exhibitionsbtn, .collectionbtn, .contactbtn').removeClass("active");
           $('.aboutusbtn').addClass("active");
    });
    /*collection*/
    $('.collectionbtn').on('click',
        function() {
           $('.home, .contact, .exhibitions, .media, .aboutus').fadeOut(250);
           $('.collection').fadeIn(250);
           $('.homebtn, .mediabtn, .exhibitionsbtn, .contactbtn, .aboutusbtn').removeClass("active");
           $('.collectionbtn').addClass("active");
    });
    /*exhibitions*/
    $('.exhibitionsbtn').on('click',
        function() {
           $('.home, .contact, .media, .collection, .aboutus').fadeOut(250);
           $('.exhibitions').fadeIn(250);
           $('.homebtn, .mediabtn, .contactbtn, .collectionbtn, .aboutusbtn').removeClass("active");
           $('.exhibitionsbtn').addClass("active");
    });
    $(document).ready(function(){
        $('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').remove();
        });
});