import React from "react";
import { useSelector } from "react-redux";

import { loadingSelector } from "../../store/selector/loading";
import { errorSelector } from "../../store/selector/error";
import Loader from "../Loader";
import Message from "../Message";
import ErrorInfo from "../Message/ErrorInfo";

const ErrorBoundaries = (props) => {
  const { nameRequest } = props;

  /** SELECTOR */
  const { isFetching, error } = useSelector((state) => {
    return {
      isFetching: loadingSelector([nameRequest], state),
      error: errorSelector([nameRequest], state),
    };
  });

  if (isFetching) {
    return <Loader />;
  }

  if (error?.isError) {
    return (
      <Message>
        <ErrorInfo message={error?.message} />
      </Message>
    );
  }

  return props.children;
};

export default ErrorBoundaries;
