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
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg"
                    alt=""
                />
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg"
                    alt=""
                    className={showImageWhenHover}
                />

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
            <div className={title}>10K Yellow Gold</div>
            <div className={priceClass}>$99.99</div>
        </div>
    );
};

export default ProductItem;
