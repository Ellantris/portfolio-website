function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
//default tab
document.getElementById("defaultOpen").click();


// changes color of focused labels to relevant maroon shading
function addFocusClass() {
  let formTopLeft = document.querySelector('.form-top-left');
  let formTopRight = document.querySelector('.form-top-right');
  let formBottomCenter = document.querySelector('.form-bottom-center');

  let inputsTopLeft = formTopLeft.querySelectorAll('input');
  let inputsTopRight = formTopRight.querySelectorAll('input');
  let textareaBottomCenter = formBottomCenter.querySelector('textarea');

  inputsTopLeft.forEach(function(input) {
    input.addEventListener('focus', function() {
      formTopLeft.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      formTopLeft.classList.remove('focused');
    });
  });

  inputsTopRight.forEach(function(input) {
    input.addEventListener('focus', function() {
      formTopRight.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      formTopRight.classList.remove('focused');
    });
  });

  textareaBottomCenter.addEventListener('focus', function() {
    formBottomCenter.classList.add('focused');
  });

  textareaBottomCenter.addEventListener('blur', function() {
    formBottomCenter.classList.remove('focused');
  });
}

window.addEventListener('load', function() {
  addFocusClass();
});

