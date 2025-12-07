import styles from './styles.module.scss'
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCart } from 'react-icons/pi';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const Cart = () => {
    const { container, total, boxBtn } = styles;
  return (
      <div className={container}>
          <div>
              <HeaderSideBar
                  icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                  title="CART"
              />

              <ItemProduct />
          </div>
          <div>
              <div className={total}>
                  <p>SUBTOTAL: </p>
                  <p>$1.99 </p>
              </div>

              <div className={boxBtn}>
                  <Button content={'  VIEW CART  '} />
                  <Button content={'  CHECKOUT  '} isPrimary={false} />
                  
              </div>
          </div>
      </div>
  );
}

export default Cart
