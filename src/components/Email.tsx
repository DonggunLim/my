import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Spinner } from './index';
import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Image } from './index';
import myImage from '../assets/image/myimage.jpg';

interface EmailProps {
  emailVisible: boolean;
  handleVisible: () => void;
}

const Email = (props: EmailProps) => {
  const { emailVisible, handleVisible } = props;
  const [checkStatus, setCheckStatus] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSpinnerVisible(true);
    emailjs
      .sendForm(
        'portfolio_service',
        'template_zxql2l9',
        formRef.current! as HTMLFormElement,
        'N_kjurkulRPoR7eXn',
      ) //
      .then(_result => {
        setCheckStatus(prev => !prev);
        setSpinnerVisible(false);
      })
      .catch(error => {
        throw new Error(`${error}`);
      });
  };

  return (
    <EmailContainer className='email_container' emailVisible={emailVisible}>
      <Spinner visible={spinnerVisible} />
      <section className='email_header'>
        <div className='header_left'>
          <Image url={myImage} isCircle='true' width='30px' height='30px' />
          <p>관심주셔서 감사합니다.</p>
        </div>
        <IoClose
          size='32px'
          className='email_close_btn'
          onClick={handleVisible}
        />
      </section>
      <form className='email_form' onSubmit={sendEmail} ref={formRef}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          className='form_email'
          name='visitor'
          placeholder='연락가능한 이메일'
        />
        <label htmlFor='form_message'>Message</label>
        <textarea id='form_message' className='form_message' name='message' />
      </form>
      <CheckButton
        className='form_check'
        onClick={sendEmail}
        checkStatus={checkStatus}
      >
        <FaCheck size='38px' className='check_image' />
      </CheckButton>
    </EmailContainer>
  );
};

export default Email;

const EmailContainer = styled.section<{ emailVisible: boolean }>`
  display: ${props => (props.emailVisible ? 'block' : 'none')};
  width: 300px;
  height: 500px;
  border: 1px solid #f2f2f2;
  position: fixed;
  bottom: 8%;
  right: 5%;
  background-color: #fff;
  color: black;
  border-radius: 16px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  animation: fadein 1s ease-in-out;
  border: none;

  .email_form {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .form_message {
    width: 100%;
    height: 300px;
    border: 1px solid #e6e9ed;
    resize: none;
    margin-top: 6px;
    font-size: 1.1rem;

    &:focus {
      border: 1px solid black;
    }
  }

  input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #e6e9ed;
    font-size: 1.1rem;
    margin-top: 6px;

    &:focus {
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid black;
    }
    ::placeholder {
      font-size: 1rem;
      opacity: 0.3;
    }
  }

  label {
    font-size: 1.2rem;
  }
  .email_header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px;
  }

  .header_left {
    display: flex;
    align-items: center;
    p {
      padding-left: 6px;
      font-size: 1rem;
    }
  }

  .email_close_btn {
    text-align: end;
    cursor: pointer;
  }
`;

const CheckButton = styled.button<{ checkStatus: boolean }>`
  ${props => (props.checkStatus ? 'color: #52ff32f5' : 'color: #fefefe')};
  background-color: #efefef;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
