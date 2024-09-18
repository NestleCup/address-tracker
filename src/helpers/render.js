export function render(
  { ipInfo, locationInfo, timezoneInfo, ispInfo },
  mapData,
  map,
  markerIcon
) {
  const { lat, lng, country, region } = mapData.location;
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = region + ', ' + country;
  timezoneInfo.innerText = mapData.location.timezone;
  ispInfo.innerText = mapData.isp;
  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
}
