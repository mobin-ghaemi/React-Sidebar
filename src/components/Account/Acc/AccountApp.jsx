import { useState } from "react";
import { data } from "../../../data/data";
import Row1 from "../Rows/Row1";

const AccountApp = () => {
    const [chart , setChart] = useState(data.treeChart)
    return <div className="account">
        {chart.map(i => (<Row1 key={i.id} data={i}/>))}
    </div>;
}
 
export default AccountApp;