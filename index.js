const walmars = [
    { lat: 48.447140576696015 , lng:  -123.33620275404225 },
    { lat: 48.45487923819761 , lng: -123.37378678635412 },
    { lat: 48.44375609575213 , lng: -123.50547468404235 }
];

const walmarCoords = [
    48.44379831408984, -123.50535747342383,
    48.45487923819761, -123.37378678635412,
    48.447140576696015, -123.33620275404225,
];

walmarMarkers = [];

for (i = 0; i < 3; i++) {
    console.log({ lat: walmarCoords[2 * i], lng: walmarCoords[(2 * i) + 1] });
    /*tempMarker = new google.maps.Marker({
        position: { lat: walmarCoords[2 * i], lng: walmarCoords[(2 * i) + 1] },
        map: map,
      });
      //add to the walmarMarkers list? idk if its needed but we'll see
      */
}


// Initialize and add the map
function initMap(pos) {
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: pos,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: { lat: -25.344, lng: 131.031 },
        map: map,
      });

      const marker2 = new google.maps.Marker({
        position: { lat: -26.344, lng: 131.031 },
        map: map,
      });

      const marker3 = new google.maps.Marker({
        position: { lat: -26.344, lng: 131.031 },
        map: map,
      });
  }


  //check if geoloation is accessible and if yes, initmap with locaiton, if not then initmap with location of uluru
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            window.initMap = initMap(myLatLng);
        }
    )
} else {
    console.log("location not found");
    myLatLng =  { lat: -25.344, lng: 131.031 };
    window.initMap = initMap(myLatLng);
}