import { HiHome, HiOutlineClock, HiOutlineChartBar } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const navItems = [
  { to: "/", label: "Home", icon: HiHome },
  { to: "/timeline", label: "Timeline", icon: HiOutlineClock },
  { to: "/stats", label: "Stats", icon: HiOutlineChartBar },
]

const NavBar = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-wrap flex items-center justify-between py-3">
        <Logo />

        <nav className="flex items-center gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `inline-flex items-center gap-1 rounded px-2.5 py-1 text-[10px] font-medium transition ${
                  isActive
                    ? "bg-[#215c4b] text-white"
                    : "text-slate-500 hover:bg-slate-100"
                }`
              }
            >
              <Icon className="text-xs" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default NavBar