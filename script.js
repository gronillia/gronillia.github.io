/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var weirdEls = ['https://cdn.glitch.com/4e040d5c-9fe4-41db-a64c-20b51302ee26%2Fgiphy-2.gif?v=1567106816002','https://cdn.glitch.com/4e040d5c-9fe4-41db-a64c-20b51302ee26%2Fgiphy-3.gif?v=1567106820066','https://cdn.glitch.com/4e040d5c-9fe4-41db-a64c-20b51302ee26%2Fgiphy.gif?v=1567106824363'];
var gifStart = false;
      $("#start").on("click", function(event){
        $("#everything").hide("slow");
        gifStart = true;
        $("<p>").text("Click! Click! Click!").addClass("mainText weird color").css("opacity", "0.70").appendTo("body");
      });
      $(".stop").on("click", function(event){
        $("#everything").show("slow");
        gifStart = false;
        $(".weird").remove();
      });

        $("body").on("click", function(event){
          if (gifStart){
          var rand = Math.floor(Math.random()*weirdEls.length);
          console.log("hi");
          $("<img>")
            .attr("src", weirdEls[rand])
            .addClass("weird")
            .attr("position", "absolute")
            .css("top", event.pageY + "px")
            .css("left", event.pageX + "px")
            .appendTo("body");
          }
        });