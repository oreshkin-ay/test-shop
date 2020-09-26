import React from "react";

import "./card.scss";

const Card = (props) => {
  const { children, onClick } = props;
  return (
    <article className={"Card"} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
