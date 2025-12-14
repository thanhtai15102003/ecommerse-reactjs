import styles from './styles.module.scss';
import heart2Icon from '@icons/svgs/heart2Icon.svg';
import reload2Icon from '@icons/svgs/reload2Icon.svg';
import eyesIcon from '@icons/svgs/eyesIcon.svg';
import bagIcon from '@icons/svgs/bagIcon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/CartService';
import LoadingTextCommon from '../LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ src, prevSrc, name, price, details, isHomepage = true }) => {
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const isShowGrid = isHomepage || ourShopStore?.isShowGrid;
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        boxImg,
        showImageWhenHover,
        showFnWhenHover,
        boxIcon,
        title,
        priceClass,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddtoCart = () => {
        console.log(userId);
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to continue');

            return;
        }
        if (!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }
        // console.log(details);

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };

        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                toast.success('Add to cart successfully');
                setIsLoading(false);
                handleGetListProductCart(userId, 'cart');
            })
            .cacth((err) => {
                toast.error('Add to cart failed');
                setIsLoading(false);
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details)
    };

    const handleNavigateToDetail = () => {
        console.log(details._id)

        const path = `/product/${details._id}`;
        navigate(path);
    }

    return (
        <div className={isShowGrid ? '' : containerItem} style={{ cursor: 'pointer' }} onClick={handleNavigateToDetail}>
            <div className={classNames(boxImg, { [largImg]: !isShowGrid })}>
                <img src={src} alt="" />
                <img src={prevSrc} alt="" className={showImageWhenHover} />

                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img src={bagIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heart2Icon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={reload2Icon} alt="" />
                    </div>
                    <div className={boxIcon} onClick={handleShowDetailProductSideBar}>
                        <img src={eyesIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    className={classNames(size, {
                                        [isActiveSize]: sizeChoose === item.name
                                    })}
                                    key={index}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div onClick={handleClearSize} className={btnClear}>
                        clear
                    </div>
                )}

                <div className={classNames(title, { [textCenter]: !isHomepage })}>{name}</div>
                {!isHomepage && (
                    <div className={textCenter} style={{ color: '#c1c1c1' }}>
                        Brand 01{' '}
                    </div>
                )}
                <div
                    className={classNames(priceClass, { [textCenter]: !isHomepage })}
                    style={{ color: isHomepage ? '#333' : '#888' }}
                >
                    ${price}
                </div>
                {!isHomepage && (
                    <div className={classNames(boxBtn, { [leftBtn]: !isShowGrid })}>
                        {' '}
                        <Button
                            content={isLoading ? <LoadingTextCommon /> : 'ADD TO CARD'}
                            onClick={handleAddtoCart}
                        />{' '}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
