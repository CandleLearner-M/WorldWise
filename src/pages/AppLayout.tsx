import Map from "../Components/Map"
import SideBar from "../Components/SideBar/SideBar"
import styles from "./AppLayout.module.css"

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  )
}