$(document).ready(function() {
  var loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn) {
    var userName = "";
    var userEmail = "";
    if (localStorage.getItem('userFirst') != null)
      userName = localStorage.getItem('userFirst');
    if (localStorage.getItem('userLast') != null)
      userName += (" " + localStorage.getItem('userLast'));
    if (localStorage.getItem('userEmail') != null)
      userEmail = localStorage.getItem('userEmail');
    $("#name").val(userName);
    $("#email").val(userEmail);
  }

  $('#submitBtn').click(function() {
    if (!validateForm()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (localStorage.getItem('userFirst') == null)
        localStorage.setItem('userFirst', $("#name").val());
      if (localStorage.getItem('userEmail') == null)
        localStorage.setItem('userEmail', $('#email').val());
      $('#contForm').submit();
      location.href = $('#subLink').val();
    }
  });

  $('#name').change(function() {
    if ($('#name').val() == '') {
      $('#nameHelp').show();
      $('#nameHelp').removeAttr("hidden");
    }
    else
      $('#nameHelp').hide();
  });

  $('#email').change(function() {
    if (!isValidEmail('#email')) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
    }
    else
      $('#emailHelp').hide();
  });

  $('#phone').change(function() {
    var userPhone = $('#phone').val();
    if (isNaN(parseInt(userPhone)) || userPhone.length != 10) {
      $('#phoneHelp').show();
      $('#phoneHelp').removeAttr("hidden");
    }
    else
      $('#phoneHelp').hide();
  });

  function validateForm() {
    var isValidName = ($('#name').val() != '');
    var validEmail = isValidEmail('#email');
    var userPhone = $('#phone').val()
    var isValidPhone = (!isNaN(parseInt(userPhone)) && userPhone.length == 10);

    if (!isValidPhone) {
      $('#phoneHelp').show();
      $('#phoneHelp').removeAttr("hidden");
      $('#phoneHelp').focus();
    }

    if (!validEmail) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
      $('#email').focus();
    }

    if (!isValidName) {
      $('#nameHelp').show();
      $('#nameHelp').removeAttr("hidden");
      $('#name').focus();
    }

    return (isValidName && validEmail && isValidPhone);
  }

  function isValidEmail(userEmail) {
    var email = $(userEmail).val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
});