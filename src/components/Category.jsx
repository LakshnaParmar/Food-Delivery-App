import React from "react";
import { MdFreeBreakfast } from "react-icons/md";
import { TbBorderAll } from "react-icons/tb";
import { TbSoupFilled } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";




export const Categories = [
  
  {
    id: 1,
    name: "All_Menu",
    img: <TbBorderAll className="w-[55px] h-[55px] text-rose-800" />,
  },
  {
    id: 2,
    name: "Breakfast",
    img: <MdFreeBreakfast className="w-[55px] h-[55px] text-rose-800" />,
  },
  {
    id: 3,
    name: "Soups",
    img: <TbSoupFilled  className="w-[55px] h-[55px] text-rose-800" />,
  },
  {
    id: 4,
    name: "Pizza",
    img: <GiFullPizza className="w-[55px] h-[55px] text-rose-800" />,
  },
  {
    id: 5,
    name: "Burger",
    img: <GiHamburger className="w-[55px] h-[55px] text-rose-800" />,
  },
  {
    id: 6,
    name: "Main_Course",
    img: <MdOutlineFoodBank className="w-[55px] h-[55px] text-rose-800" />,
  },
];


const Category = ({filter}) => {
  return (
    <div class='flex flex-wrap justify-center items-center gap-5 w-[100%] mt-[10px]'>
      {
      Categories.map((item) => (
        <div key={item.id} class='w-[140px] h-[130px] bg-white shadow-2xl flex flex-col justify-start items-start gap-5 p-3 text-[15px] font-semibold text-gray-500 rounded-lg hover:bg-rose-600 hover:text-white cursor-pointer' onClick={()=>filter(item.name)}>
          {item.img}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  ); 
};

export default Category;