const Order = (props) => {
  const handleOrderBy = (e) => {
    props.product(e.target.id)
  }

  return (
    <div className="">
    <h2 className="text-base font-bold">Categories</h2>
    <ul className="text-sm py-3">
      <div className="flex justify-between">
        <button>
          <li className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1" onClick={(e)=> handleOrderBy(e)} id="murah">Termurah
          </li>
          <li className="bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1" onClick={(e)=>handleOrderBy(e)} id="mahal">Termahal
          </li>
        </button>
      </div>    
    </ul>
  </div>
  )
}
export default Order;