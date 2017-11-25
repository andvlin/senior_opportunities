$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm()) {
      localStorage.setItem('loggedIn', 1);
      localStorage.setItem('userEmail', $("#email").val());
      $('#loginForm').submit();
    }
  });
  $('#clearBtn').click(function() {
    $('#accHelp').hide();
    document.getElementById("loginForm").reset();
  });
  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  function validateForm() {
    var validEmail = isValidEmail();
    var validPass = isValidPass();
    if (!validEmail) {
      $('#accHelp').show();
      $('#accHelp').removeAttr("hidden");
    }
    else
      $('#accHelp').hide();
    return (validEmail && validPass);
  }

  function isValidEmail() {
    var email = $('#email').val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  function isValidPass() {
    var pass = $('#pass').val();
    return pass;
  }
});