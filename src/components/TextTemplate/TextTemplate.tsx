import styled from 'styled-components';
import { AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { FaUserGraduate, FaBook, FaMapMarkerAlt } from 'react-icons/fa';

const TextTemplate = () => {
  return (
    <TextContainer>
      <div className='about_title'>
        <div className='name'>About 임동건</div>
        <p className='dev'>Front end developer</p>
      </div>
      <div className='about_info'>
        <div className='item'>
          <AiOutlineMail size={35} />
          <div className='item_contents'>
            <h3>이메일</h3>
            <p className='email'>ehdrjs130@gamil.com</p>
          </div>
        </div>
        <div className='item'>
          <AiOutlineCalendar size={35} />
          <div className='item_contents'>
            <h3>생년월일</h3>
            <p className='age'>1996 05 31</p>
          </div>
        </div>
        <div className='item'>
          <BsPencil size={33} />
          <div className='item_contents'>
            <h3>연락처</h3>
            <p className='age'>01086506766</p>
          </div>
        </div>
        <div className='item'>
          <FaUserGraduate size={35} />
          <div className='item_contents'>
            <h3>학력/수료</h3>
            <p className='age'>2015.03- 한남대학교 행정학과 입학</p>
            <p className='age'>2016.06- 군입대</p>
            <p className='age'>2018.09- 한남대학교 중퇴</p>
            <p className='age'>2020.02- 학점 은행제 경역학사</p>
            <p className='age'>2021.12- 스파르타 코딩클럽 항해99 수료</p>
          </div>
        </div>
        <div className='item'>
          <FaBook size={35} />
          <div className='item_contents'>
            <h3>자격증</h3>
            <p className='age'>토익 855점</p>
          </div>
        </div>
        <div className='item'>
          <FaMapMarkerAlt size={35} />
          <div className='item_contents'>
            <h3>주소</h3>
            <p className='age'>서울 서초구</p>
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
      align-items: start;
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

  @media (max-width: 1130px) {
    .about_info {
      display: flex;
      flex-direction: column;
      margin: auto;
      .item {
        font-size: 1.1rem;
      }
    }

    .about_title {
      text-align: center;
    }
    .name {
      font-size: 3rem;
    }

    .dev {
      font-size: 1.6rem;
    }
  }
`;
