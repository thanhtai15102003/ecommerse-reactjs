import styles from '../styles.module.scss'
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';


const Banner = () => {
    const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;
    const a = useContext(OurShopContext);
    const targetDate = '2026-01-01T23:59:59';
    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <div className={title}>The Classics Make a Comeback</div>

                    <div className={boxBtn}>
                        <Button content="Buy now" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
