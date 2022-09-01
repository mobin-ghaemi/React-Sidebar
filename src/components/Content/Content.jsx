import { useState } from "react";
import { useGetData } from "../../context/provider/SidebarProvider";
import { tableData } from "../../data/table";
import "./Content.css";
const Content = () => {
  const data = useGetData();
  const [tData, setTData] = useState(tableData);
  if (data) {
    return (
      <div className="content" dir="rtl">
        <table className="table">
          <thead>
            <tr>
              <th>{data.name}</th>
              <th>{tData.header.code}</th>
              <th>{tData.header.date}</th>
              <th>{tData.header.time}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {tData.data.column.map((i) => (
                <td key={i.field}>{i.title}</td>
              ))}
            </tr>
          </tbody>
          <tfoot>
            {tData.data.data.map((i, n) => {
              return (
                <>
                  <tr key={n}>
                    <td>{i.date}</td>
                    <td>{i.code}</td>
                    <td>{i.description}</td>
                    <td>{i.bes}</td>
                    <td>{i.bed}</td>
                    <td>{i.remaining}</td>
                    <td>{i.row}</td>
                  </tr>
                </>
              );
            })}
          </tfoot>
        </table>
      </div>
    );
  }
  return (
    <div className="content">
      <p>چیزی یافت نشد</p>
    </div>
  );
};

export default Content;
