import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

console.log(user);

function App() {
  const { name, bio, color, city, links } = user;
  const { github, linkedin } = links;

  return (
    <div>
      <NavBar />
      <Home name={name} color={color} city={city} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
