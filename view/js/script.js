let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -8.9138841, lng: 13.2609174},
    zoom: 15,
  });
}

initMap();
