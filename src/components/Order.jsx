import React from "react";

export default function Order(props) {
  return (
    <div>
      <div className="order">
        <p>
          We're Open until {props.closeHour}:00. Come visit us or order online
        </p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}
