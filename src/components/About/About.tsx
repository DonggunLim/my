import React from 'react';
import styles from './About.module.css';

//components
import { AboutText, Avatar } from '../index';

const About = React.forwardRef((_props, ref) => {
  return (
    <section
      className={styles.about}
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[1] = node!;
      }}
      data-aos='fade-right'
      data-aos-offset='0'
    >
      <div className={styles.top}>
        <Avatar />
        <AboutText />
      </div>
      <button className={styles.about_btn}>More info</button>
    </section>
  );
});

export default About;
