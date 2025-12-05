import Layout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '../ProductItem/ProductItem';

const HeadingListProduct = () => {
    const { container, containerItem } = styles;
    return (
        <Layout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </Layout>
    );
};

export default HeadingListProduct;
