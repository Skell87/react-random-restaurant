import { Link, NavLink } from "react-router-dom"


const Title = () => {
  return (
    <h1 className="TitleText">
      Shokutsu
    </h1>
  )
}

function App() {
  
  return (
    <section className="plate">
      <div className="" class="App">
       <Title />
      </div>
      <nav>
        <ul className="NavList">
          <li>Menu</li>
          <li>Hours</li>
          <li>Map</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="updatePlate">

      </div>
    </section>
  )

}


export default App
