import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const TotalPrice = () => {
    let item = useSelector(state=>state.cart)
    let subtotal=item.reduce((total,item)=>total+item.qty*item.price,0)
    let deliveryFee = 20;
    let texes = subtotal*0.5/100; 
    let total = Math.floor(subtotal+deliveryFee+texes)
    
  return (
    <div>
    <div class='w-fulll border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
     <div class='w-full flex justify-between items-center'>
      <span class='text-lg text-gray-600 font-semibold'> Subtotal </span>
      <span class='text-rose-800 font-semibold text-lg'>Rs {subtotal}/- </span>
     </div>

     <div class='w-full flex justify-between items-center'>
      <span class='text-lg text-gray-600 font-semibold'> Delivery Fee </span>
      <span class='text-rose-800 font-semibold text-lg'>Rs {deliveryFee}/- </span>
     </div>
     
     <div class='w-full flex justify-between items-center'>
      <span class='text-lg text-gray-600 font-semibold'> Texes </span>
      <span class='text-rose-800 font-semibold text-lg'>Rs {texes}/- </span>
     </div>
     </div>

     <div class='w-full flex justify-between items-center p-9'>
      <span class='text-2xl text-gray-600 font-semibold'>Total</span>
      <span class='text-rose-800 font-semibold text-xl'>Rs {total}/- </span>
     </div>
     <div class='flex justify-center items-center'>
     <button class='w-[80%] p-3 rounded-lg bg-rose-800 text-white font-semibold hover:bg-rose-600 transition-all cursor-pointer' onClick={()=>{toast.success('Order Place ...')}}>Place Order</button>
     </div>
     </div>
  )
}

export default TotalPrice
