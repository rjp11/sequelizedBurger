// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourIt").on("click", function(event) {
      var id = $(this).attr("id");
      
      var devouredStatus = {
          devoured: true,
      } 

      console.log(devouredStatus);
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredStatus
      }).then(
        function() {
          console.log("changed devoured to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurgerForm").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  