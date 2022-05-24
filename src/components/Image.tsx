import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  isCircle: boolean;
  width?: string;
  height?: string;
  url: string;
}

const Image = (props: ImageProps) => {
  const { isCircle, width, height, url } = props;
  return (
    <ImageContainer
      isCircle={isCircle}
      width={width}
      height={height}
      url={url}
    ></ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div<ImageProps>`
  width: ${props => (props.width ? props.width : '32px')};
  height: ${props => (props.height ? props.height : '32px')};
  border-radius: ${props => (props.isCircle ? '50%' : '')};
  background-image: url(${props => props.url});
  background-size: cover;
  border: 1px solid #dfdfdf;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
