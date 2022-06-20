import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Image } from '../index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/fonts/font.css';
import {
  FaArrowRight,
  FaArrowLeft,
  FaGithub,
  FaPlayCircle,
} from 'react-icons/fa';
import { AiOutlineRead } from 'react-icons/ai';
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
  readmeUrl: string;
}

const ProjectItem = ({ data }: { data: ProjectItemProps }) => {
  const themeContext = useContext(ThemeContext);
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
    readmeUrl,
  } = data;

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
    <ItemContainer className='item_container' themeContext={themeContext}>
      <SilderContainer className='item_silder_container'>
        <StyledImageSlider {...settings}>
          {imageUrl.map((image: string, index) => (
            <Image
              isCircle=''
              width='100%'
              height='600px'
              url={image}
              bgColor='#dfdfdf'
              key={index}
            />
          ))}
        </StyledImageSlider>
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
          <a
            href={youtubeUrl}
            target='_blank'
            rel='noreferrer'
            className='footer_video'
          >
            <FaPlayCircle size={35} />
          </a>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            className='footer_github'
          >
            <FaGithub size={35} />
          </a>
          <a
            href={readmeUrl}
            target='_blank'
            rel='noreferrer'
            className='footer_readme'
          >
            <button>
              <AiOutlineRead size={35} />
              &ensp;Read Me
            </button>
          </a>
        </div>
      </TextContainer>
    </ItemContainer>
  );
};

export default ProjectItem;

function ProjectItemNextArrow(props: any) {
  const { className, style, onClick, themeContext } = props;
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
          onClick();
        }}
      />
      <div className='item_silder_container_index'>
        {props.currentSlide + 1}/{props.slideCount}
      </div>
    </>
  );
}

function ProjectItemPrevArrow(props: any) {
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
        onClick();
      }}
    />
  );
}

const ItemContainer = styled.div<{
  themeContext: { color: string; bgColor: string };
}>`
  width: 100%;
  display: flex;
  padding: 40px 0px;
  border: 1px solid #dfdfdf;
  border-radius: 1rem;
  background-color: #fff;
  margin: 24px 0px;
  background-color: ${props => props.themeContext.bgColor};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media (max-width: 1130px) {
    flex-direction: column;
  }
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

  @media (max-width: 1130px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 16px;

  .textcontainer_title {
    font-weight: 400;
    font-size: 2.6rem;
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
    width: 40%;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 8px;
  }

  .textcontainer_body_contents {
    width: 60%;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: Noto Sans KR, sans-serif;
    line-height: normal;
    text-overflow: ellipsis;
  }

  .textcontainer_body_footer {
    display: flex;
    margin: 6px;
    justify-content: center;
    a {
      cursor: pointer;
      margin: 4px;

      button {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        background-color: #fff;
        border: 1px solid #dfdfdf;
        cursor: pointer;
        border-radius: 8px;
        &:hover {
          background-color: #dfdfdf;
        }
      }
    }
  }
  @media (max-width: 1130px) {
    width: 100%;
    margin-top: 16px;
    .textcontainer_title {
      font-size: 2rem;
    }
  }
`;

const StyledImageSlider = styled(Slider)`
  width: 100%;
  height: 600px;
`;
