$(document).ready(function() {
  // Function to handle checkbox change event
  $(".filters input[type='checkbox']").on("change", function() {
    var difficulty = $(this).attr("id").split("-")[0]; // Get the difficulty level from the checkbox ID
    filterProblems(difficulty); // Call the filterProblems function with the selected difficulty
  });
  // Function to filter problems based on the selected difficulty
function filterProblems(difficulty) {
  $(".problem-list").addClass("loading"); // Add loading class to show loading effect
  $(".problem").hide(); // Hide all problems

  setTimeout(function() {
    if ($("#" + difficulty + "-filter").is(":checked")) {
      // If the checkbox is checked
      $(".problem[data-difficulty='" + difficulty + "']").fadeIn(); // Show only the problems with the selected difficulty
    } else {
      $(".problem").fadeIn(); // Show all problems if no checkboxes are selected
    }

    $(".problem-list").removeClass("loading"); // Remove loading class
  }, 1000); // Add a delay of 1 second for the loading effect (adjust as needed)
}
});




