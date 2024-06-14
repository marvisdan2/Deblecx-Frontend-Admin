import axios from "axios";
import React from "react";

const getConnector = async () => {
  const res = await fetch(
    "http://localhost:8080/api/dms/shipping/appointment/dropship"
  );
  console.log(await res.json());
  return res.json();
};
function NewPage() {
  getConnector();
  return <div data-testid="newpage-text">{"foo"}</div>;
}

export default NewPage;
