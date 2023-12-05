import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movie, setMovie] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} color="blue" onRateTest={setMovie} />
      <p>This movie was rated {movie} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={36}
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
