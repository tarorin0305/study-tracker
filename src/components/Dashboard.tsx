import SideBar from "./SideBar"
import ChartList from "./ChartList"
import Header from "../Header"
const Dashboard = () => {
  return (
    <main className="main">
        <Header />
      <div className="w-full flex">
        <SideBar />
        <ChartList />
      </div>
    </main>
  )
}

export default Dashboard