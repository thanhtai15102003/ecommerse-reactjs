import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import { BsCart3 } from 'react-icons/bs';
import Button from '@components/Button/Button';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import classNames from 'classnames';
import { addProductToCart } from '@/apis/CartService';

const DetailProduct = () => {
    const { detailProduct, userId, setType, handleGetListProductCart, setIsLoading, setIsOpen } =
        useContext(SideBarContext);
    const [chosseSize, setChoseSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    console.log(detailProduct);
    const {
        container,
        title,
        price,
        des,
        boxSize,
        size,
        label,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxOther,
        boxFooter,
        shareIcons,
        isActive
    } = styles;

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const hanldeGetSize = (value) => {
        console.log(value);
        setChoseSize(value);
    };
    const handleClearSize = () => {
        setChoseSize('');
    };
    const handleGetQuantity = (value) => {
        setQuantity(value);
    };
    const handkeAddToCart = () => {
        const data = {
            userId,
            productId: detailProduct._id,
            quantity,
            size: chosseSize,
            isMultiple: true
        };
        setIsOpen(false)
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true)
                setType('cart');
                handleGetListProductCart(userId, 'cart');
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />

            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>
            <div className={label}>Size {chosseSize}</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div
                        className={classNames(size, {
                            [isActive]: item.name === chosseSize
                        })}
                        key={index}
                        onClick={() => hanldeGetSize(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            {chosseSize && (
                <div
                    onClick={handleClearSize}
                    style={{ fontSize: '12px', marginTop: '3px', cursor: 'pointer' }}
                >
                    {' '}
                    clear{' '}
                </div>
            )}
            <div className={boxAddToCart}>
                <SelectBox
                    options={showOptions}
                    type="show"
                    defaultValue={quantity}
                    getValue={handleGetQuantity}
                />

                <div>
                    <Button
                        content={
                            <div>
                                {' '}
                                <BsCart3 /> ADD TO CART
                            </div>
                        }
                        onClick={handkeAddToCart}
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <Button
                content={
                    <div>
                        {' '}
                        <BsCart3 /> SELECT OPTIONS
                    </div>
                }
            />
            <div className={boxOther}>
                <TfiReload size={20} />
                <div>Add to compare</div>
            </div>
            <div className={boxOther}>
                <CiHeart size={25} />
                <div>Add to wishlist</div>
            </div>
            <div className={boxFooter}>
                SKU: <span>12349</span>
            </div>
            <div className={boxFooter}>
                Category: <span>Pullovers</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery: <span>3 - 5 days</span>
            </div>
            <div className={boxFooter}>
                Share:{' '}
                <span className={shareIcons}>
                    <FaFacebookF />
                    <FaInstagramSquare />
                    <FaYoutube />
                    <FaRocketchat />
                    <SiZalo />
                </span>
            </div>
        </div>
    );
};

export default DetailProduct;
