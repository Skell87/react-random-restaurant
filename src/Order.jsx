// about function, sets a menu item header and text content about the place.
import React, { useState, useEffect } from "react"
import axios from 'axios'; 
import PhoneInput from 'react-phone-number-input'



function Order(){
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // customer name, phone, food+quantity
        console.log("THIS IS THE FORM DATA", formData)
        axios.post('http://127.0.0.1:8000/customer/', formData)
        .then(response => {
            console.log('succesfully submitted customer.', response.data);
            setFormData({
                first_name: '',
                last_name: '',
                phone_number: ''
            })
        })
        .catch(error => {
            console.log('error submitting user info', error);
        })
    }

    function handleAddToAppetizer(itemId, itemName, itemPrice){
        const newAppetizer = {id: itemId, title: itemName, price: itemPrice};
        setFormData(prevState => ({
            ...prevState, 
            appetizers: [...prevState.appetizers, newAppetizer]
        }))
    }

    function handleAddToEntree(itemId, itemName, itemPrice){
        const newEntree = {id: itemId, title: itemName, price: itemPrice};
        setFormData(prevState => ({
            ...prevState, 
            entrees: [...prevState.entrees, newEntree]
        }))
    }

    function handleAddToDessert(itemId, itemName, itemPrice){
        const newDessert = {id: itemId, title: itemName, price: itemPrice};
        setFormData(prevState => ({
            ...prevState, 
            desserts: [...prevState.desserts, newDessert]
        }))
    }
    

    const [data, setData] = useState([]) 
    const [appOpen, setAppOpen] = useState(false);
    const [dinOpen, setDinOpen] = useState(false);
    const [desOpen, setDesOpen] = useState(false);
    
    //api call happening asynchronusly from custom JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await 
                axios.get('http://127.0.0.1:8000/food/');
                setData(response.data);
                // console.log(response.data)
            } catch (error) {
                console.error ('error fetching data', error)
            }
        };

        fetchData();
    
    }, []);


    //this function is for the dropdown toggle
    function handleAppToggle(){
        if (appOpen === true){
            setAppOpen(false) 
        }else{
            setAppOpen(true)
        }
    }
    function handleDinToggle(){
        if (dinOpen === true){
            setDinOpen(false) 
        }else{
            setDinOpen(true)
        }
    }
    function handleDesToggle(){
        if (desOpen === true){
            setDesOpen(false) 
        }else{
            setDesOpen(true)
        }
    }
    


    // console.log(data)
    
    //Appetizers: this block of code pulls the appetizer items by category
    const appetizerItems = data.filter(item => item.category === "Appetizer");
    // console.log("appetizer Items:", appetizerItems)

    //this maps the retrieved appetizer items and displays them on page with their price, description and name.
    // custom css added to certain elements of the text.
    //page breaks for effect and separation
    const appetizerList = appetizerItems.map(item => (
        
            <div key = {item.id}>
        
            <p className="menuItemContent"><span className="itemTitle">{item.title}:</span><br></br>{item.description}<br></br>{item.price}</p>
            <button onClick={()=> handleAddToAppetizer(item.id, item.title, item.price)}>add</button>
        </div>
    ));
    // console.log("appetizer List:", appetizerList)

    //Dinner
    const dinnerItems = data.filter(item => item.category === "Entree");
    console.log("dinner items:", dinnerItems)

    const dinnerList = dinnerItems.map(item => (
        <div key = {item.id}>
            <p className="menuItemContent"><span className="itemTitle">{item.title}:</span><br></br>{item.description}<br></br>{item.price}</p>
            <button onClick={()=> handleAddToEntree(item.id, item.title, item.price)}>add</button>
        </div>
    ));

    //Dessert
    const dessertItems = data.filter(item => item.category === "Dessert");
    
    const dessertList = dessertItems.map(item => (
        <div key = {item.id}>
            <p className="menuItemContent"><span className="itemTitle">{item.title}:</span><br></br>{item.description}<br></br>{item.price}</p>
            <button onClick={()=> handleAddToDessert(item.id, item.title, item.price)}>add</button>
        </div>
    ))
    

    return(
        <div className="orderInfo">
            <div className="orderInput">
                <span className="menuItemHeader">Order</span>
                <input type="text" value={formData.first_name} onChange={(e => setFormData({...formData, first_name: e.target.value}))} placeholder="first name"/>
                <input type="text" value={formData.last_name} onChange={(e => setFormData({...formData, last_name: e.target.value}))} placeholder="last name"/>
                <input type='text' value={formData.phone_number} onChange={(e => setFormData({...formData, phone_number: e.target.value}))} placeholder="phone number"/>
                
            </div>
            <div className="appScroll" style={{overflowY: 'scroll'}}>

                <h2 onClick={handleAppToggle} className="menuItemHeader">Appetizers</h2>
                {appOpen === true ? appetizerList:null}
                
                <h2 onClick={handleDinToggle} className="menuItemHeader">Entrees</h2>
                {dinOpen === true ? dinnerList:null}
                <h2 onClick={handleDesToggle} className="menuItemHeader">Desserts</h2>
                {desOpen === true ? dessertList:null}
            </div>
            <button onClick={handleFormSubmit} className="submitButton">Submit Order</button>
        </div>
    )
}

export default Order 