$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (isValidEmail()) {
      alert("Check your email to reset your password.");
      $("#forgotPassForm").submit();
    }
    else {
      $("#accHelp").show();
      $("#accHelp").removeAttr("hidden");
    }
  });

  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  function isValidEmail() {
    var email = $("#email").val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
});