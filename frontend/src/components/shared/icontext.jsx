import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const IconText = ({ logoname, displaytext, targetlink, onClick }) => {
  return (
    <>
      <Link to={targetlink} className="block">
        <div
          className="flex cursor-pointer text-center text-white px-5 py-1 gap-2 hover:text-green-500 active:text-green-500"
          onClick={onClick}
        >
          <div>
            <Icon icon={logoname} width="30" />
          </div>
          <div>{displaytext}</div>
        </div>
      </Link>
    </>
  );
};
export default IconText;
