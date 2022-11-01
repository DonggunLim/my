import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useRef } from 'react';
import styles from './Carousel.module.css';
//icons
import { FaArrowRight, FaArrowLeft, FaGithub, FaLink } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
//type
import { ProjectType } from '../Projects/Projects';
import Modal from '../Modal/Modal';

interface CarouselProps {
  data: ProjectType[];
}
interface CarouselButtonsProps {
  onMove: (e: React.MouseEvent) => void;
}

interface CarouselModalInnerContentProps {
  data: ProjectType | null;
}

type CarouselItemProps = {
  data: ProjectType;
  deg: number;
  z: number;
  onClickItem: (data: ProjectType) => void;
};

const Carousel = ({ data }: CarouselProps) => {
  const selectedIndex = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemCount = data.length;
  const zNumber = Math.abs(250 / Math.tan(360 / itemCount / 2));
  const [modalData, setModalData] = useState<ProjectType | null>(null);
  const [toggle, setToggle] = useState(false);

  const rotateCarousel = () => {
    let angle = (selectedIndex.current / itemCount) * -360;
    const container = carouselRef.current! as HTMLDivElement;
    container.style.transform = `translateZ(-${zNumber}px) rotateY(${angle}deg)`;
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.currentTarget! as HTMLDivElement;
    target.className.includes('next')
      ? (selectedIndex.current += 1)
      : (selectedIndex.current -= 1);
    rotateCarousel();
  };

  const handleClickItem = (data: ProjectType) => {
    setToggle(true);
    setModalData(data);
  };

  return (
    <>
      <div className={styles.carousel_container}>
        <div
          className={styles.carousel}
          ref={carouselRef}
          style={{ '--z': zNumber } as React.CSSProperties}
        >
          {data.map((data, index) => {
            let deg = index * (360 / itemCount);
            return (
              <CarouselItem
                data={data}
                key={index}
                deg={deg}
                z={zNumber}
                onClickItem={handleClickItem}
              />
            );
          })}
        </div>
        <CarouselButtons onMove={handleClick} />
      </div>
      {toggle && (
        <Modal onClose={() => setToggle(false)}>
          <CarouselModalInnerContent data={modalData} />
        </Modal>
      )}
    </>
  );
};

export default Carousel;

function CarouselItem({ data, deg, z, onClickItem }: CarouselItemProps) {
  const { title, logo, imageUrl } = data;
  return (
    <>
      <div
        className={styles.item}
        onClick={() => onClickItem(data)}
        style={{
          transform: `rotateY(${deg}deg) translateZ(${z}px)`,
          backgroundImage: `url(${logo || imageUrl[0]})`,
        }}
      >
        <div className={styles.item_content_inner}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </>
  );
}

function CarouselButtons({ onMove }: CarouselButtonsProps) {
  return (
    <div className={styles.carousel_btns}>
      <button className={styles.prev} onClick={onMove}>
        <FaArrowLeft />
      </button>
      <button className={styles.next} onClick={onMove}>
        <FaArrowRight />
      </button>
    </div>
  );
}

function CarouselModalInnerContent({ data }: CarouselModalInnerContentProps) {
  const {
    title,
    explain,
    imageUrl,
    tech,
    service,
    deployment,
    url,
    githubUrl,
    readmeUrl,
  } = data! as ProjectType;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.Modal_inner}>
      <div className={styles.Moddal_inner_top}>
        <Slider {...settings}>
          {imageUrl.map(url => (
            <div className={styles.Modal_inner_img}>
              <img src={url} alt='project-img' />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.Moddal_inner_bottom}>
        <h1 className={styles.bottom_title}>{title}</h1>
        <p className={styles.bottom_explain}>{explain}</p>
        <ul className={styles.list}>
          <li>
            <span>SKILL</span> {tech}
          </li>
          <li>
            <span>DO</span> {service}
          </li>
          <li>
            <span>DEPLOYMENT</span> {deployment}
          </li>
        </ul>
        <div className={styles.icons}>
          <a
            className={styles.list_item}
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            <FaLink size='25' />
          </a>
          <a
            className={styles.list_item}
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub size='25' />
          </a>
          <a
            className={styles.list_item}
            href={readmeUrl}
            target='_blank'
            rel='noreferrer'
          >
            <SiNotion size='25' />
          </a>
        </div>
      </div>
    </div>
  );
}
