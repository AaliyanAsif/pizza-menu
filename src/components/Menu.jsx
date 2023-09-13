import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../PizzaData";

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {pizzaData ? (
        <>
          <p>
            Authentic Italian cusine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default Menu;
