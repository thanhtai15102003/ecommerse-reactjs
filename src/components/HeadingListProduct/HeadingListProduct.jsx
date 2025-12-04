import Layout from '@components/Layout/Layout';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

const HeadingListProduct = () => {
    const targetDate = '2026-12-31T23:59:59'; // Example target date
    const { container, containerItem } = styles;
    return (
        <Layout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </Layout>
    );
};

export default HeadingListProduct;
