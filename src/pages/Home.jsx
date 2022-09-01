import { useState } from "react";
import AccountApp from "../components/Account/Acc/AccountApp";
import Content from "../components/Content/Content";
import Documents from "../components/Documents/Documents";
import Nav from "../components/Nav/Nav";
import Reports from "../components/Reports/Reports";
import SidebarProvider from "../context/provider/SidebarProvider";

const Home = () => {
  const [single, setSingle] = useState(null);
  return (
    <SidebarProvider>
      <main className="container">
        <div className="home">
          <Nav single={single} setSingle={setSingle} />
          {single === 1 && <AccountApp />}
          {single === 2 && <Documents />}
          {single === 3 && <Reports />}
        </div>
        <Content>
          <p>سلام</p>
        </Content>
      </main>
    </SidebarProvider>
  );
};

export default Home;
