import styles from './styles.module.scss';
import { IoClose } from 'react-icons/io5';
import { deleteItem } from '@/apis/CartService';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';


const ItemProduct = ({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) => {
    const { boxContent, container, title, price, boxClose, size, overlayLoading } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductCart } = useContext(SideBarContext);

    const handleRemoveItem = () => {
        setIsDelete(true);
        deleteItem({
            productId,
            userId
        })
            .then((res) => {
                setIsDelete(false);
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                setIsDelete(false);
            });
    };
    return (
        <div className={container}>
            <img src={src} alt="" />

            <div className={boxClose} onClick={handleRemoveItem}>
                <IoClose
                    style={{
                        fontSize: '20px',
                        color: 'c1c1c1'
                    }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>{sizeProduct}</div>
                <div className={price}>
                    {quantity} * ${priceProduct}
                </div>
                <div className={price}>{skuProduct}</div>
            </div>

            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
};

export default ItemProduct;
