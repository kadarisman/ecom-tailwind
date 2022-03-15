import { DownOutlined } from "@ant-design/icons";

function MainMenu(props) {
  return (
    <li className="inline-flex items-center">
      {props.title}
      {props.icon && <DownOutlined className="text-xs ml-1.5 text-gray-500" />}
    </li>
  );
}
export default MainMenu;
