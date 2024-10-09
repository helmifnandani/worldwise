import styles from "./Footer.module.css";
function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.copyright}>
				&copy; Copyrigt {new Date().getFullYear()} by WorldWise Inc.
			</p>
		</footer>
	);
}

export default Footer;
