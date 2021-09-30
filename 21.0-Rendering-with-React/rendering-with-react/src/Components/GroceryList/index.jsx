import React from "react";

const GroceryList = ({ items }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ quantity, item }, index) => (
            <tr key={index}>
              <td>{quantity}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroceryList;
