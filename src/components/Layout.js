import LogoSearch from "./LogoSearch";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
const Layout = (props) => {
    return(
        <div className="container mx-auto">
        {/* top menu*/}
        <TopMenu />
        {/* logo dan search */}
        <LogoSearch />
        {/* main menu */}
        <div className="flex justify-between mt-0 bg-gray-100 py-2 pl-6">
          <ul className="flex gap-14 items-center font-semibold">
            <MainMenu title="Bakery" icon={true} />
            <MainMenu title="Fruit and vegetables" icon={true} />
            <MainMenu title="Meat and fish" icon={false}/>
            <MainMenu title="Drink" icon={true}/>
            <MainMenu title="Kitchen" icon={true}/>
            <MainMenu title="Special nutrition" icon={true}/>
            <MainMenu title="Baby" icon={false}/>
            <MainMenu title="Pharmacy" icon={true}/>
          </ul>
        </div>

        {props.children}
       
        {/* copyright */}
        <div className="mb-10">
          <h4>Copyright &copy; 2022 petrbilek.com</h4>
        </div>      
      </div>
    )
}

export default Layout;