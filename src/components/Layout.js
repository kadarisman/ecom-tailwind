import LogoSearch from "./LogoSearch";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
const Layout = (props) => {
  const cart = props.cart;
  const handleSearch = props.handleSearch;
  return (
    <div className="container mx-auto">
      <TopMenu />
      <LogoSearch cart={cart} handleSearch={handleSearch}/>
      <div className="flex justify-between mt-0 bg-gray-100 py-2 pl-6">
        <ul className="flex gap-14 items-center font-semibold">
          <MainMenu title="Bakery" icon={true} />
          <MainMenu title="Fruit and vegetables" icon={true} />
          <MainMenu title="Meat and fish" icon={false} />
          <MainMenu title="Drink" icon={true} />
          <MainMenu title="Kitchen" icon={true} />
          <MainMenu title="Special nutrition" icon={true} />
          <MainMenu title="Baby" icon={false} />
          <MainMenu title="Pharmacy" icon={true} />
        </ul>
      </div>


      {props.children}

      {/* copyright */}
      <div className="mb-10">
        <h4 className="text-center">Copyright &copy; 2021 - {(new Date().getFullYear())} LeumangShop.com</h4>
      </div>
    </div>
  )
}

export default Layout;