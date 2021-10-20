import React from "react";

function Roster({ detailed, roster }) {
  return (
    <div>
      {!detailed ? (
        <ol>
          {roster.map(({ firstName, id }) => (
            <li key={id}>{firstName}</li>
          ))}
        </ol>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {roster.map(({ id, firstName, lastName, location }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Roster;
