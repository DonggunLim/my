import React, { useContext } from 'react';
import styles from './Setting.module.css';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
//component
import { Colors } from '../index';
//context
import { DarkModeContext } from '../../context/DarkModeContext';

const Setting = () => {
  // const positionRef = React.useRef({ x: 0, y: 0 });
  const mousePointerRef = React.useRef({ x: 0, y: 0 });
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleMouseDown = (e: React.MouseEvent) => {
    // 마우스 커서 위치 할당
    mousePointerRef.current.x = e.clientX;
    mousePointerRef.current.y = e.clientY;
  };

  const handleDragStart = (e: React.DragEvent) => {
    // drag시  gohst 이미지 교체
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const handleDrag = (e: React.DragEvent) => {
    const target = e.target! as HTMLDivElement;

    const posX = target.offsetLeft + e.clientX - mousePointerRef.current.x;
    const posY = target.offsetTop + e.clientY - mousePointerRef.current.y;

    target.style.top = posY + 'px';
    target.style.left = posX + 'px';

    mousePointerRef.current.x = e.clientX;
    mousePointerRef.current.y = e.clientY;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target! as HTMLDivElement;
    target.style.top =
      target.offsetTop + e.clientY - mousePointerRef.current.y + 'px';
    target.style.left =
      target.offsetLeft + e.clientX - mousePointerRef.current.x + 'px';
  };

  return (
    <div
      className={styles.wrap}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onMouseDown={handleMouseDown}
      draggable='true'
    >
      <div className={styles.setting}>
        <span onClick={toggleDarkMode} className={styles.icon}>
          {darkMode ? <BsSunFill size={25} /> : <BsMoonFill size={25} />}
        </span>
        <Colors />
      </div>
    </div>
  );
};

export default Setting;
