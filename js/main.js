
// Vars
var $body = $('body');


// Functions

// Main nav

// Open and close main navigation
function toggleNav() {
  if ($body.hasClass('nav-open')) {
    $body.removeClass('nav-open clip');
  } else {
    $body.addClass('nav-open clip');
  }
}

function resetNav() {
  $body.removeClass('nav-open clip');
}

function openProjectModal() {
  if ($body.hasClass('project-modal')) {
    $body.removeClass('project-modal clip');
  } else {
    $body.addClass('project-modal clip');
  }
}

$(document).ready(function() {

  // Header Navigation

  // Open or close navigation when hamburger is clicked
  $('.main-nav-trigger').click(function() {
    toggleNav();
  });

  // Close navigation when ESC key is used
  $(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
      resetNav();
    }
  });

  // Close navigation when anywhere in the webpage is clicked...
  $('.nav-overlay').click(function() {
    resetNav();
  });

});