$(document).ready(function() {
  var savedItem = localStorage.getItem("title1");
  var hasListing = false;
  if (savedItem) {
    $(".noSaved").hide();
    $("#title1").text(savedItem);
    $("#img1").attr('src', localStorage.getItem("img1"));
    $("#more1").attr('href', localStorage.getItem("more1"));
    $("#cont1").attr('href', localStorage.getItem("cont1"));
    $("#saved1").show();
    hasListing = true;
  }
  else {
    $("#saved1").hide();
  }
  savedItem = localStorage.getItem("title2");
  if (savedItem) {
    $(".noSaved").hide();
    $("#title2").text(savedItem);
    $("#img2").attr('src', localStorage.getItem("img2"));
    $("#more2").attr('href', localStorage.getItem("more2"));
    $("#cont2").attr('href', localStorage.getItem("cont2"));
    $("#saved2").show();
    hasListing = true;
  } else {
    $("#saved2").hide();
  }
  savedItem = localStorage.getItem("title3");
  if (savedItem) {
    $(".noSaved").hide();
    $("#title3").text(savedItem);
    $("#img3").attr('src', localStorage.getItem("img3"));
    $("#more3").attr('href', localStorage.getItem("more3"));
    $("#cont3").attr('href', localStorage.getItem("cont3"));
    $("#saved3").show();
    hasListing = true;
  } else {
    $("#saved3").hide();
  }
  savedItem = localStorage.getItem("title4");
  if (savedItem) {
    $(".noSaved").hide();
    $("#title4").text(savedItem);
    $("#img4").attr('src', localStorage.getItem("img4"));
    $("#more4").attr('href', localStorage.getItem("more4"));
    $("#cont4").attr('href', localStorage.getItem("cont4"));
    $("#saved4").show();
    hasListing = true;
  } else {
    $("#saved4").hide();
  }
  savedItem = localStorage.getItem("title5");
  if (savedItem) {
    $(".noSaved").hide();
    $("#title5").text(savedItem);
    $("#img5").attr('src', localStorage.getItem("img5"));
    $("#more5").attr('href', localStorage.getItem("more5"));
    $("#cont5").attr('href', localStorage.getItem("cont5"));
    $("#saved5").show();
    hasListing = true;
  } else {
    $("#saved5").hide();
  }
  savedItem = localStorage.getItem("title6");
  if (savedItem) {
    $(".noSaved").hide();
    $("#title6").text(savedItem);
    $("#img6").attr('src', localStorage.getItem("img6"));
    $("#more6").attr('href', localStorage.getItem("more6"));
    $("#cont6").attr('href', localStorage.getItem("cont6"));
    $("#saved6").show();
    hasListing = true;
  } else {
    $("#saved6").hide();
  }

  if (hasListing)
    $(".noSaved").hide();
  else $(".noSaved").show();
  $('#unsave1').click(function() {
    localStorage.removeItem("title1");
    localStorage.removeItem("img1");
    localStorage.removeItem("more1");
    localStorage.removeItem("cont1");
    $("#saved1").hide();
    location.reload(); 
  });

  $('#unsave2').click(function() {
    localStorage.removeItem("title2");
    localStorage.removeItem("img2");
    localStorage.removeItem("more2");
    localStorage.removeItem("cont2");
    $("#saved2").hide();
    location.reload(); 
  });

  $('#unsave3').click(function() {
    localStorage.removeItem("title3");
    localStorage.removeItem("img3");
    localStorage.removeItem("more3");
    localStorage.removeItem("cont3");
    $("#saved3").hide();
    location.reload(); 
  });

  $('#unsave4').click(function() {
    localStorage.removeItem("title4");
    localStorage.removeItem("img4");
    localStorage.removeItem("more4");
    localStorage.removeItem("cont4");
    $("#saved4").hide();
    location.reload(); 
  });

  $('#unsave1').click(function() {
    localStorage.removeItem("title5");
    localStorage.removeItem("img5");
    localStorage.removeItem("more5");
    localStorage.removeItem("cont5");
    $("#saved5").hide();
    location.reload(); 
  });

  $('#unsave6').click(function() {
    localStorage.removeItem("title6");
    localStorage.removeItem("img6");
    localStorage.removeItem("more6");
    localStorage.removeItem("cont6");
    $("#saved6").hide();
    location.reload(); 
  });
});