import React from "react";
import { useHistory } from "react-router-dom";

import "./category.scss";

const Category = ({ category }) => {
  const { title, categoryName, imgUrl } = category;
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push({
      pathname: `catalog/${categoryName}`,
    });
  };

  return (
    <article className={"Category"} onClick={handleClick}>
      <img className={"Category-Img"} src={imgUrl} alt={title} />
      <div className={"Category-Name Text"}>{title}</div>
    </article>
  );
};

export default Category;
