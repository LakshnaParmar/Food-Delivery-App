import {React, useContext} from 'react'
import {RxCross2} from 'react-icons/rx'
import { dataContext } from '../context/UserContext'
import ShoppingCard2 from './ShoppingCard2'
import { useSelector } from 'react-redux'
import TotalPrice from './TotalPrice'

const ShopppingCard = () => {
    let {showCart, setShowCart} = useContext(dataContext)
    let items = useSelector(state=>state.cart)
  return (
    <div class={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 cursor-pointer overflow-auto ${showCart?"translate-x-0" : "translate-x-full"}`}>
      <div class='w-[100%] flex justify-between items-center'>
        <span class='text-red-800 text-[18px] font-semibold'>Order items</span>
        <RxCross2 class='w-[30px] h-[30px] text-red-800 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
      </div>

      {
      items.length>0?(
      <div>
          <div class ='w-full mt-9 flex flex-col gap-8'>
          {items.map((item)=>(
          <ShoppingCard2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
              ))}
              {console.log('Shop', items)}
          </div>
          <TotalPrice/>
       </div>
       ):(
          <div class='text-center font-semibold text-2xl text-rose-800 pt-5'>Empty Cart</div>
       )
       }

    </div>
  )
}

export default ShopppingCard
