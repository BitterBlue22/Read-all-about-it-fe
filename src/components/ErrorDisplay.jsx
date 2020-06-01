import React from "react";

const ErrorDisplay = ({ msg }) => {
  if (msg)
    return (
      <section>
        <h2>{msg}</h2>
      </section>
    );
  return (
    <section>
      <h2>ERROR</h2>
    </section>
  );
};

export default ErrorDisplay;
