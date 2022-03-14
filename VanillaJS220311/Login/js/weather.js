function onGeoOk(position) {
  const lag = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("너여기사는군", lag, lng);
  console.log(position);
}
function onGeoError() {
  alert("날씨못찾아");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
