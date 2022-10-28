import React from 'react';
import styles from './AboutMore.module.css';
//icons
import { IoIosPerson, IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt, FaGithub, FaLink } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

//components
import { Avatar } from '../index';

const AboutMore = () => {
  return (
    <section className={styles.about_more}>
      <AboutMoreAside />
      <AboutMoreMain />
    </section>
  );
};

export default AboutMore;

function AboutMoreAside() {
  return (
    <aside className={styles.left}>
      <Avatar />
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <IoIosPerson size='18' />
          <span>임동건</span>
        </li>
        <li className={styles.list_item}>
          <FaMapMarkerAlt size='18' />
          <span>서울 특별시 서초구</span>
        </li>
        <li className={styles.list_item}>
          <BsFillTelephoneFill size='18' />
          <span>010-8650-6766</span>
        </li>
        <li className={styles.list_item}>
          <IoMdMail size='18' />
          <a href='mailto:ehdrjs130@gmail.com'>
            <span>ehdrjs130@gmail.com</span>
          </a>
        </li>
        <li className={styles.list_item}>
          <FaLink size='18' />
          <span
            onClick={() => {
              window.open('https://velog.io/@fledgling', '_blank');
            }}
          >
            https://velog.io
          </span>
        </li>
        <li className={styles.list_item}>
          <FaGithub size='18' />
          <span
            onClick={() => {
              window.open('https://github.com/Ldonggun', '_blank');
            }}
          >
            https://github.com
          </span>
        </li>
      </ul>
    </aside>
  );
}

function AboutMoreMain() {
  return (
    <main className={styles.right}>
      <div className={styles.about_me}>
        <h2 className={styles.title}>About me</h2>
        <p>
          신입 프론트 엔드 개발자 임동건입니다. 부끄럽지만 제가 만들어온
          결과물들과 저를 소개할 수 있는 포트폴리오입니다. 저는 개발자와 관련된
          전공이 아니었습니다. 개발에 대한 관심은 인터넷에서 떠도는 많은
          광고들이었습니다. 무지했던 상태로 부트 캠프에 도전했고 힘들게 수료는
          하였지만, 스스로에 대한 부족함을 많이 느꼈습니다.
          <br /> 현재는 조급함을 버리고 조금씩 성장하기 위해 강의와 도서를
          통해서 배운 지식으로 개인 프로젝트와 블로그 운영으로 부족한 부분들을
          채우려고 노력 중입니다.
          <br /> 부끄럽지만 관심 주셔서 감사합니다.
        </p>
      </div>
      <div>
        <h2 className={styles.title}>Skill</h2>
        <div className={styles.skill_list}>
          <ul>
            <li>HTML5/CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Education</h2>
        <ul className={styles.education_list}>
          <li>
            <div className={styles.list_inner}>
              <div className={styles.time}>
                <span>2022 ~ </span>
              </div>
              <div className={styles.todo}>
                <h3>성장중~</h3>
                <span>...</span>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list_inner}>
              <div className={styles.time}>
                <span>2021.12</span>
              </div>
              <div className={styles.todo}>
                <h3>스파르타 코딩 클럽</h3>
                <span>항해 99 프론트 엔드 수료</span>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list_inner}>
              <div className={styles.time}>
                <span>2020</span>
              </div>
              <div className={styles.todo}>
                <h3>학점은행제 졸업</h3>
                <span>경영학사</span>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.list_inner}>
              <div className={styles.time}>
                <span>2015 ~ 2018</span>
              </div>
              <div className={styles.todo}>
                <h3>한남대학교</h3>
                <span>행정학과 입학 / 중퇴</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.certificate_list}>
        <h2 className={styles.title}>Certificate</h2>
        <ul>
          <li>TOEIC : 855</li>
        </ul>
      </div>
    </main>
  );
}
