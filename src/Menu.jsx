import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Menu() {
    const [data, setData] = useState([]) 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await 
                axios.get('https://raw.githubusercontent.com/Skell87/menu/main/menu2.json');
                setData(response.data);
                // console.log(response.data)
            } catch (error) {
                console.error ('error fetching data', error)
            }
        };

        fetchData();
    
    }, []);

    console.log(data)
    
    //Appetizers
    const appetizerItems = data.filter(item => item.category === "Appetizer");
    console.log("appetizer Items:", appetizerItems)

    const appetizerList = appetizerItems.map(item => (
        <div key = {item.id}>
            <p className="menuItemContent"><span className="itemTitle">{item.title}:</span><br></br>{item.description}<br></br>{item.price}</p>
        </div>
    ));
    console.log("appetizer List:", appetizerList)

    //Dinner
    const dinnerItems = data.filter(item => item.category === "Entree");
    console.log("dinner items:", dinnerItems)

    const dinnerList = dinnerItems.map(item => (
        <div key = {item.id}>
            <p className="menuItemContent"><span className="itemTitle">{item.title}:</span><br></br>{item.description}<br></br>{item.price}</p>
        </div>
    ));

    //Dessert
    const dessertItems = data.filter(item => item.category === "Dessert");
    
    const dessertList = dessertItems.map(item => (
        <div key = {item.id}>
            <p className="menuItemContent"><span className="itemTitle">{item.title}:</span><br></br>{item.description}<br></br>{item.price}</p>
        </div>
    ))
     
    return (
        <div className="appScroll" style={{overflowY: 'scroll'}}>
            <h2 className="menuItemHeader">Appetizers</h2>
            {appetizerList}
            <h2 className="menuItemHeader">Entrees</h2>
            {dinnerList}
            <h2 className="menuItemHeader">Desserts</h2>
            {dessertList}
        </div>
    )
}

export default Menu