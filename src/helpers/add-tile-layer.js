import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution:
      'Challenge by <a href="https://www.frontendmentor.io?ref=chellenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/NestleCup/address-tracker">NestleCup</a>.',
  }).addTo(map);
}
