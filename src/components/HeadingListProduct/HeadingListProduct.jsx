import Layout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '../ProductItem/ProductItem';

const HeadingListProduct = ({ data }) => {
    const { container, containerItem } = styles;
    
    return (
        <Layout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem key={item.id} {...item} 
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HeadingListProduct;
