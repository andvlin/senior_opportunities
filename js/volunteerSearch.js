$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm())
      $('#volForm').submit();
  });

  $('#clearBtn').click(function() {
    $(".errText").hide();
    document.getElementById("volForm").reset();
  });

  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  $('#zip').change(function() {
    if (!isValidZip()) {
      $('#zipHelp').show();
      $('#zipHelp').removeAttr("hidden");
    }
    else
      $('#zipHelp').hide();
  });

  $('#dist').change(function() {
    if (!isValidDist()) {
      $('#distHelp').show();
      $('#distHelp').removeAttr("hidden");
    }
    else
      $('#distHelp').hide();
  });



  function validateForm() {
    var validZip = isValidZip();
    var validDist = isValidDist();

    if (!validDist) {
      $('#distHelp').removeAttr("hidden");
      $('#dist').focus();
      $('#dist').val('');
    }
    if (!validZip) {
      $('#zipHelp').removeAttr("hidden");
      $('#zip').focus();
      $('#zip').val('');
    }
    return (validZip && validDist);
  }

  function isValidZip() {
    var zip = $('#zip').val();
    if (isNaN(Number(zip)) || zip.length < 5)
      return false;
    return true;
  }

  function isValidDist() {
    var dist = Number($('#dist').val());
    if (isNaN(dist) || dist >= 300 || dist == 0)
      return false;
    return true;
  }
});