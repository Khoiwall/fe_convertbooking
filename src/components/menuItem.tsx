import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import react from "react";

interface MenuItemProps {
  tab: {
    name: string;
    pathName: string;
    icon: any;
  };
}

function MenuItemComponent({ tab }: MenuItemProps) {
  return (
    <Link to={tab.pathName}>
      <a>
        <div className="flex items-center">
          <div className="mx-3">
            <span className="icon-sidebar text-color-menu-item">
              <FontAwesomeIcon icon={tab.icon} />
            </span>
          </div>
          <span className="text-sm text-color-menu-item">{tab.name}</span>
        </div>
      </a>
    </Link>
  );
}
export default MenuItemComponent;
