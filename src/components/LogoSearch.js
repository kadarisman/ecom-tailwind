function LogoSearch() {
  return (
    <div className="flex justify-between py-10">
      <h1 className="text-3xl font-bold">LeumangShop</h1>
      <div className="flex w-6/12 justify-center">
        <input
          type="text"
          className="bg-gray-100 w-full rounded-xl border-2 border-gray-300 pl-3 py-1 "
          placeholder="Search Products, categories ..."
        />
        <img
          src="img/icon/search-icon.png"
          alt=""
          className="w-4 h-4 self-center -ml-8"
        />
      </div>
      <div className="flex gap-5">
        <img
          src="img/icon/user-icon.png"
          alt=""
          className="w-7 h-7 self-center"
        />
        <div className="flex relative">
          <img
            src="img/icon/cart-icon.png"
            alt=""
            className="w-7 h-7 self-center"
          />
          <div className="absolute -bottom-1 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-white pl-1 font-bold">
            4
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogoSearch;