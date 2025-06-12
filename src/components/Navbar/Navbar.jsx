"use client"

import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Menna</span>
        </div>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
