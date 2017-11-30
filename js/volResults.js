$(document).ready(function() {

 $('#contactModalArt').bind('show',function() {
    console.log("HELLO");
    var loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      var userName = localStorage.getItem("userFirst") + "" + localStorage.getItem("userLast");
      var userEmail = localStorage.getItem("userEmail");
      $("#nameArt").val(userName);
      $("#emailArt").val(userEmail);
    }
  });




  $('#submitArtBtn').click(function() {
    if (!validateArtForm()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      $('#contactFormArt').submit();
      location.href = "sub/artSub.html";
    }
  });

  $('#submitCatBtn').click(function() {
    if (!validateCatForm()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      $('#contactFormCat').submit();
      location.href = "sub/catSub.html";
    }
  });

  $('#submitRabBtn').click(function() {
    if (!validateRabForm()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      $('#contactFormRab').submit();
      location.href = "sub/rabSub.html";
    }
  });

  $('#saveArtBtn').click(function() { 
    if (!loggedIn)
      $('#saveModal').modal("show");
    else {
      for (var i = 1; i < 6; i++) {
        var savedItem = localStorage.getItem("title" + i.toString());  
        if (!savedItem) {
            localStorage.setItem("title" + i.toString(), "Art Program for Homeless Teens/ Youths Thursday Afternoons");
            localStorage.setItem("img" + i.toString(), "images/art.jpg");
            localStorage.setItem("more" + i.toString(), "list/art.html");
            localStorage.setItem("cont" + i.toString(), "cont/artCont.html");
            $("#saveArtBtn").text("Saved");
            break;
        }
      }
    }
    $("#saveArtBtn").prop("disabled",true);
  });

  $('#saveCatBtn').click(function() {
    if (!loggedIn)
      $('#saveModal').modal("show");
    else {
      for (var i = 1; i < 6; i++) {
        var savedItem = localStorage.getItem("title" + i.toString());
        if (!savedItem) {
          localStorage.setItem("title" + i.toString(), "Cat Shelter Care");
          localStorage.setItem("img" + i.toString(), "images/cat.png");
          localStorage.setItem("more" + i.toString(), "list/cat.html");
          localStorage.setItem("cont" + i.toString(), "cont/catCont.html");
          $("#saveCatBtn").text("Saved");
          break;
        }
      }
    }
    $("#saveCatBtn").prop("disabled",true);
  });

  $('#saveRabBtn').click(function() {
    if (!loggedIn)
      $('#saveModal').modal("show");
    else {
      for (var i = 1; i < 6; i++) {
        var savedItem = localStorage.getItem("title" + i.toString());
        if (!savedItem) {
          localStorage.setItem("title" + i.toString(), "Adoption Event Coordinator - Offsite Events");
          localStorage.setItem("img" + i.toString(), "images/rabbit.jpg");
          localStorage.setItem("more" + i.toString(), "list/rabbit.html");
          localStorage.setItem("cont" + i.toString(), "cont/rabbitCont.html");
          $("#saveRabBtn").text("Saved");
          break;
        }
      }
    }
    $("#saveRabBtn").prop("disabled",true);
  });

  $('#nameArt').change(function() {
    if ($('#nameArt').val() == '') {
      $('#nameHelp').show();
      $('#nameHelp').removeAttr("hidden");
    }
    else
      $('#nameHelp').hide();
  });

  $('#emailArt').change(function() {
    if (!isValidEmail('#emailArt')) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
    }
    else
      $('#emailHelp').hide();
  });

  $('#phoneArt').change(function() {
    var userPhone = $('#phoneArt').val();
    if (isNaN(parseInt(userPhone)) || userPhone.length != 10) {
      $('#numHelp').show();
      $('#numHelp').removeAttr("hidden");
    }
    else
      $('#numHelp').hide();
  });

  $('#nameCat').change(function() {
    if ($('#nameCat').val() == '') {
      $('#nameHelp').show();
      $('#nameHelp').removeAttr("hidden");
    }
    else
      $('#nameHelp').hide();
  });

  $('#emailCat').change(function() {
    if (!isValidEmail('#emailCat')) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
    }
    else
      $('#emailHelp').hide();
  });

  $('#phoneCat').change(function() {
    var userPhone = $('#phoneCat').va();
    if (isNaN(parseInt(userPhone)) || userPhone.length != 10) {
      $('#numHelp').show();
      $('#numHelp').removeAttr("hidden");
    }
    else
      $('#numHelp').hide();
  });

  $('#nameRab').change(function() {
    if ($('#nameRab').val() == '') {
      $('#nameHelp').show();
      $('#nameHelp').removeAttr("hidden");
    }
    else
      $('#nameHelp').hide();
  });

  $('#emailRab').change(function() {
    if (!isValidEmail('#emailRab')) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
    }
    else
      $('#emailHelp').hide();
  });

  $('#phoneRab').change(function() {
    var userPhone = $('#phoneRab').va();
    if (isNaN(parseInt(userPhone)) || userPhone.length != 10) {
      $('#numHelp').show();
      $('#numHelp').removeAttr("hidden");
    }
    else
      $('#numHelp').hide();
  });

  function validateArtForm() {
    var isValidName = ($('#nameArt').val() != '');
    var validEmail = isValidEmail('#emailArt');
    var userPhone = $('#phoneArt').val()
    var isValidNum = (!isNaN(parseInt(userPhone)) && userPhone.length == 10);

    if (!isValidNum) {
      $('#numHelp').show();
      $('#numHelp').removeAttr("hidden");
      $('#numHelp').focus();
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

    return (isValidName && validEmail && isValidNum);
  }

  function validateCatForm() {
    var isValidName = ($('#nameCat').val() != '');
    var validEmail = isValidEmail('#emailCat');
    var userPhone = $('#phoneCat').val();
    var isValidNum = (!isNaN(parseInt(userPhone)) && userPhone.length == 10);

    if (!isValidNum) {
      $('#numHelp').show();
      $('#numHelp').removeAttr("hidden");
      $('#numHelp').focus();
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

    return (isValidName && validEmail && isValidNum);
  }

  function validateRabForm() {
    var isValidName = ($('#nameRab').val() != '');
    var validEmail = isValidEmail('#emailRab');
    var userPhone = $('#phoneRab').val();
    var isValidNum = (!isNaN(parseInt(userPhone)) && userPhone.length == 10);

    if (!isValidNum) {
      $('#numHelp').show();
      $('#numHelp').removeAttr("hidden");
      $('#numHelp').focus();
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

    return (isValidName && validEmail && isValidNum);
  }

  function isValidEmail(userEmail) {
    var email = $(userEmail).val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
});