import { useState } from "react";
import { data } from "../../data/data";

const Documents = () => {
    const [documents , setDocuments] = useState(data.documents)
    return <ul className="documents">
        {documents.map(i => (<li key={i.id}>{i.name}</li>))}
    </ul>;
}
 
export default Documents;