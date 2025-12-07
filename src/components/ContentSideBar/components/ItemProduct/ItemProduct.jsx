import styles from './styles.module.scss';
import { IoClose } from 'react-icons/io5';


const ItemProduct = () => {
    const { boxContent, container, title, price, boxClose } = styles;
  return (
      <div className={container}>
          <img
              src="//xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min-285x340.jpg"
              alt=""
          />

          <div className={boxClose}>
              <IoClose style={{
                  fontSize: '20px',
                  color: 'c1c1c1'
              }} />
          </div>

          <div className={boxContent}>
              <div className={title}>title of product</div>
              <div className={price}>$1.99</div>
          </div>
      </div>
  );
}

export default ItemProduct
