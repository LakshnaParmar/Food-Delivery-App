import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Card from '../components/Card'
import { food_items } from '../dummy-data/food'
import { dataContext } from '../context/UserContext'
import ShopppingCard from '../components/ShopppingCard'


const Home = () => {
    
    let {cate, setCate, showCart, setShowCart} = useContext(dataContext) 

    function filter(category) {
      if (category==="All_Menu") {
        setCate(food_items)
      }else{
      let newList = food_items.filter((item) => (item.food_category===category.toLowerCase()))
      setCate(newList)    
      }
    }
  return (
    <div class= "w-full min-h-screen bg-gray-300">
      <Navbar />
      <Category filter={(filter)} />
      <div class='w-full flex flex-wrap justify-center items-center gap-5'>
        {
          cate.map((item)=>(
            <Card food_name={item.food_name} food_image={item.food_image} food_price={item.food_price} food_type={item.food_type}/>
          ))
        }
      </div>
      <ShopppingCard/>
    </div>
  )
}

export default Home 