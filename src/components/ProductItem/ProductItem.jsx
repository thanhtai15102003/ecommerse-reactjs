import styles from './styles.module.scss';
import heart2Icon from '@icons/svgs/heart2Icon.svg';
import reload2Icon from '@icons/svgs/reload2Icon.svg';
import eyesIcon from '@icons/svgs/eyesIcon.svg';
import BoxIcon from '../Header/BoxIcon/BoxIcon';
import bagIcon from '@icons/svgs/bagIcon.svg';
const ProductItem = ({ src, prevSrc, name, price }) => {
    const { boxImg, showImageWhenHover, showFnWhenHover, boxIcon, title, priceClass } = styles;
    return (
        <div>
            <div className={boxImg}>
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
                    <div className={boxIcon}>
                        <img src={eyesIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceClass}>{price}</div>
        </div>
    );
};

export default ProductItem;
