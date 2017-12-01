$(document).ready(function() {
  
  $(document).on("click", "#contArtBtn", function () {
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
      $(".modal-body #nameArt").val(userName);
      $(".modal-body #emailArt").val(userEmail);
    }
  });

  $(document).on("click", "#contCatBtn", function () {
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
      $(".modal-body #nameCat").val(userName);
      $(".modal-body #emailCat").val(userEmail);
    }
  });

  $(document).on("click", "#contRabBtn", function () {
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
      $(".modal-body #nameRab").val(userName);
      $(".modal-body #emailRab").val(userEmail);
    }
  });
  
  $('#submitArtBtn').click(function() {
    if (!validateArtForm()) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (localStorage.getItem('userFirst') == null)
        localStorage.setItem('userFirst', $("#nameArt").val());
      if (localStorage.getItem('userEmail') == null)
        localStorage.setItem('userEmail', $('#emailArt').val());
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
      if (localStorage.getItem('userFirst') == null)
        localStorage.setItem('userFirst', $("#nameCat").val());
      if (localStorage.getItem('userEmail') == null)
        localStorage.setItem('userEmail', $('#emailCat').val());
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
      if (localStorage.getItem('userFirst') == null)
        localStorage.setItem('userFirst', $("#nameRab").val());
      if (localStorage.getItem('userEmail') == null)
        localStorage.setItem('userEmail', $('#emailRab').val());
      $('#contactFormRab').submit();
      location.href = "sub/rabSub.html";
    }
  });

  $('#saveArtBtn').click(function() {
    var loggedIn = localStorage.getItem('loggedIn');
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
    var loggedIn = localStorage.getItem('loggedIn');
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
    var loggedIn = localStorage.getItem('loggedIn');
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
      $('#phoneHelp').show();
      $('#phoneHelp').removeAttr("hidden");
    }
    else
      $('#phoneHelp').hide();
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
      $('#phoneHelp').show();
      $('#phoneHelp').removeAttr("hidden");
    }
    else
      $('#phoneHelp').hide();
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
      $('#phoneHelp').show();
      $('#phoneHelp').removeAttr("hidden");
    }
    else
      $('#phoneHelp').hide();
  });

  function validateArtForm() {
    var isValidName = ($('#nameArt').val() != '');
    var validEmail = isValidEmail('#emailArt');
    var userPhone = $('#phoneArt').val()
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

  function validateCatForm() {
    var isValidName = ($('#nameCat').val() != '');
    var validEmail = isValidEmail('#emailCat');
    var userPhone = $('#phoneCat').val();
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

  function validateRabForm() {
    var isValidName = ($('#nameRab').val() != '');
    var validEmail = isValidEmail('#emailRab');
    var userPhone = $('#phoneRab').val();
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