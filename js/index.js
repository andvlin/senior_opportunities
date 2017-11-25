$(document).ready(function() {
  var loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn) {
    $(".loggedIn").show();
    $(".loggedOut").hide();
    var firstName = localStorage.getItem('userFirst');
    if (!firstName)
      firstName = "User";
    $("#helloUser").text("Hello, " + firstName);
  }
  else {
    $(".loggedIn").hide();
    $(".loggedOut").show();
  }

  $('#logoutBtn').click(function() {
    var userEmail = localStorage.getItem("userEmail");
    var userPass = localStorage.getItem("userPass");
    localStorage.clear();
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userPass", userPass);
    location.reload(); 
  });
});