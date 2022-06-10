import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Spinner } from './index';
import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface ModalProps {
  modalVisible: boolean;
  handleModal: () => void;
}

const Modal = (props: ModalProps) => {
  const { modalVisible, handleModal } = props;
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
    <ModalContainer className='modal_container' modalVisible={modalVisible}>
      <Spinner visible={spinnerVisible} />
      <div className='modal_header' onClick={handleModal}>
        <IoClose size='32px' className='modal_close_btn' />
      </div>
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
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.section<{ modalVisible: boolean }>`
  display: ${props => (props.modalVisible ? 'block' : 'none')};
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
  .modal_header {
    text-align: end;
    background-color: #efefef;
    width: 100%;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    padding: 8px;
  }
  .modal_close_btn {
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
