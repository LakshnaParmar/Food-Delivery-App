import React from 'react'
import {RxCross2} from 'react-icons/rx'

const ShopppingCard = () => {
  return (
    <div class={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${showCart?"translate-x-0" : "translate-x-full"}`}>
      <div class='w-[100%] flex justify-between items-center'>
        <span class='text-red-800 text-[18px] font-semibold'>Order items</span>
        <RxCross2 class='w-[30px] h-[30px] text-red-800 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
      </div>
    </div>
  )
}

export default ShopppingCard
