import "./App.css";
import WelcomeBack from "./Components/WelcomeBack";
import Header from "./Components/Header";
import GroceryList from "./Components/GroceryList";
import FavoriteColors from "./Components/FavoriteColors";

function App() {
  const shirts = 4;
  const pants = 6;
  const website = "https://www.thinkful.com/";

  const groceryItems = [
    { quantity: 6, item: "Bananas" },
    { quantity: 3, item: "Apples" },
    { quantity: 10, item: "Oranges" },
  ];
  const favoriteColors = ["Green", "Red", "Blue"];

  return (
    <main>
      <Header />
      {/* using JSX */}
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

      {/* rendering lists and tables */}
      <GroceryList items={groceryItems} />
      <FavoriteColors colors={favoriteColors} />
    </main>
  );
}

export default App;
