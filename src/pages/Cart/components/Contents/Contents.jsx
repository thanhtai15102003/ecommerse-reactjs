import styles from '../../styles.module.scss';
import CartTable from '@/pages/Cart/components/Contents/CartTable';
import CartSummary from '@/pages/Cart/components/Contents/CartSummary';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart, deleteItem, deleteCart } from '@/apis/CartService';
import { AiFillDelete } from 'react-icons/ai';
import { PiShoppingCartThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const Contents = () => {
    const { containerContents, boxFooter, boxCoupon, boxBtnDelete, boxEmptyCart, titleEmpty } =
        styles;
    const { listProductCart, handleGetListProductCart, isLoading, setIsLoading, userId } =
        useContext(SideBarContext);
        
  const navigate = useNavigate();

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

  const handleDeleteCart = () => {
      setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
            });
  };
  
  const handleNavigateToCart = () => {
    navigate('/shop');
  }

    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContents}>
                    <div>
                        <CartTable
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemCart}
                        />
                        <div className={boxFooter}>
                            <div className={boxCoupon}>
                                <input type="text" placeholder="Coupon code" />
                                <Button content={'OK'} isPrimary={false} />
                            </div>
                            <div className={boxBtnDelete}>
                                <Button
                                    content={
                                        <div>
                                            {' '}
                                            <AiFillDelete size={20} /> CLEAR SHOPPING CART{' '}
                                        </div>
                                    }
                                    isPrimary={false}
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <CartSummary />
                    </div>
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <PiShoppingCartThin size={50} />
                    <div className={titleEmpty}>your shopping cart is empty</div>
                    <div>
                        We invite you to get acquainted with an assortment of our shop. Surely you
                        can find something for yourself!
                    </div>
                    <div style={{width: '157px', padding: '0 20px'}}>
                        <Button content={'RETURN TO SHOP'} onClick={handleNavigateToCart} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Contents;
