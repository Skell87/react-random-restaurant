import { Link } from "react-router-dom"
import Menu from "./Menu";
import Hours from "./Hours";
import Map from "./Map";
import About from "./About"
import { useState } from "react";

const Title = () => {
  return (
    <h1 className="TitleText">
      Shok<wbr />utsu
    </h1>
  )
}

function App() {
  const [view, setView] = useState("Menu")
  
  function displaySelector() {
    switch(view) {
    case 'Menu':
      return <Menu />  
      break;
    case 'Hours':
      return <Hours />
      break;
    case 'Map':
      return <Map />
      break;
    case 'About':
      return <About />
      break;
    default: 
      return <Menu />
  }}

  const display = displaySelector();
  
  return (
    <section className="plate">
      <div className="" class="App">
        <Title />
        </div>
          <nav>
            <ul className="NavList">
              <button className="button" onClick={(() => setView("Menu"))}>Menu</button>
              <button className="button" onClick={(() => setView("Hours"))}>Hours</button>
              <button className="button" onClick={(() => setView("Map"))}>Map</button>
              <button className="button" onClick={(() => setView("About"))}>About</button>
            </ul>
          </nav>
      <div className="updatePlate">
      {display}
      </div>
    </section>
  )

}


export default App
