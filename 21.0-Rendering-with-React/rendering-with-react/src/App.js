import "./App.css";

function App() {
  const shirts = 4;
  const pants = 6;
  const website = "https://www.thinkful.com/";

  return (
    <main>
      <p className="paragraph">
        Purchased {shirts} shirts and {pants} pants for a total of{" "}
        {shirts + pants} items
      </p>
      <a href={website} target="_blank" rel="noreferrer">Website</a>
    </main>
  );
}

export default App;
