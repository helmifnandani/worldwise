import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
	return (
		<div>
			<div className={styles.sidebar}>
				<Logo />
				<AppNav />

				<Outlet />

				<Footer />
			</div>
		</div>
	);
}

export default Sidebar;
