import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import PopullarProduct from '../PopullarProduct/PopullarProduct';
import { useEffect, useState } from 'react';
import getProduct from '@/apis/productService';

const HomePage = () => {
    const { container } = styles;
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProduct().then((res) => {
            setListProduct(res.contents);
        });
    }, []);
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={listProduct.slice(0, 2)} />
                <PopullarProduct data={listProduct.slice(2, listProduct.length)} />
                <div style={{ height: '200px' }}></div>
            </div>
        </div>
    );
};

export default HomePage;
