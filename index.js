
var map = L.map('map').setView([48.862725,2.287592], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGJhZ3NrIiwiYSI6ImNsMm5laGNhOTF6dnYzYnA5MGJtMXpvcngifQ._0rxrMjSKfFcl1mgeHFYmw'
}).addTo(map);