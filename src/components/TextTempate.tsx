import styled from 'styled-components';
import { Image } from './index';
import brithIcon from '../assets/image/icons8-birthday-35.png';
import EmailIcon from '../assets/image/icons8-gmail-35.png';
import penIcon from '../assets/image/icons8-pen-35.png';
import graduateIcon from '../assets/image/icons8-graduate-35.png';
import callIcon from '../assets/image/icons8-call-30.png';
import '../styles/fonts/font.css';

const TextTemplate = () => {
  return (
    <TextContainer>
      <div className='about_title'>
        <div className='name'>About 임동건</div>
        <p className='dev'>Front end developer</p>
      </div>
      <div className='about_info'>
        <div className='item'>
          <Image
            isCircle='true'
            url={EmailIcon}
            width='40px'
            height='40px'
            bgSize='none'
          />
          <div className='item_contents'>
            <h3>이메일</h3>
            <p className='email'>ehdrjs130@gamil.com</p>
          </div>
        </div>
        <div className='item'>
          <Image isCircle='true' url={brithIcon} width='40px' height='40px' />
          <div className='item_contents'>
            <h3>생년월일</h3>
            <p className='age'>1996 05 31</p>
          </div>
        </div>
        <div className='item'>
          <Image
            isCircle='true'
            url={callIcon}
            width='40px'
            height='40px'
            bgSize='none'
          />
          <div className='item_contents'>
            <h3>연락처</h3>
            <p className='age'>01086506766</p>
          </div>
        </div>
        <div className='item'>
          <Image
            isCircle='true'
            url={graduateIcon}
            width='40px'
            height='40px'
            bgSize='none'
          />
          <div className='item_contents'>
            <h3>학력/수료</h3>
            <p className='age'>2015.03- 한남대학교 행정학과 입학</p>
            <p className='age'>2016.06- 군입대</p>
            <p className='age'>2018.09- 한남대학교 중퇴</p>
            <p className='age'>2020.02- 학점 은행제 경역학사 취득</p>
            <p className='age'>2021.09- 스파르타 코딩클럽 항해99 수료</p>
          </div>
        </div>
        <div className='item'>
          <Image isCircle='true' url={penIcon} width='40px' height='40px' />
          <div className='item_contents'>
            <h3>자격증</h3>
            <p className='age'>토익 855점</p>
          </div>
        </div>
      </div>
    </TextContainer>
  );
};

export default TextTemplate;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  .about_title {
    text_align: center;
  }

  .about_info {
    display: flex;
    flex-wrap: wrap;
    font-size: 26px;
    padding: 6px;
    margin-top: 16px;

    .item {
      flex: 1 1 30%;
      display: flex;
      flex-direction: row;
      margin: 15px;
    }

    .item_contents {
      margin-left: 16px;

      p {
        font-size: 1.2rem;
        font-weight: 400;
        font-family: Noto Sans KR, sans-serif;
        line-height: normal;
      }
    }

    h3 {
      font-family: 'BlackHanSans-Regular';
    }
  }
  .name {
    font-size: 5rem;
    font-family: 'BlackHanSans-Regular';
  }
  .dev {
    font-size: 2.2rem;
    font-weight: 400;
    font-family: 'BlackHanSans-Regular';
  }
`;
