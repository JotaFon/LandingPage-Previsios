"use client";

import { useState } from "react";
import Image from "next/image";
import previsiosLogo from "@/images/previsiosLogo.png";
import { header as styles } from "@/styles/components";

const navLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#demo", label: "Demo" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            <Image
              src={previsiosLogo}
              alt="PREVISIOS Logo"
              width={44}
              height={44}
              className={styles.logoImage}
            />
            <span className={styles.logoText}>
              PREVISIO<span className="gradient-text">S</span>
            </span>
          </a>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
