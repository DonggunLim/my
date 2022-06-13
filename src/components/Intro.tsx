import React, { useEffect, useState, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { RiDoubleQuotesL } from 'react-icons/ri';
const Intro = React.forwardRef((props, ref) => {
  const [textCount, setTextCount] = useState(0);

  const convertedText = [
    `\n 아쉬운 부분은 다듬어가는 `,
    '\n 노력과 결과를 보여줄 수있는 ',
    '\n 더 좋은 코드에 대해 고민하는 ',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextCount(count => (count + 1) % convertedText.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <IntroContainer
        className='intro'
        ref={node => {
          (ref! as React.MutableRefObject<Array<HTMLElement>>).current[0] =
            node!;
        }}
      >
        <div className='intro_item'>
          <h3>안녕하세요.</h3>
          <div className='intro_item_second'>
            {convertedText.map((text, index) => (
              <ConvertedText
                state={index === textCount ? 'active' : 'hide'}
                key={index}
              >
                {/* &emsp;&emsp;&emsp;&emsp; */}
                {text}
              </ConvertedText>
            ))}
          </div>
          <h3> 프론트 엔드 개발자 임동건입니다.</h3>
        </div>

        <div className='mouse_image_container'>
          <BsChevronDoubleDown size={40} className='mouse_image' />
        </div>
      </IntroContainer>
    </>
  );
});

export default Intro;

const IntroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-size: 2.6rem;

  h3 {
    margin-top: 24px;
  }

  .intro_item {
    padding: 16px;
  }

  .intro_item_second {
    text-align: center;
    padding-right: 20%;
  }
  .intro_item > h3:nth-child(3) {
    text-align: end;
  }

  .mouse_image_container {
    position: absolute;
    bottom: 50px;
    left: 50%;
  }

  .mouse_image {
    color: #d0d0d0;
    animation: bounce 0.5s infinite alternate;

    @keyframes bounce {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-15px);
      }
    }
  }
`;

const ConvertedText = styled.h3<{ state: string }>`
  animation: fadein 4s ease-in-out;
  text-align:center;

  ${props =>
    props.state === 'active'
      ? css`
          display: inline-block;
          @keyframes fadein{
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: none;
            }
        `
      : css`
          display: none;
        `}}
`;
