//Ejercicio 1
navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude;
    let map = L.map('map').setView([latitude, longitude], 10);
    var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
});

//Ejercicio 2
let coordenadasAngeles = [34.0522300, -118.2436800];
let map = L.map('map').setView(coordenadasAngeles, 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
async function obtenerVehiculos(){
    let objeto = await fetch("https://api.metro.net/LACMTA_Rail/vehicle_positions/all?geojson=false");
    let json = await objeto.json();
    for (i=0; i< json.length; i++){
        let latitud = json[i].position.latitude;
        let longitud = json[i].position.longitude;
        let coche = json[i]. ;
        L.marker(latitud, longitud).addTo(map);
        L.marker(latitud, longitud).bindPopup(`<b>ID del Vehículo</b><br>${coche}`).addTo(map); 
    } 
    refrescar()
}

function refrescar(){
    setInterval(obtenerVehiculos, 3000);
}


