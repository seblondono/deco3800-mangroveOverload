function initMap() {

  const nudgeeBeach = {lat:-27.343968, lng:153.099107};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: nudgeeBeach,
    zoom: 13,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: nudgeeBeach,
    map: map
  });

  const sites = {659143: {lat: -27.342081, lng: 153.096279},COOMERAISL : {lat: -27.843129, lng: 1153.376548},
658094: {lat: -27.577648, lng: 153.291903},658027: {lat: -27.829269, lng: 153.374376},
658026: {lat: -27.844231, lng: 153.373108},iCAB089: {lat: -27.146765, lng: 153.044211},
CRAB1: {lat: -27.347652, lng: 153.406487},659095: {lat: -27.271939, lng: 153.058615},
LOTA01: {lat: -27.475982, lng: 153.186872},LOTA02: {lat: -27.477019, lng: 153.18878},
658063: {lat: -27.736246, lng: 153.381911},659151: {lat: -27.293883, lng: 153.038764},
TINCHI2: {lat: -27.291555, lng: 153.04526},BOONDALL2: {lat: -27.338244, lng: 153.082514},
658062: {lat: -27.751768, lng: 153.371668},658060: {lat: -27.769833, lng: 153.371376},
659091: {lat: -27.144079, lng: 153.037009},659092: {lat: -27.143641, lng: 153.03799},
659144: {lat: -27.35321, lng: 153.102823},659107: {lat: -27.169629, lng: 153.026296},
658108: {lat: -27.665534, lng: 153.36751},658085: {lat: -27.639537, lng: 153.329443},
658084: {lat: -27.640588, lng: 153.329923},660182: {lat: -26.976666, lng: 153.046772},
LOTA03: {lat: -27.47843, lng: 153.190887},658067: {lat: -27.751995, lng: 153.39471},
658065: {lat: -27.746116, lng: 153.386043},658071: {lat: -27.745512, lng: 153.402851},
659122: {lat: -27.395383, lng: 153.232828}};

  function findPlace(placeToFind, sites) {
    return sites.filter(place => {

      // g means global, the regex will look in the complete string for a match
      // i means case insensitive
      const regex = new RegExp(placeToFind, 'gi');
      return place.match(regex);
    });
  }

  function displayPlaces(){
    if (this.value == "") {
        placesFound.innerHTML = '';
    } else {
      const placesArray = findPlace(this.value, sites);

      const html = placesArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
        <span class='name'>${cityName}</span>
        </li>
        `;
      }).join('');

      placesFound.innerHTML = html;
    }
  }

  function goBack() {
      window.location.href = 'locationMap.html';
  }

  const searchBar = document.querySelector('#searchArea');
  const placesFound = document.querySelector('.suggestions');
  const searchForm = document.querySelector('.search-form');
  const back = document.querySelector('.fa-chevron-left');

  searchBar.addEventListener('change', displayPlaces);
  searchBar.addEventListener('keyup', displayPlaces);
  searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    window.location.href = 'site.html';
  });
  back.addEventListener('click', goBack);

}
