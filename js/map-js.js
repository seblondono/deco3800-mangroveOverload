function initMap() {

  const moretonBay = {lat:-27.308961, lng:153.421472};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: moretonBay,
    zoom: 11,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: moretonBay,
    map: map
  });
}
