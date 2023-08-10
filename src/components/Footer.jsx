import { Link, useLocation } from "react-router-dom";
// CSS
import styles from "./css/Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isHome = useLocation().pathname === "/";
  return (
    <div className={styles.footer}>
      <span>@dition0221</span>
      <div>
        {isHome ? null : (
          <button>
            <Link to={"/"}>🏠</Link>
          </button>
        )}
        <button onClick={scrollToTop}>⬆</button>
      </div>
    </div>
  );
}
