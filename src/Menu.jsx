import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//menu function. this sets state for the api data and the drop down menu
function Menu() {
  const [data, setData] = useState([]);
  const [appOpen, setAppOpen] = useState(false);
  const [dinOpen, setDinOpen] = useState(false);
  const [desOpen, setDesOpen] = useState(false);

  //api call happening asynchronusly from custom JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/Skell87/menu/refs/heads/main/menu2.json"
        );
        setData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  //this function is for the dropdown toggle
  function handleAppToggle() {
    if (appOpen === true) {
      setAppOpen(false);
    } else {
      setAppOpen(true);
    }
  }
  function handleDinToggle() {
    if (dinOpen === true) {
      setDinOpen(false);
    } else {
      setDinOpen(true);
    }
  }
  function handleDesToggle() {
    if (desOpen === true) {
      setDesOpen(false);
    } else {
      setDesOpen(true);
    }
  }

  console.log(data);

  //Appetizers: this block of code pulls the appetizer items by category
  const appetizerItems = data.filter((item) => item.category === "Appetizer");
  console.log("appetizer Items:", appetizerItems);

  //this maps the retrieved appetizer items and displays them on page with their price, description and name.
  // custom css added to certain elements of the text.
  //page breaks for effect and separation
  const appetizerList = appetizerItems.map((item) => (
    <div key={item.id}>
      <p className="menuItemContent">
        <span className="itemTitle">{item.title}:</span>
        <br></br>
        {item.description}
        <br></br>
        {item.price}
      </p>
    </div>
  ));
  console.log("appetizer List:", appetizerList);

  //Dinner
  const dinnerItems = data.filter((item) => item.category === "Entree");
  console.log("dinner items:", dinnerItems);

  const dinnerList = dinnerItems.map((item) => (
    <div key={item.id}>
      <p className="menuItemContent">
        <span className="itemTitle">{item.title}:</span>
        <br></br>
        {item.description}
        <br></br>
        {item.price}
      </p>
    </div>
  ));

  //Dessert
  const dessertItems = data.filter((item) => item.category === "Dessert");

  const dessertList = dessertItems.map((item) => (
    <div key={item.id}>
      <p className="menuItemContent">
        <span className="itemTitle">{item.title}:</span>
        <br></br>
        {item.description}
        <br></br>
        {item.price}
      </p>
    </div>
  ));

  // the return. this sends to the display plate and sets up overflow and scroll,
  // adds on click handlers to each menu category that reference the state management above for
  // the dropdowns. and displays the category lists specified above.
  return (
    <div className="appScroll" style={{ overflowY: "scroll" }}>
      <h2 onClick={handleAppToggle} className="menuItemHeader">
        Appetizers
      </h2>
      {appOpen === true ? appetizerList : null}
      <h2 onClick={handleDinToggle} className="menuItemHeader">
        Entrees
      </h2>
      {dinOpen === true ? dinnerList : null}
      <h2 onClick={handleDesToggle} className="menuItemHeader">
        Desserts
      </h2>
      {desOpen === true ? dessertList : null}
    </div>
  );
}

export default Menu;
