import React, { useContext , useEffect } from 'react'
import { IoFastFood} from "react-icons/io5";
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../dummy-data/food';

const Navbar = () => {
  let {input , setInput , cate , setCate , showCart , setShowCart}=useContext(dataContext)
  useEffect(() => {
  let newList = food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) || item.food_name.includes(input) || item.food_name.toUpperCase().includes(input)) 
  setCate(newList)
  }, [input])
  return (
    <div class="w-full h-[80px] flex justify-evenly items-center shadow-xl">

      <div class=" w-[55px] h-[50px] bg-white flex justify-center items-center text-rose-800 text-[35px] rounded-md shadow-xl">
      <IoFastFood />
      </div>

      <div class="bg-white w-[60%] h-[45px] rounded-md shadow-md">
        <form class='flex justify-evenly items-center pl-2' onSubmit={(e)=>e.preventDefault()}>
        <FaSearch class='text-[22px] text-rose-800'/>
        <input type="search" placeholder='Search your dish ....' className='w-[90%] h-[50px] outline-none cursor-pointer pl-2 text-[15px]' onChange={(e)=>setInput(e.target.value)} value={input}/> 
        </form>
      </div>

      <div class=" w-[55px] h-[55px] bg-white flex justify-center items-center text-rose-800 rounded-md shadow-xl relative" onClick={()=>{
        setShowCart(true)
      }}>
      <span class='absolute top-0 right-1 font-bold'>0</span>
      <FaShoppingCart class='w-[30px] h-[30px]'/>
      </div>

    </div>
  )
}

export default Navbar
