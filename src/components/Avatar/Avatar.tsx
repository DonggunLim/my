import aboutImgae from '../../assets/image/myimage.jpg';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <>
      <img src={aboutImgae} className={styles.img} alt='avatar' />
    </>
  );
};

export default Avatar;
