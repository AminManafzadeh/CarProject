import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <Link href="/">
        <header className={styles.header}>
          <h2 className={styles.h2}>Car</h2>
          <p className={styles.p}>Choose and Buy Car</p>
        </header>
      </Link>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="#" target="_blank">
          Next.js Courses | Car Project &copy;
        </a>
      </footer>
    </div>
  );
}

export default Layout;
