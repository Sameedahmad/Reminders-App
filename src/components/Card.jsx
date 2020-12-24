import React from "react";

function Card(props) {
  return (
    <figure className="card">
      <img alt="" src={props.src} />

      <figcaption>{props.figcaption}</figcaption>
    </figure>
  );
}

export default Card;
