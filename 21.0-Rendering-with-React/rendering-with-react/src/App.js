import "./App.css";
import WelcomeBack from "./Components/WelcomeBack";
import Header from "./Components/Header";

function App() {
  const shirts = 4;
  const pants = 6;
  const website = "https://www.thinkful.com/";

  return (
    <main>
      <Header />
      <p className="paragraph">
        Purchased {shirts} shirts and {pants} pants for a total of{" "}
        {shirts + pants} items
      </p>
      <a href={website} target="_blank" rel="noreferrer">
        Website
      </a>

      {/* passing props */}
      <WelcomeBack />
      <WelcomeBack name="Derrick" adjective="smarty pants" />
    </main>
  );
}

export default App;
