//basic syntax is :
  $("selector").action();
  //Examples :
    $(this).hide(); //hides the current Element
    $("p").hide(); // hides all <p> elements.
    $(".test").hide(); // hides all elements with calss ="test"
    $("#test").hide(); // hides all Elements with id = "test"


// the important thing is that the JQuery code must be executed after the page is fully Loaded and therefor we use the ready function

$("document").ready(function() {
  // all JQuery Code goes here
});

//1 Events
//1.1 syntax
  $("p").click(function() {
    // action goes here
  });

  //1.2 common events
    // * mouse events : click, dblclick, mouseenter, mouseleave
    // * Keyboard Events: keypress, keydown, keyup
    // * Form Events: submit, change, focus, blur
    // * Document Events: load, resize, scroll, unload

      //Example:
      $("p").dblclick(function() {
        $(this).hide();
      });

  //1.3 The on() Method :
    //The on() method attaches one or more event handlers for the selected elements.
    //Examples:
      // only one event
      $("p").on("click", function() {
        $(this).hide();
      })
      // multiple Events
      $("div").on({
        mouseenter: function() {
          $(this).css("background-color", "red");
        },

        mouseleave: function() {
          $(this).css("background-color", "lightblue")
        },

        click: function() {
          $(this).hide();
        },
      }

// 2 Effects
    //2.1 common Efects: Hide, Show, Toggle, Slide, Fade, and Animate. WOW!

    //2.2 syntax
      //2.2.1 hide(), show() and toggle()
        $(selector).effect(speed, callback) // speed parameter is optional and can take "fasr" , "slow" or milliseconds
          //Example:
            $("p").hide("slow");
            $("p").show(1000);
            $().toggle("fast"); // toggles between show() and hide()

      //2.2.2 Fading    fadeIn(), fadeOut(), fadeToggle() and fadeTo()
        $(selector).effect(speed, callback); // speed parameter same as hide and show ....
            //Example:
              $("button").click(function() {
                $("#div").fadeIn();
                $("#div").fadeOut(slow);
                $("#div").fadeToggle(1500); // toggles between fadeIn() and fadeOut()
                $("#div").fadeTo(0.5); // the fadeTo() method allows the fading to a given Opacity etween 0 and 1
              });

    //2.2.3 Sliding     slideDown(), slideUp() and slideToggle()
      $(selector).effect(speed, callback); // speed parameter as previously mentioned
        //Example:
          $("button").click(function() {
            $("div").slideUp(slow);
            $("#idb").slideDown();
            $(".klas").slideToggle(1000);
          });

    //2.2.4 Animation animate()
      $(selector).effect({params}, speed, callback);  //the required {params} defines the CSS properties to be animated
      // speed parameter as preciously mentioned

        //Examples:
          //1.Example: basic Example
            $("button").click(function() {
              $("div").animate({left: '250px'});
            });
          //2.Exxample: Manipulate Mutiple Properties
            $("button").click(function() {
              $("div").animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
              });
            });
          //3.Example: Using Relative Values
            $("button").click(function() {
              $("div").animate({
                left: '250px',
                height: '+=150px',
                width: '+=150px'
              });
            });

        //4.Example: Using Predefined Values
          $("button").click(function () {
            $("div").animate({
              height: 'toggle'
            });
          });
        //5.Example: Uses Queue Functionality
          $("button").click(function () {
            var div = $("div");
            div.animate({height: '300px', opacity: '0.4'}, "slow");
            div.animate({width: '300px',  opacity: '0.8'}, "slow");
            div.animate({height: '100px', opacity: '0.4'}, "slow");
            div.animate({width: '100px', opacity: '0.8'}, "slow");
          });

        //2.2.5 stop()
          // this method is supposed to stop the animation before it ends
            $(selector).stop(stopAll, goToEnd); // the parameter stopAll specifies whether also the animation Queue should be cleared or not , Default is false
            // The optional goToEnd parameter specifies whether or not to complete the current animation immediately. Default is false.

        //2.2.6 Method Chaining
          $("div").css("color", "red").slideUp(2000).slideDown(6000);
          // OR
          $("div").css("color", "blue")
                  .slideUp(20000)
                  .slideDown(80000);