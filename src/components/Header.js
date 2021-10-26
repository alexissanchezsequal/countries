// Components
import Buttom from "./Buttom"
// hooks
import { useTheme } from "../hooks/useTheme"
import { HiOutlineMoon } from "react-icons/hi"
const icon = <HiOutlineMoon size={18} />

const Header = () => {
  const [skin, setSkin] = useTheme()

  return (
    <header className="header">
      <div className="wrapper flex f-center-y f-btw">
        <h1>Where in the world?</h1>
        <Buttom
          icon={icon}
          title={`${skin} Mode`}
          className="theme-btn"
          onclick={() => setSkin(skin === "Dark" ? "Light" : "Dark")}
        />
      </div>
    </header>
  )
}

export default Header
