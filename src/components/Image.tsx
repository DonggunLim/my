import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  isCircle: boolean;
  width?: string;
  height?: string;
  url?: string;
  bgColor?: string;
}

const Image = (props: ImageProps) => {
  const { isCircle, width, height, url, bgColor } = props;

  return (
    <ImageContainer
      isCircle={isCircle}
      width={width}
      height={height}
      url={url}
      bgColor={bgColor}
    ></ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div<ImageProps>`
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  border-radius: ${props => (props.isCircle ? '50%' : '')};
  border: 1px solid #dfdfdf;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);

  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  // transition: all 0.2s linear;
  // &:hover {
  //   transform: scale(2.1);
  // }
`;
