"use client";

import React, { useState } from "react";
import styles from "./About.module.css";
import { AboutText, Avatar, Modal, AboutMore } from "../index";

const About = React.forwardRef(() => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <section className={styles.about}>
      <div className={styles.top}>
        <Avatar />
        <AboutText />
      </div>
      <button className={styles.about_btn} onClick={handleToggle}>
        More info
      </button>
      {toggle && (
        <Modal onClose={handleToggle} width="700px">
          <AboutMore />
        </Modal>
      )}
    </section>
  );
});
About.displayName = "About";
export default About;
