const Order = () => {
    return(
        <div className="mt-4">
        <h2 className="text-base font-bold mb-3">Order By</h2>

        <div className="mb-1 text-sm">
          <input type="checkbox" className="w-4 h-4" />
          <span className="ml-2">Termurah</span>
        </div>

        <div className="mb-1 text-sm">
          <input type="checkbox" className="w-4 h-4 accent-green-500" checked />
          <span className="ml-2">Terlaris</span>
        </div>

        <div className="mb-1 text-sm">
          <input type="checkbox" className="w-4 h-4 accent-green-500" checked />
          <span className="ml-2">Termahal</span>
        </div>
      </div>
    )
}
export default Order;