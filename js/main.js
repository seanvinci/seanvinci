
// Vars
const $body = $('body');
const $modal = $('.modal');


// Functions

// Main nav control

function toggleNav() {
  if ($body.hasClass('nav-open')) {
    closeNav();
  } else {
    $body.addClass('nav-open clip');
  }
}

function closeNav() {
  $body.removeClass('nav-open clip');
}


$(document).ready(function() {

  // Open and close main nav

  // Toggle main nav open or closed with hamburger button
  $('.main-nav-toggle').click(function() {
    toggleNav();
  });

  // Close nav with ESC key
  $(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
      closeNav();
    }
  });


  // Open and close modals

  // Open modal with modal trigger
  $('.modal-open').click(function() {
    $body.addClass('clip');
    $(this).siblings('.modal').addClass('modal-active');
  });

  // Close modal with close 'x'
  $('.modal-close').click(function() {
    $body.removeClass('clip');
    $(this).parents('.modal').removeClass('modal-active');
  });

  // Close modal with ESC key
  $(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
      $modal.removeClass('modal-active');
    }
  });

});