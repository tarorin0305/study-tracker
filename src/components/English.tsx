import Header from "../Header";
import SideBar from "./SideBar";
import BurnDownChart from "./BurnDownChart";
const English = () => {
  return (
    <>
      <main className="main">
        <Header />
        <div className="w-full flex">
          <SideBar />
          <BurnDownChart/>
        </div>
      </main>
    </>
  );
};

export default English;
