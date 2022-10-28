import styles from './AboutText.module.css';
import { useEffect, useState } from 'react';

const TextTemplate = () => {
  const [textCount, setTextCount] = useState(0);
  const convertedText = ['신입', 'Front-end'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCount(count => (count + 1) % convertedText.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <article className={styles.article}>
      <h1 className={styles.top}>
        Developer
        {convertedText.map((text, index) => (
          <span
            className={`${styles.converted} ${
              index === textCount ? styles.active : styles.hide
            }`}
            key={index}
          >
            {text}
          </span>
        ))}
      </h1>
      <p className={styles.bottom}>
        신입 프론트 엔드 개발자 임동건입니다.
        <br />
        부끄럽지만 제가 만들어온 결과물들과 저를 소개할 수 있는 포트폴리오
        입니다.
        <br />
        겸손함과 함께 포기하지 않고 계속 노력하겠습니다. 감사합니다.
      </p>
    </article>
  );
};

export default TextTemplate;
