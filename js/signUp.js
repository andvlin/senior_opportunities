$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm()) {
      localStorage.setItem('loggedIn', 1);
      localStorage.setItem('userEmail', $("#email").val());
      localStorage.setItem('userFirst', $("#fName").val());
      localStorage.setItem('userLast', $("#lName").val());
      localStorage.setItem('userPass', $("#pass1").val());
      $('#signUpForm').submit();
    }
  });

  $('#clearBtn').click(function() {
    $(".errText").hide();
    document.getElementById("signUpForm").reset();
  });

  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  $('#email').change(function() {
    if (!isValidEmail()) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
    }
    else
      $('#emailHelp').hide();
  });

  $('#pass1').change(function() {
    if (!isValidPass()) {
      $('#passHelp').show();
      $('#passHelp').removeAttr("hidden");
    }
    else
      $('#passHelp').hide();
    if (matchingPass())
      $('$diffPass').hide();
  });

  $('#pass2').change(function() {
    if (!matchingPass()) {
      $('#diffPass').show();
      $('#diffPass').removeAttr("hidden");
    }
    else
      $('#diffPass').hide();
  });


  function validateForm() {
    var validName = isValidName();
    var validEmail = isValidEmail();
    var passMatch = matchingPass();
    var validPass = isValidPass();

    if (!validName) {
      $('#nameHelp').show();
      $('#nameHelp').removeAttr("hidden");
      $('#fName').focus();
      $('#fName').val('');
      $('#lName').val('');
    }
    if (!validEmail) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
      $('#email').focus();
      $('#email').val('');
    }
    if (!passMatch) {
      $('#diffPass').show();
      $('#diffPass').removeAttr("hidden");
      $('#pass1').focus();
      $('#pass1').val('');
      $('#pass2').val('');
    }
    if (!validPass) {
      $('#passHelp').show();
      $('#passHelp').removeAttr("hidden");
      $('#pass1').focus();
      $('#pass1').val('');
    }

    return (validName && validEmail && passMatch && validPass);
  }

  function isValidName() {
    var fName = $('#fName').val();
    var lName = $('lName').val();
    return !(fName == '' && lName == '');
  }

  function isValidEmail() {
    var email = $('#email').val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  function isValidPass() {
    var pass = $('#pass1').val();
    return pass;
  }

  function matchingPass() {
    var pass1 = $('#pass1').val();
    var pass2 = $('#pass2').val();
    return (pass1 == pass2);
  }
});