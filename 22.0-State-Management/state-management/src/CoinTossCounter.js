import React, { useState } from "react";

const CoinTossCounter = () => {
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });

  const handleClick = (value) => {
    setResults([...results, value]);
    setCounts({
      ...counts,
      // gets inputted value and update that value's count + 1
      [value]: counts[value] + 1,
    });

    return results; // need this to check current array status
  };
  const handleDeleteLast = () => {
    const last = results[results.length - 1] // gets last value from results array
    const list = results.slice(0, -1); // slices the last element from the results array

    setResults(list);

    if (last) {
        // if there's a last value, update counts with the last value - 1
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };
  // check results as it changes
  console.log(results);
  

  return (
    <section>
      <div style={{ paddingTop: "2rem" }}>
        <button onClick={() => handleClick("H")}>Heads</button>
        <button onClick={() => handleClick("T")}>Tails</button>
      </div>
      <button onClick={handleDeleteLast}>Delete Last</button>

      <ul style={{ listStyle: "none", padding: "0px" }}>
        {results.map((result, index) => (
          <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
        ))}
      </ul>
      <ul style={{ listStyle: "none", padding: "0px" }}>
        <li>Heads: {counts["H"]}</li>
        <li>Tails: {counts["T"]}</li>
      </ul>
    </section>
  );
};

export default CoinTossCounter;
