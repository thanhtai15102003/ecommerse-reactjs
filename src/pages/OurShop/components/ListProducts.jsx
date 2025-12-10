import Layout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import LoadingTextCommon from '../../../components/LoadingTextCommon/LoadingTextCommon';

const ListProducts = () => {
    const { product, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } = useContext(OurShopContext);
    const { containerProduct, sectionListProduct } = styles;

    return (
        <div className={sectionListProduct}>
            <Layout>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {product.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomepage={false}
                                />
                            ))}
                        </div>
                        {product.length < total && (
                            <div style={{ width: '180px', margin: '50px auto' }}>
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextCommon />
                                        ) : (
                                            'LOAD MORE PRODUCTS'
                                        )
                                    }
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </Layout>
        </div>
    );
};

export default ListProducts;
