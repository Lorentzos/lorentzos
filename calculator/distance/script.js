const mapOptions = {
    center: [39.0742, 21.8243], // Centered on Greece
    zoom: 7
};

const map = L.map('map', mapOptions);
const layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let firstLatLng,
    secondLatLng,
    polyline,
    markerA = null,
    markerB = null;

const markersLayer = new L.LayerGroup();

map.on('click', (e) => {
    if (!firstLatLng) {
        firstLatLng = e.latlng;
        markerA = L.marker(firstLatLng).addTo(map).bindPopup('Point A<br/>' + e.latlng).openPopup();
    } else if (!secondLatLng) {
        secondLatLng = e.latlng;
        markerB = L.marker(secondLatLng).addTo(map).bindPopup('Point B<br/>' + e.latlng).openPopup();
        polyline = L.polyline([firstLatLng, secondLatLng], { color: 'red' });
        polyline.addTo(map);
        const length = map.distance(firstLatLng, secondLatLng);
        document.getElementById('length').innerHTML = length.toFixed(2); // Display distance with two decimal places
    } else {
        if (polyline) {
            map.removeLayer(polyline);
            polyline = null;
        }
        firstLatLng = e.latlng;
        map.removeLayer(markerA);
        map.removeLayer(markerB);
        secondLatLng = null;
        markerA = L.marker(firstLatLng).addTo(map).bindPopup('Point A<br/>' + e.latlng).openPopup();
    }
});
