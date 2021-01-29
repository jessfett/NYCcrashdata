mapboxgl.accessToken = "pk.eyJ1IjoiamZldHQiLCJhIjoiY2tpbnd4aGF6MGF6ZjJ6bXZhOGUzZHV6ayJ9.ZcEz2B11lxbc5aO2Qm4d9g";
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/jfett/ckjrxgubh2xn719s8w5ob42ks",
center: [-74.0060, 40.7128],
zoom: 9.5
});


var layers = ['Staten Island', 'Manhattan', 'Bronx', 'Queens', 'Brooklyn'];
var colors = ['#eaf8d3', '#ade6af', '#7bccc4', '#43a2ca', '#0868ac'];

