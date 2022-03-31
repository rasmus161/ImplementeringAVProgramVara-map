mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyazE2MSIsImEiOiJjbDFlejJ5aHYwdzdoM2JucnVic2MxZHYyIn0.UzdIBzfHDR9OWHpY4sYM6w';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [31.606691,49.492991],
zoom: 5

});



map.addControl(new mapboxgl.NavigationControl());

map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );