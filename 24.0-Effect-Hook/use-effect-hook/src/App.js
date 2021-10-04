import "./App.css";
import ProfileEdit from "./ProfileEdit";
import PokemonFetch from "./PokemonFetch";
import GhibliFetch from "./GhibliFetch";
import GetHolidaysAndWeather from "./Holidays-Weather";

function App() {
  return (
    <div className="App">
      <ProfileEdit />
      <GhibliFetch />
      <GetHolidaysAndWeather />
      <PokemonFetch />
    </div>
  );
}

export default App;
