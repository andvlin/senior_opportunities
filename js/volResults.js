$(document).ready(function() {
  $('#saveArtBtn').click(function() {
    for (var i = 1; i < 6; i++) {
      var savedItem = localStorage.getItem("title" + i.toString());  
      if (!savedItem) {
          localStorage.setItem("title" + i.toString(), "Art Program for Homeless Teens/ Youths Thursday Afternoons");
          localStorage.setItem("img" + i.toString(), "images/art.jpg");
          localStorage.setItem("more" + i.toString(), "list/art.html");
          localStorage.setItem("cont" + i.toString(), "cont/artCont.html");
          $('#saveArtBtn').prop('disabled', true);
          break;
      }
    }
  });

  $('#saveCatBtn').click(function() {
    for (var i = 1; i < 6; i++) {
      var savedItem = localStorage.getItem("title" + i.toString());
      if (!savedItem) {
        localStorage.setItem("title" + i.toString(), "Cat Shelter Care");
        localStorage.setItem("img" + i.toString(), "images/cat.png");
        localStorage.setItem("more" + i.toString(), "list/cat.html");
        localStorage.setItem("cont" + i.toString(), "cont/catCont.html");
        $('#saveCatBtn').prop('disabled', true);
        break;
      }
    }
  });

  $('#saveRabBtn').click(function() {
    for (var i = 1; i < 6; i++) {
      var savedItem = localStorage.getItem("title" + i.toString());
      if (!savedItem) {
        localStorage.setItem("title" + i.toString(), "Adoption Event Coordinator - Offsite Events");
        localStorage.setItem("img" + i.toString(), "images/solid-silver-gray-fabric_medium.jpg");
        localStorage.setItem("more" + i.toString(), "list/rabbit.html");
        localStorage.setItem("cont" + i.toString(), "cont/rabbitCont.html");
        $('#saveRabBtn').prop('disabled', true);
        break;
      }
    }
  });

});