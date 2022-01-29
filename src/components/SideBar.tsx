import { Link } from "react-router-dom"
const SideBar = () => {
  return (
    <aside className="side-bar-container p-4 bg-blue-100 mt-10 mr-8 ml-3">
      <div className="side-bar-inner">
        <ul className="font-serif text-2xl font-semibold">
          <li> <Link to="/english">English</Link> </li>
          <li> <Link to="/expenses">家計簿</Link> </li>
          <li><a href="#">MainWork</a></li>
          <li><a href="#">IFT</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">Math</a></li>
        </ul>
      </div>
    </aside>
  )
}

export default SideBar