import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./UltraClub.css";
import Exercise from "../Exercise/Exercise";

const UltraClub = () => {
  const [club, setClub] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("ultraClub.json")
      .then((res) => res.json())
      .then((data) => setClub(data));
  }, []);
  const timeToAdd = (time) => {
    const newTime = [...cart, time];
    setCart(newTime);
  };
  return (
    <div className="club-container container">
      <div className="exercise-container">
        {club.map((product) => (
          <Exercise
            key={product.id}
            timeToAdd={timeToAdd}
            product={product}></Exercise>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default UltraClub;
