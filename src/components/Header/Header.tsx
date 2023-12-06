"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  filters: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const filters = [
  { item: "about", href: "/about" },
  { item: "Project", href: "/project" },
  { item: "contact", href: "/contact" },
];

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {filters.map(({ item, href }, index) => (
            <li
              key={index}
              className={`${styles.list_item} ${
                pathName === href && styles.selected
              }`}
            >
              <Link href={href}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
