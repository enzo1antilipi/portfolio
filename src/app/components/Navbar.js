'use client'

import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState,useEffect } from 'react';
const Navbar = () => {

const [isMenuOpen,setIsMenuOpen]= useState (false)

const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
}

  const closeMenu = (event) => {
        if (!event.target.closest(`.${styles.navbar}`)) {
            setIsMenuOpen(false);
        }
    };
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cierra el menú cuando se hace clic en una opción
  };

  useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', closeMenu);
        } else {
            document.removeEventListener('click', closeMenu);
        }

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <Link href="#inicio" className={styles.logoContainer}>
   <img src="/foto_enzo.png" alt="Logo empresa" className={styles.imageNavbar} />
    
  </Link>
       <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    ☰
                </button>
        
    <div className={`${styles.navLinks_container}  ${isMenuOpen ? styles.show : ""}`}>
      <ul className={styles.navList}>
         
        <li><Link href="#inicio" className={styles.navItem}>Inicio</Link></li>
        <li><Link href="#sobre-mi"onClick={handleLinkClick} className={styles.navItem}>Sobre mi</Link></li>
        <li><Link href="#experiencia"  onClick={handleLinkClick} className={styles.navItem}>Experiencia</Link></li>
        <li><Link href="#proyects"  onClick={handleLinkClick} className={styles.navItem}>Proyectos</Link></li>
        <li><Link href="#contacto"  onClick={handleLinkClick} className={styles.navItem}>Contacto</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
