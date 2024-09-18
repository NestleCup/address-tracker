import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addTileLayer, addOffset, render, validateIp } from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');
const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById('location');
const timezoneInfo = document.getElementById('timezone');
const ispInfo = document.getElementById('isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleClick);

const mapArea = document.getElementById('map');
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
});
const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});
addTileLayer(map);
L.marker([51.5, -0.09], { icon: markerIcon }).addTo(map);

async function getData() {
  if (validateIp(ipInput.value)) {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_bX6QsH7JjNHz7vY6PhoybWIoFIPbr&ipAddress=${ipInput.value}`
    );
    const data = await response.json();
    render(
      { ipInfo, locationInfo, timezoneInfo, ispInfo },
      data,
      map,
      markerIcon
    );
  }
  if (matchMedia('(max-width: 1023px)').matches) {
    addOffset(map);
  }
}
function handleClick(e) {
  if (e.key === 'Enter') {
    getData();
  }
}
