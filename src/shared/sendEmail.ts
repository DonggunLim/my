import emailjs from '@emailjs/browser';
type SendEmailType = (
  formRef: React.RefObject<HTMLFormElement>,
  setCheckStatus: React.Dispatch<React.SetStateAction<boolean>>,
  setSpinnerVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => void;

const sendEmail: SendEmailType = (
  formRef,
  setCheckStatus,
  setSpinnerVisible,
) => {
  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID! as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID! as string,
      formRef.current! as HTMLFormElement,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    ) //
    .then(_result => {
      setCheckStatus(prev => !prev);
      setSpinnerVisible(false);
    })
    .catch(error => {
      throw new Error(`${error}`);
    });
};

export default sendEmail;
