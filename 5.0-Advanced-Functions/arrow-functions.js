const location = {
  name: "Arches",
  state: "Utah",
  geo: {
    lat: 38.68,
    lon: -109.57,
  },
};

const getGoogleMapURL = ({ geo: { lat, lon } }, zoom = 10) => (
    `https://www.google.com/maps/@${lat},${lon},${zoom}z`
);
const getState = (location) => {
    return location.state
}
console.log(getGoogleMapURL(location))
console.log(getState(location))
