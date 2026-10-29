// Navbar.jsx
import { useEffect, useState } from "react";
import "../../css/landing/navbar.css";

const SCROLL_THRESHOLD = 200; // px scrolled before navbar becomes a floating pill

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer keeps page content from jumping under the now-fixed navbar */}
      <div className="navbar-spacer" aria-hidden="true" />

      <nav className={`navbar ${isScrolled ? "navbar--floating" : ""}`}>
        <a href="#home" className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true"></span>
          The Room
        </a>

        <a href="/room" className="navbar__link">
          Enter Your Room
        </a>
      </nav>
    </>
  );
}

export default Navbar;
