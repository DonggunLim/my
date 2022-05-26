import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from './index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightArrow from '../assets/image/rightArrow.png';
import leftArrow from '../assets/image/leftArrow.png';
import video from '../assets/image/video.png';
import github from '../assets/image/github_git_icon.png';
import '../styles/fonts/font.css';

interface ProjectItemProps {
  title: string;
  explain: string;
  tech: string;
  service: string;
  deployment: string;
  url: string;
  youtubeUrl: string;
  githubUrl: string;
  imageUrl: string[];
}

const ProjectItem = ({ data }: { data: ProjectItemProps }) => {
  const {
    title,
    explain,
    tech,
    service,
    deployment,
    url,
    youtubeUrl,
    githubUrl,
    imageUrl,
  } = data;

  const TOTAL_IMAGE_COUNT = imageUrl.length;
  const [currentImageCount, setCurrentImageCount] = useState(1);

  const Increase = () => {
    currentImageCount >= TOTAL_IMAGE_COUNT
      ? setCurrentImageCount(1)
      : setCurrentImageCount(currentImageCount + 1);
  };

  const decrease = () => {
    currentImageCount === 1
      ? setCurrentImageCount(TOTAL_IMAGE_COUNT)
      : setCurrentImageCount(currentImageCount - 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ProjectItemNextArrow Increase={Increase} />,
    prevArrow: <ProjectItemPrevArrow decrease={decrease} />,
    draggable: false,
  };

  return (
    <ItemContainer className='item_container'>
      <SilderContainer className='item_silder_container'>
        <StyledImageSlider {...settings}>
          {imageUrl.map((image: string, index) => (
            <Image
              isCircle={false}
              width='100%'
              height='600px'
              url={image}
              bgColor='#dfdfdf'
              key={index}
            />
          ))}
        </StyledImageSlider>
        <div className='item_silder_container_index'>
          {currentImageCount}/{TOTAL_IMAGE_COUNT}
        </div>
      </SilderContainer>
      <TextContainer className='item_text_container'>
        <h1 className='textcontainer_title'>{title}</h1>
        <p className='textcontainer_explain'>{explain}</p>
        <div className='textcontainer_body'>
          <div className='textcontainer_body_item'>
            <div className='textcontainer_body_subtitle'>Skill</div>
            <div className='textcontainer_body_contents'>{tech}</div>
          </div>
          <div className='textcontainer_body_item'>
            <div className='textcontainer_body_subtitle'>I DID</div>
            <div className='textcontainer_body_contents'>{service}</div>
          </div>
          <div className='textcontainer_body_item'>
            <div className='textcontainer_body_subtitle'>URL</div>
            <div className='textcontainer_body_contents'>
              <a href={url}>{url === 'false' ? '❌' : url}</a>
            </div>
          </div>
          <div className='textcontainer_body_item'>
            <div className='textcontainer_body_subtitle'>Deployment</div>
            <div className='textcontainer_body_contents'>{deployment}</div>
          </div>
        </div>
        <div className='textcontainer_body_footer'>
          <a href={youtubeUrl} className='footer_video'>
            <Image isCircle={true} url={video} width='40px' height='40px' />
          </a>
          <a href={githubUrl} className='footer_github'>
            <Image isCircle={true} url={github} width='40px' height='40px' />
          </a>
        </div>
      </TextContainer>
    </ItemContainer>
  );
};

export default ProjectItem;

function ProjectItemNextArrow(props: any) {
  const { className, style, onClick, Increase } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'white',
        backgroundImage: `url(${rightArrow})`,
        backgroundSize: 'contain',
        width: '22px',
        height: '22px',
      }}
      onClick={e => {
        e.stopPropagation();
        onClick();
        Increase();
        console.log('itemslider');
      }}
    />
  );
}

function ProjectItemPrevArrow(props: any) {
  const { className, style, onClick, decrease } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        backgroundImage: `url(${leftArrow})`,
        backgroundSize: 'contain',
        width: '22px',
        height: '22px',
      }}
      onClick={e => {
        e.stopPropagation();
        onClick();
        decrease();
        console.log('itemslider');
      }}
    />
  );
}

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
`;

const SilderContainer = styled.div`
  width: 40%;
  padding: 16px;

  .item_silder_container_index {
    font-size: 1.4rem;
    font-weight: 900;
    text-align: center;
    margin-top: 16px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 44px;

  .textcontainer_title {
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    margin: 16px 0px;
    font-family: 'BlackHanSans-Regular';
  }

  .textcontainer_explain {
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .textcontainer_body {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
  }

  .textcontainer_body_item {
    display: flex;
    margin-bottom: 1rem;
  }
  .textcontainer_body_subtitle {
    width: 20%;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 8px;
  }

  .textcontainer_body_contents {
    width: 80%;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: Noto Sans KR, sans-serif;
    line-height: normal;
  }

  .textcontainer_body_footer {
    display: flex;
    margin: 6px;
    justify-content: center;
    a {
      cursor: pointer;
      margin: 4px;
    }
  }
`;

const StyledImageSlider = styled(Slider)`
  width: 100%;
  height: 600px;
`;
