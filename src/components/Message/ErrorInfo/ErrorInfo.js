import React from "react";

import error from "./../../../assets/error.svg";

const ErrorInfo = (props) => {
  return (
    <>
      <img src={error} alt="error" />
      <div>{props.message || "Что-то пошло не так! Повторите запрос!"}</div>
    </>
  );
};

export default ErrorInfo;
