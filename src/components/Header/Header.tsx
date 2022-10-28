import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  filters: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ filters, filter, setFilter }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {filters.map((item, index) => (
            <li
              className={`${styles.list_item} ${
                filter === item ? styles.selected : ''
              }`}
              key={index}
              onClick={() => {
                setFilter(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
