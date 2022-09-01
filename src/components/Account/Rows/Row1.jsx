import { useState } from "react";
import { useSetData } from "../../../context/provider/SidebarProvider";
import Item from "../../List/Item";
import Row2 from "./Row2";

const Row1 = ({data}) => {
    const [isShow , setIsShow] = useState(false)
    const setData = useSetData()

    return <ul>
        <Item onOpen={() => setData(data)} data={data.name} hasForm={data.hasForm} onClick={() => setIsShow(!isShow)}>
            {isShow && data.subMenu.map(i => {
                return <ul key={i.id}><Row2 key={i.id} data={i}/></ul>
            })}
        </Item>
    </ul>;
}
 
export default Row1;