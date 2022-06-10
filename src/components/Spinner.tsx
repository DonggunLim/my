import React from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

interface SpinnerProps {
  visible: boolean;
}

const Spinner = (props: SpinnerProps) => {
  const { visible } = props;
  return (
    <>
      {visible && (
        <SpinnerContainer className='spinner_container'>
          <ThreeDots
            width='50px'
            height='50px'
            color='#354259'
            visible={visible}
          />
        </SpinnerContainer>
      )}
    </>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: none;

  background-color: rgba(0, 0, 0, 0.3);
`;
