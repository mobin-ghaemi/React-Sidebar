import { useState } from "react";
import { useSetData } from "../../../context/provider/SidebarProvider";
import Item from "../../List/Item";
import Row4 from "./Row4";

const Row3 = ({data}) => {
    const [isShow , setIsShow] = useState(false)
    const setData = useSetData()

    return <Item onOpen={() => setData(data)} data={data.name} hasForm={data.hasForm} onClick={() => setIsShow(!isShow)}>

        {isShow && data.subMenu.map(i => {
            return <ul key={i.id}><Row4 key={i.id} data={i}/></ul>
        })}
    </Item>
}
 
export default Row3;