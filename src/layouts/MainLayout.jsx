import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const MainLayout = () => {
  return (
    <div className="page-shell">
      <div className="app-surface">
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout