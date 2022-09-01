import { useSetData } from "../../../context/provider/SidebarProvider";
import Item from "../../List/Item";

const Row4 = ({data}) => {
    const setData = useSetData()

    return <Item onOpen={() => setData(data)} data={data.name}>
        
    </Item>;
}
 
export default Row4;