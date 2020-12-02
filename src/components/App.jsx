import React from "react";
import GradCard from "./GradCard";
import Nav from "./Nav";
import "../styles.css";

function App() {
  const list = [...Array(24)].map((_, index) => <GradCard key={index} />);

  return (
    <>
      <Nav />
      <div className="App">{list}</div>
    </>
  );
}

export default App;
