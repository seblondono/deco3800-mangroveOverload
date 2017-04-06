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

  const sites = ["659143","666882","677363","662374","666129","678115","685338","667243","667600",
  "678417","679463","691277","682845","677111","666882",
  "692090","683408","675456","691979","668208","676642","677441","683868","678586","670763","677659","679464"];

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
