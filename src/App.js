import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Divider } from 'antd';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

 

function App() {

  const[foodForm, setFoodForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 1
  })

  const updateFoodForm = event => {
    setFoodForm({
      ...foodForm, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const handleAddFood = event => {
    event.preventDefault();
  
    const foodFormCopy = {...foodForm}

    setFoodArray([
      ...foodArray,
      foodFormCopy
    ])
  
    setFoodForm({
      name: '',
      image: '',
      calories: 0,
      servings: 1
    })

  }


  const [foodArray, setFoodArray] = useState(foods);
  const [filteredFoodArray, setFilteredFoodArray] = useState(foods);

  const [search, setSearch] = useState('');

  const updateSearch = event => {

    const newFilteredArray = foodArray.filter(individualFood => {
      return individualFood.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    });

    setFilteredFoodArray(newFilteredArray);

    setSearch(event.currentTarget.value);
  }

  const handleDeleteFood = name => {
    const foundFoodIndex = foodArray.findIndex(individualFood => individualFood.name === name)

    const foodArrayCopy = [...foodArray];
    
    const removedFood = foodArrayCopy.splice(foundFoodIndex, 1);

    const newFilteredArray = foodArrayCopy.filter(individualFood => {
      return individualFood.name.toLowerCase().includes(search.toLowerCase())
    });
    
    setFoodArray(foodArrayCopy);

    setFilteredFoodArray(newFilteredArray);



  }

  return ( 
  <div className="App">
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }}>
    <AddFoodForm foodForm={foodForm} updateFoodForm={updateFoodForm} handleAddFood={handleAddFood} />
    <Search search={search} updateSearch={updateSearch} />
  </div>
  <Divider> Food List </Divider>
  <Row style={{ width: '100%', justifyContent: 'center' }}>
    {filteredFoodArray.map(eachFood => {
        return  <FoodBox food={eachFood} handleDeleteFood={handleDeleteFood} />
    })}
  </Row>
  </div>
  )
}

export default App;
