import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
const CountdownBanner = () => {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2026-01-01T23:59:59'; // Example target date
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content="Buy now" />
            </div>
        </div>
    );
};

export default CountdownBanner;
