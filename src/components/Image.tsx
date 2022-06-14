import styled, { css } from 'styled-components';

interface ImageProps {
  isCircle: string;
  width?: string;
  height?: string;
  url?: string;
  bgColor?: string;
  bgSize?: string;
  hover?: boolean;
}

const Image = (props: ImageProps) => {
  const { isCircle, width, height, url, bgColor, bgSize, hover } = props;

  return (
    <ImageContainer
      isCircle={isCircle}
      width={width}
      height={height}
      url={url}
      bgColor={bgColor}
      bgSize={bgSize}
      hover={hover}
    ></ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div<ImageProps>`
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  border-radius: ${props =>
    props.isCircle === 'true' ? '50%' : props.isCircle};
  border: 1px solid #dfdfdf;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);

  background-image: url(${props => props.url});
  background-size: ${props => (props.bgSize ? props.bgSize : 'contain')};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.hover
      ? css`
          transition: all 0.3s linear;
          &:hover {
            transform: scale(1.1);
          }
        `
      : ''}
`;
