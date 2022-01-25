import SideBar from "./SideBar"
import ChartList from "./ChartList"
const Dashboard = () => {
  return (
    <main className="main">
      <div className="title">
        <h1>Dashboard</h1>
        <p>トップ</p>
      </div>
      <div className="w-full flex">
        <SideBar />
        <ChartList />
      </div>
    </main>
  )
}

export default Dashboard