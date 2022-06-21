import React from 'react';
import styled from 'styled-components';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { DefaultTheme } from 'styled-components';
type CarouselProps = {
  children: React.ReactNode;
  themeContext: DefaultTheme;
};

type ProjectItemArrowProps = { themeContext: DefaultTheme } & CustomArrowProps;

const Carousel = ({ children, themeContext }: CarouselProps) => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ProjectItemNextArrow themeContext={themeContext} />,
    prevArrow: <ProjectItemPrevArrow themeContext={themeContext} />,
    draggable: true,
  };
  return (
    <SilderContainer>
      <StyledImageSlider {...settings}>{children}</StyledImageSlider>
    </SilderContainer>
  );
};

export default Carousel;

function ProjectItemNextArrow(props: ProjectItemArrowProps) {
  const { className, style, onClick, themeContext, currentSlide, slideCount } =
    props;
  return (
    <>
      <FaArrowRight
        className={className}
        style={{
          color: themeContext.color,
          width: '32px',
          height: '32px',
          zIndex: 10,
          position: 'absolute',
          top: '105%',
          right: '25%',
          ...style,
        }}
        onClick={e => {
          e.stopPropagation();
          onClick && onClick(e);
        }}
      />
      <div className='item_silder_container_index'>
        {currentSlide! + 1}/{slideCount}
      </div>
    </>
  );
}

function ProjectItemPrevArrow(props: ProjectItemArrowProps) {
  const { className, style, onClick, themeContext } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{
        color: themeContext.color,
        width: '32px',
        height: '32px',
        zIndex: 10,
        position: 'absolute',
        top: '105%',
        left: '25%',
        ...style,
      }}
      onClick={e => {
        e.stopPropagation();
        onClick && onClick(e);
      }}
    />
  );
}

const SilderContainer = styled.div`
  width: 40%;
  padding: 16px;

  .item_silder_container_index {
    font-size: 1.4rem;
    font-weight: 900;
    text-align: center;
    margin-top: 16px;
  }

  @media (max-width: 1130px) {
    width: 100%;
  }
`;

const StyledImageSlider = styled(Slider)`
  width: 100%;
  height: 600px;
`;
