import React, { useContext } from 'react';
import styles from './Colors.module.css';
//context
import { DarkModeContext } from '../../context/DarkModeContext';
const Colors = () => {
  const { handleAccentColor } = useContext(DarkModeContext);
  const colors = ['#354259', '#bf344d', '#5a708c', '#80a2bf', '#d9b341'];
  const handleClick = (color: string) => handleAccentColor(color);

  return (
    <div className={styles.colors}>
      {colors.map((color, index) => (
        <div
          style={{ backgroundColor: `${color}` }}
          key={index}
          onClick={() => handleClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
