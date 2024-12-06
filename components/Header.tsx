"use client"
import { useCategories } from "@/service/Category"
import { ArrowIcon, Img1, Img2, Img3, LocationIcon, Logo, SearchIcon } from "@/public/images/Icon"
import Login from "./Login"

const Header = () => {
  const categories = useCategories()
  
  return (
    <>
      <div className="bg-[#EBEFF3] flex items-center justify-between px-[130px] py-[13px]">
        <div className="flex items-center">
          <LocationIcon />
          <strong className="ml-[11px] text-[18px] font-bold text-[#545D6A]">Tashkent</strong>
          <div className="flex ml-[25px] items-center gap-[15px]">
            <span className="text-[#545D6A] hover:text-blue-700 duration-300 text-[18px] font-bold">About Us</span>
            <span className="text-[#545D6A] hover:text-blue-700 duration-300 text-[18px] font-bold">Products</span>
            <span className="text-[#545D6A] hover:text-blue-700 duration-300 text-[18px] font-bold">Contacts</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[44px]">
          <a href="tel:+998711234567" className="text-[18px] font-bold text-[#545D6A]">+998 (71) 123-45-67</a>
          <button className="flex items-center gap-[7px]">
            <span className="text-[20px] font-bold text-[#545D6A]">Uz</span>
            <ArrowIcon />
          </button>
        </div>
      </div>

      <div className="px-[130px] py-[30px] flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <h2 className="font-extrabold text-[36px] text-[#134E9B]">Ashyo</h2>
        </div>
        <div className="flex items-center px-[52px] gap-[10px]">
          <button className="w-[160px] border-[2px] hover:scale-[0.9] border-[#134E9B] duration-300 rounded-md hover:border-[2px] text-white py-[14px] bg-[#134E9B] flex items-center justify-center gap-[20px]">
            <span className="font-bold tetx-[16px] duration-300 text-white">Kategorya</span>
            <ArrowIcon />
          </button>
          <label className="w-[518px] my-[16px] border-[2px] flex items-center rounded-md justify-between border-[#EBEFF3] bg-[#EBEFF3]">
            <input className="w-full bg-[#EBEFF3] outline-none px-[26px] text-[13px] font-bold text-black" type="text" placeholder="What are you looking for?" />
            <button className="bg-[#134E9B] text-white rounded-md px-[20px] py-[12px] h-full">
              <SearchIcon />
            </button>
          </label>
        </div>
        <ul className="flex items-center gap-[15px]">
          <li className="w-[50px] h-[50px] cursor-pointer rounded-md bg-[#EBEFF3] p-[12px]">
            <Img1 />
          </li>
          <li className="w-[50px] h-[50px] cursor-pointer rounded-md bg-[#EBEFF3] p-[12px]">
            <Img2 />
          </li>
          <li className="w-[50px] h-[50px] cursor-pointer rounded-md bg-[#EBEFF3] p-[12px]">
            <Img3 />
          </li>
          <Login />
        </ul>
      </div>

      <ul className="px-[130px] flex items-center justify-between mb-[30px]">
        {categories.map((category) => (
          <li key={category.id} className="text-[#545D6A] text-[16px] font-bold cursor-pointer duration-300 hover:text-[#6f6c6c]">
            {category.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Header
