import Header from "../Header";
import SideBar from "./SideBar";
import ExpensesDashboard from "./ExpensesDashboard";
import Footer from "./Footer";

const Expenses = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="w-full flex">
          <SideBar />
          <ExpensesDashboard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Expenses