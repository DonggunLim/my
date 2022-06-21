import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Image } from '../index';
import '../../styles/fonts/font.css';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import { AiOutlineRead } from 'react-icons/ai';
import { Carousel } from '../index';
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

  return (
    <ItemContainer className='item_container' themeContext={themeContext}>
      <Carousel themeContext={themeContext}>
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
      </Carousel>
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
