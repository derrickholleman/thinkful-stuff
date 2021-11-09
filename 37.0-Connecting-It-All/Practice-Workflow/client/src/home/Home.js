import { useState, useEffect } from "react";
import { listObservations } from "../utils/api";
const dayjs = require("dayjs");

function Home() {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    let isMounted = true;
    listObservations().then((res) => {
      if (isMounted) setObservations(res);
    });
    return () => (isMounted = false);
  }, [observations]);

  return (
    <main>
      <h1>Home</h1>
      <div style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Sky Condition</th>
              <th scope="col">Created</th>
            </tr>
          </thead>
          <tbody>
            {observations.map((observation) => (
              <tr key={observation.observation_id}>
                <td>{observation.latitude}</td>
                <td>{observation.longitude}</td>
                <td>{observation.sky_condition}</td>
                <td>
                  {dayjs(observation.created_at).format("MM/DD/YYYY H:mm:ss")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Home;
