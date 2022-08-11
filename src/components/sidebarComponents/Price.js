const Price = () => {
    return(
        <div className="mt-6">
        <h2 className="text-base font-bold mb-3">Price</h2>
        <div className="flex justify-between items-center py-5">
          <input
            type="range"
            className="rotate-180 form-range  w-full h-1 p-0 bg-gray-200 focus:outline-none focus:ring-0 focus:shadow-sm"
            min="0"
            max="5"
          />
          <input
            type="range"
            className="form-range -ml-1 appearance-bar w-full h-1 p-0 bg-gray-200 focus:outline-none focus:ring-0 focus:shadow-sm"
            min="0"
            max="5"
          />
        </div>
        <div className="">
          <div className="flex justify-between w-3/4">
            <span className="font-bold text-sm">Min</span>
            <span className="font-bold text-sm">Max</span>
          </div>
          <form>
            <div className="flex justify-between gap-3">
              <input
                type="email"
                className="bg-gray-100 w-2/5 rounded-xl border-2 border-gray-300 pl-3 py-1 "
                placeholder="0"
              />
              <input
                type="email"
                className="bg-gray-100 w-2/5 rounded-xl border-2 border-gray-300 pl-3 py-1 "
                placeholder="000"
              />
            </div>
            <div className="flex mt-6 gap-7">
              <button className="bg-green-600  text-white font-bold py-2 px-4 rounded-xl">
                Apply
              </button>
              <button className="bg-gray-200 font-bold py-2 px-4 rounded-xl">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Price;