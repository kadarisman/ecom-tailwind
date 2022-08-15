import { useState, useEffect } from "react";
const Order = (props) => {
  const [orderMurah, setOrderMurah] = useState('bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1');
  const [orderMahal, setOrderMahal] = useState('bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1');

  const handleOrderBy = (e) => {    
    props.product(e.target.id)
    if(e.target.id == 'murah'){
      setOrderMurah('bg-green-600 text-white text-xs px-1.5 py-0.5 rounded mb-1');
      setOrderMahal('bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1');
    }else{
      setOrderMahal('bg-green-600 text-white text-xs px-1.5 py-0.5 rounded mb-1');
      setOrderMurah('bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1');
    }
  }

  return (
    <div className="">
    <h2 className="text-base font-bold">Filter</h2>
    <ul className="text-sm py-3">
      <div className="flex justify-between">
        <button>
          <li className={orderMurah} onClick={(e)=> handleOrderBy(e)} id="murah">Termurah
          </li>
          <li className={orderMahal} onClick={(e)=>handleOrderBy(e)} id="mahal">Termahal
          </li>
        </button>
      </div>    
    </ul>
  </div>
  )
}
export default Order;