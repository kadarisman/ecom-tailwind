function Footer (){
    return(
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
    )
}

export default Footer;