import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Image } from '../index';
import { Carousel, ProjectItemText } from '../index';
import { ProjectDataProps } from '../Projects/Projects';
export interface ProjectItemProps {
  data: ProjectDataProps;
}

const ProjectItem = ({ data }: ProjectItemProps) => {
  const themeContext = useContext(ThemeContext);
  const { imageUrl } = data;

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
      <ProjectItemText data={data} themeContext={themeContext} />
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
