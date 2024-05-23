import { Link } from "react-router-dom"
import Menu from "./Menu";
import Hours from "./Hours";
import Map from "./Map";
import Order from "./Order"
import { useState } from "react";
//imports use state for the switcher
//set up static title with word break for collapsibility
const Title = () => {
  return (
    <h1 className="TitleText">
      Shok<wbr />utsu
    </h1>
  )
}


function App() {

  //setting up state for a single page web app, this is all in place to switch the viewplate
  const [view, setView] = useState("Menu")
  
  //switch states for the different clickable menu items.
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
    case 'Order':
      return <Order />
      break;
    default: 
      return <Menu />
  }}

  const display = displaySelector();
  //distilled into a variable to access the switcher on click below.
  return (
    //these are static buttons in the menu that adjust the updateplate.
    <section className="plate">
      <div className="" class="App">
        
        <Title />
        </div>
          <nav className="borderBottom">
            <ul className="NavList">
              
              <button className="button" onClick={(() => setView("Menu"))}>Menu</button>
              <button className="button" onClick={(() => setView("Hours"))}>Hours</button>
              <button className="button" onClick={(() => setView("Map"))}>Location</button>
              <button className="button" onClick={(() => setView("Order"))}>Order</button>
            </ul>
          </nav>
      <div className="updatePlate">
      {display}
      </div>
    </section>
  )
//above is updatePlate, which displays whatever page the buttons call.
}


export default App
