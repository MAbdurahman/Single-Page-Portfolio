/**
  * The Portfolio-Project Scriptsheet
  * author:  MAbdurrahman
  * date:  28 October 2018
  */


/**
 * The Portfolio-Project Scriptsheet
 * author:  MAbdurrahman
 * date:  22 October 2018
 */
/*--------------Script Sheet for Mahdi Abdurrahman Portfolio----------------*/
$(document).ready(function(){

    /** Add smooth scrolling to all links in navigation bar */
    $("#Navigation-bar li a").on('click', function(event) {

        /** Make sure this.hash has a value before overriding default behavior */
        if (this.hash !== "") {
            /** Prevent default anchor click behavior */
            event.preventDefault();

            /* Store hash in variable */
            var hash = this.hash;

            /**
             * Using jQuery's animate() method to add smooth page scroll to sections.  The optional
             * number appears to be 1000 milliseconds it takes to scroll to the specified section.
             */
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){

                /** Add hash (#) to URL when done scrolling (default click behavior) */
                window.location.hash = hash;
            });

        }
    });//end of the event function

    /**Add smooth scrolling to the navbar-brand */
    $("#Logo").on('click', function(event) {

        /** Make sure this.hash has a value before overriding default behavior */
        if (this.hash !== "") {
            /** Prevent default anchor click behavior */
            event.preventDefault();

            /* Store hash in variable */
            var hash = this.hash;

            /**
             * Using jQuery's animate() method to add smooth page scroll to sections.  The optional
             * number appears to be 1000 milliseconds it takes to scroll to the specified section.
             */
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){

                /** Add hash (#) to URL when done scrolling (default click behavior) */
                window.location.hash = hash;
            });

        }
    });//end of the event function






});//end of the ready function

