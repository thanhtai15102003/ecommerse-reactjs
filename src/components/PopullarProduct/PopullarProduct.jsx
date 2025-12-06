import Layout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '../ProductItem/ProductItem';

const PopullarProduct = ({ data }) => {
    const { container } = styles;
    return (
        <>
            <Layout>
                <div className={container}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </Layout>
        </>
    );
};

export default PopullarProduct;
