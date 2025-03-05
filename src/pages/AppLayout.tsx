import Map from "../Components/Map"
import SideBar from "../Components/SideBar/SideBar"
import User from "../Components/User"
import styles from "./AppLayout.module.css"

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  )
}