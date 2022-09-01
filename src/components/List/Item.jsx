import { useState } from "react";
import ContextMenu from "../../ContextMenu/ContextMenu";

const Item = ({ children, data, onClick, hasForm , onOpen }) => {
  const [isShow, setIsShow] = useState(false);
  const [client, setClient] = useState(null);

  const openMenuHandler = (e) => {
    setIsShow(!isShow);
    setClient({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <li>
      <div className="item">
        <div className="center">
          <i onClick={onClick} className="fa fa-plus"></i>
          <span onClick={onOpen}>{data}</span>
        </div>
        {hasForm && (
          <i onClick={openMenuHandler} className="fa fa-ellipsis-v"></i>
        )}
        {isShow && (
          <ContextMenu
            styles={client && { left: client.x / 1.201, top: client.y }}
          />
        )}
      </div>
      {children}
    </li>
  );
};

export default Item;
