mapboxgl.accessToken = ACCESS_TOKEN;
var map = new mapboxgl.Map({
container: "mapbox",
style: "mapbox://styles/jfett/ckjrxgubh2xn719s8w5ob42ks", // stylesheet location
center: [-74.0060, 40.7128], // starting position [lng, lat]
zoom: 9.5 // starting zoom
});