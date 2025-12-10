import styles from './styles.module.scss';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { PiShoppingCart } from 'react-icons/pi';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

const Cart = () => {
    const { container, total, boxBtn, containerListProduct, overlayLoading } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                    title="CART"
                />
                <div className={containerListProduct}>
                    {listProductCart.map((item, index) => {
                        return (
                            <ItemProduct
                                key={index}
                                src={item.images[0]}
                                nameProduct={item.name}
                                priceProduct={item.price}
                                skuProduct={item.sku}
                                sizeProduct={item.size}
                                quantity={item.quantity}
                                productId={item.productId}
                                userId={item.userId}
                            />
                        );
                    })}
                    {isLoading && (
                        <div className={overlayLoading}>
                            <LoadingTextCommon />
                        </div>
                    )}
                </div>
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
};

export default Cart;
