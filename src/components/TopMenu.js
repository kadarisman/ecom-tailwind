function TopMenu() {
  return (
    <div className="flex justify-between border-b border-slate-300 py-2 text-sm">
      <div className="flex gap-8">
        <a href="https://www.google.com/" className="text-green-500">
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
  );
}
export default TopMenu;
