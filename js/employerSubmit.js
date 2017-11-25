$(document).ready(function() {

  $('#submitBtn').click(function() {
    if (validateForm()) {
      alert("Your listing has been submitted and is pending review.\nYou will receive an email once your listing is posted.");
      window.location.href="index.html";
    }
  });
  $('#clearBtn').click(function() {
    document.getElementById("listingForm").reset();
  });
  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  $("#volType").change(function() {
      $('#typeHelp').hide();
  });

  $("#jobType").change(function() {
      $('#typeHelp').hide();
  });

  $("#listingOrg").change(function() {
    var org = $("#listingOrg").val();
    if (!org) {
      $('#orgHelp').show();
      $('#orgHelp').removeAttr("hidden");
    }
    else
      $('#orgHelp').hide();
  });

  $("#listingEmail").change(function() {
    if (!isValidEmail()) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
    }
    else
      $('#emailHelp').hide();
  });

  $("#listingTitle").change(function() {
    var title = $("#listingTitle").val();
    if (!title) {
      $('#titleHelp').show();
      $('#titleHelp').removeAttr("hidden");
    }
    else
      $('#titleHelp').hide();
  });

  $("#listingInfo").change(function() {
    var info = $("#listingInfo").val();
    if (!info) {
      $('#infoHelp').show();
      $('#infoHelp').removeAttr("hidden");
    }
    else
      $('#infoHelp').hide();
  });


  function validateForm() {
    var validated = true;

    var type = $("input[name=listingType]:checked").val();
    var org = $("#listingOrg").val();
    var email = isValidEmail();
    var title = $("#listingTitle").val();
    var info = $("#listingInfo").val();

    if (!type) {
      $('#typeHelp').show();
      $('#typeHelp').removeAttr("hidden");
      validated = false;
    }

    if (!info) {
      $('#infoHelp').show();
      $('#infoHelp').removeAttr("hidden");
      $('#listingInfo').focus();
      validated = false;
    }

    if (!title) {
      $('#titleHelp').show();
      $('#titleHelp').removeAttr("hidden");
      $('#listingTitle').focus();
      validated = false;
    }

    if (!email) {
      $('#emailHelp').show();
      $('#emailHelp').removeAttr("hidden");
      $('#listingEmail').focus();
      validated = false;
    }
    if (!org) {
      $('#orgHelp').show();
      $('#orgHelp').removeAttr("hidden");
      $('#listingOrg').focus();
      validated = false;
    }
    return validated;
  }

  function isValidEmail() {
    var email = $("#listingEmail").val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  function isValidOrg() {
    var org = $("#listingOrg").val();
  }
});