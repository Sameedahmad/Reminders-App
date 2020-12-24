import React from "react";

function Article(props) {
  return (
    <figure className="article">
      <img alt="" src={props.src} />

      <figcaption>
        <h3>{props.title}</h3>

        <p>{props.paragraph}</p>
      </figcaption>
    </figure>
  );
}

export default Article;
