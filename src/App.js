import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      {/* top menu*/}
      <div className="flex justify-between border-b border-slate-300 py-2 text-sm">
        <div className="flex gap-8">
          <a href="#" className="text-green-500">
            Chat with us
          </a>
          <p>+62 852 7069 9263</p>
          <p>yuzarqadariesman@gmail.com</p>
        </div>

        <div className="">
          <ul className="flex gap-8 text-green-500">
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>

      {/* logo dan search */}
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
            className="w-4 h-4 self-center -ml-8"
          />
        </div>
        <div className="flex gap-5">
          <img src="img/icon/user-icon.png" className="w-7 h-7 self-center" />
          <div className="flex relative">
            <img src="img/icon/cart-icon.png" className="w-7 h-7 self-center" />
            <div className="absolute -bottom-1 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-white pl-1 font-bold">
              4
            </div>
          </div>
        </div>
      </div>

      {/* main menu */}
      <div className="flex justify-between mt-0 bg-gray-100 py-2 pl-6">
        <ul className="flex gap-14 items-center font-semibold">
          <li className="inline-flex">
            Bakeri
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Fruit and vegetables
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Meat and fish
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Drink
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Kitchen
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Special nutrition
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Baby
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
          <li className="inline-flex">
            Pharmacy
            <svg
              className="ml-1 w-3 h-3 mt-1 stroke-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </li>
        </ul>
      </div>

      {/* main */}
      <div className="flex justify-between py-16">
        {/* sidebar */}
        <div className="w-1/5 ">
          {/* categories */}
          <div className="">
            <h2 className="text-base font-bold">Categories</h2>
            <ul className="text-sm py-3">
              <li className="flex justify-between mb-1">
                Bolu
                <span className="text-green-500 bg-gray-100 p-1 rounded-lg">320</span>
              </li>
              <li className="flex justify-between mb-1">
                Mie
                <span className="text-green-500 bg-gray-100 p-1 rounded-lg">112</span>
              </li>
              <li className="flex justify-between mb-1">
                Pizza
                <span className="text-green-500 bg-gray-100 p-1 rounded-lg">32</span>
              </li>
              <li className="flex justify-between mb-1">
                Dessert
                <span className="text-green-500 bg-gray-100 p-1 rounded-lg">48</span>
              </li>
            </ul>
          </div>

          {/* order */}
          <div className="mt-4">
            <h2 className="text-base font-bold mb-3">Order By</h2>

            <div className="mb-1 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <span className="ml-2">Termurah</span>
            </div>

            <div className="mb-1 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 accent-green-500"
                checked
              />
              <span className="ml-2">Terlaris</span>
            </div>

            <div className="mb-1 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 accent-green-500"
                checked
              />
              <span className="ml-2">Termahal</span>
            </div>
          </div>

          {/* rating */}
          <div className="mt-6">
            <h2 className="text-base font-bold mb-3">Rating</h2>

            <div className="mb-3 flex">
              <input type="checkbox" className="w-4 h-4" />
              <ul className="flex ml-2">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>

            <div className="mb-3 flex">
              <input type="checkbox" className="w-4 h-4" />
              <ul className="flex ml-2">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>

            <div className="mb-3 flex">
              <input type="checkbox" className="w-4 h-4" />
              <ul className="flex ml-2">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>

            <div className="mb-3 flex">
              <input type="checkbox" className="w-4 h-4" />
              <ul className="flex ml-2">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>

            <div className="mb-3 flex">
              <input type="checkbox" className="w-4 h-4" />
              <ul className="flex ml-2">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="w-3 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    className="w-3 text-gray-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          {/* price */}
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
                  <input type="email" className="bg-gray-100 w-2/5 rounded-xl border-2 border-gray-300 pl-3 py-1 " placeholder="0" />
                  <input type="email" className="bg-gray-100 w-2/5 rounded-xl border-2 border-gray-300 pl-3 py-1 " placeholder="000" />
                </div>
                <div className="flex mt-6 gap-7">
                  <button className="bg-green-600  text-white font-bold py-2 px-4 rounded-xl">Apply</button>
                  <button className="bg-gray-200 font-bold py-2 px-4 rounded-xl">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* product */}
        <div className="w-4/5">

        

        <div className="flex flex-wrap  justify-center gap-8">

        <div className="flex gap-8">
          <div className="border-2 border-gray-200 px-3 rounded-lg">
            <img src="img/product/product01.png" className="mt-3"/>
            <h2 className="font-bold mb-3 mt-3">Bolu Susun</h2>
            <p className="text-gray-500 text-xs">Disusun dengan penuh kenangan</p>
            <div className="flex justify-between mt-3">
            <div className="flex-col">
            <p className="font-bold">36.000</p>
            <p className="text-gray-500 text-xs line-through">40.000</p>
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
            </div>
          </div>

          <div className="border-2 border-gray-200 px-3 rounded-lg">
            <img src="img/product/product02.png" className="mt-3"/>
            <h2 className="font-bold mb-3 mt-3">Mie Aceh</h2>
            <p className="text-gray-500 text-xs">Rasanya menusuk jiwa dan raga</p>
            <div className="flex justify-between mt-3">
            <div className="flex-col">
            <p className="font-bold">26.000</p>
            <p className="text-gray-500 text-xs line-through">30.000</p>
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
            </div>
          </div>

          <div className="border-2 border-gray-200 px-3 rounded-lg">
            <img src="img/product/product03.png" className="mt-3"/>
            <h2 className="font-bold mb-3 mt-3">Bolu Lapis</h2>
            <p className="text-gray-500 text-xs">Lapisan legit disetiap sentuhan</p>
            <div className="flex justify-between mt-3">
            <div className="flex-col">
            <p className="font-bold">42.000</p>
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
            </div>
          </div>

        </div>

        <div  className="flex gap-8">

          <div className="border-2 border-gray-200 px-3 rounded-lg">
            <img src="img/product/product06.png" className="mt-3"/>
            <h2 className="font-bold mb-3 mt-3">Donat</h2>
            <p className="text-gray-500 text-xs">Rasa nya bikin hangat</p>
            <div className="flex justify-between mt-3">
            <div className="flex-col">
            <p className="font-bold">15.000</p>
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
            </div>
          </div>

          <div className="border-2 border-gray-200 px-3 rounded-lg">
            <img src="img/product/product05.png" className="mt-3"/>
            <h2 className="font-bold mb-3 mt-3">Pizza Huut</h2>
            <p className="text-gray-500 text-xs">Potongan penuh nikmat dan lezat</p>
            <div className="flex justify-between mt-3">
            <div className="flex-col">
            <p className="font-bold">30.000</p>
            <p className="text-gray-500 text-xs line-through">40.000</p>
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
            </div>
          </div>

          <div className="border-2 border-gray-200 px-3 rounded-lg">
            <img src="img/product/product04.png" className="mt-3"/>
            <h2 className="font-bold mb-3 mt-3">Mata Sapi</h2>
            <p className="text-gray-500 text-xs">Rasanya tidak seperti Mata Najwa</p>
            <div className="flex justify-between mt-3">
            <div className="flex-col">
            <p className="font-bold">12.000</p>
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>

       </div>

        <div className="flex justify-center mt-14">
        <button data-dropdown-toggle="dropdown" class="text-white bg-green-600 font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
          Show more product 
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        </div>        


        </div>      

      </div>

       {/* footer */}
       <div className="flex justify-between mb-8">

          <div className="">
            <h2 className="font-bold mb-4">Get in touch</h2>
            <ul className="text-sm text-green-600">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Press Releases</li>
              <li className="mb-2">Blog</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold mb-4">Connections</h2>
            <ul className="text-sm text-green-600">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Youtube</li>
              <li className="mb-2">LinkedIn</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold mb-4">Earnings</h2>
            <ul className="text-sm text-green-600">
              <li className="mb-2">Become an Affiliate</li>
              <li className="mb-2">Advertise your product</li>
              <li className="mb-2">Sell on Market</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold mb-4">Account</h2>
            <ul className="text-sm text-green-600">
              <li className="mb-2">Your account</li>
              <li className="mb-2">Return Center</li>
              <li className="mb-2">100 % purchase protection</li>
              <li className="mb-2">Chat with us</li>
              <li className="mb-2">Help</li>
            </ul>
          </div>

        </div>

        {/* copyright */}
        <div className="mb-10">
          <h4>Copyright &copy; 2022 petrbilek.com</h4>
        </div>

    </div>
  );
}

export default App;
